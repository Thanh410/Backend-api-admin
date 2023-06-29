const Hotel = require("../model/Hotel");

class HotelController {
  // POST /api/hotel/
  createHotel(req, res, next) {
    const hotel = new Hotel(req.body);
    hotel
      .save()
      .then((hotel) => res.json(hotel))
      .catch(next());
  }

  // UPDATE /api/hotel/:id
  async updateHotel(req, res, next) {
    try {
      const hotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(hotel);
    } catch (err) {
      next(err);
    }
  }

  // DELETE /api/hotel/find/:id
  async deleteHotel(req, res, next) {
    try {
      const hotel = await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).send("Hotel has been  deleted");
    } catch (err) {
      next(err);
    }
  }
  // GET  /api/hotel/:id
  async getHotel(req, res, next) {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (err) {
      next(err);
    }
  }

  // GETALL  /api/hotel/:id
  async getHotels(req, res, next) {
    try {
      const hotels = await Hotel.findById({});
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new HotelController();
