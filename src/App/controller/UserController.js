const User = require("../model/User");

class UserController {
  // POST /api/User/
  createUser(req, res, next) {
    const User = new User(req.body);
    User.save()
      .then((User) => res.json(User))
      .catch(next());
  }

  // UPDATE /api/User/:id
  async updateUser(req, res, next) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id);
      res.status(200).json(User);
    } catch (err) {
      next(err);
    }
  }

  // DELETE /api/User/find/:id
  async deleteUser(req, res, next) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).send("User has been  deleted");
    } catch (err) {
      next(err);
    }
  }
  // GET  /api/User/:id
  async getUser(req, res, next) {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  // GETALL  /api/User/:id
  async getUsers(req, res, next) {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
