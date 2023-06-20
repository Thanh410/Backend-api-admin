const Room = require("../model/Room");
const Hotel = require("../model/Hotel");
const createError = require("../../utils/error");

class RoomController {
  // POST /api/Room/
  async createRoom(req, res, next) {
    const room = new Room(req.body);
    const hotelId = req.params.hotelId;
    try {
      await room.save();
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $push: { rooms: room._id },
        });
      } catch (err) {
        next(err);
      }
      res.json(req.body);
    } catch (err) {
      next(err);
    }
  }

  // UPDATE /api/Room/:id
  async updateRoom(req, res, next) {
    try {
      const room = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(room);
    } catch (err) {
      next(err);
    }
  }

  // DELETE /api/Room/find/:id
  async deleteRoom(req, res, next) {
    try {
      const room = await Room.findByIdAndDelete(req.params.id);
      res.status(200).send("Room has been  deleted");
    } catch (err) {
      next(err);
    }
  }
  // GET  /api/Room/:id
  async getRoom(req, res, next) {
    try {
      const room = await Room.findById(req.params.id);
      res.status(200).json(room);
    } catch (err) {
      next(err);
    }
  }

  // GETALL  /api/Room/:id
  async getRooms(req, res, next) {
    try {
      const rooms = await Room.find({});
      res.status(200).json(rooms);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new RoomController();
