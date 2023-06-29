var bcrypt = require("bcryptjs");
const createError = require("../../utils/error");
var jwt = require("jsonwebtoken");
const User = require("../model/User");

class AuthController {
  // POST /api/auth/regiter
  async register(req, res, next) {
    try {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({
        ...req.body,
        password: hash,
      });

      await newUser.save();
      res.status(200).send("User has been created");
    } catch (err) {
      next(err);
    }
  }
  // POST /api/auth/login
  async login(req, res, next) {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) return next(createError(404, "User not found!"));

      const isPasswordCorrect = bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!isPasswordCorrect)
        return next(createError(400, "Wrong username or password "));

      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT
      );
      const { password, isAdmin, ...ortherDetail } = user._doc;

      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ ...ortherDetail, isAdmin });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AuthController();
