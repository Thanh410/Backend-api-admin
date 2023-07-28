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
      const email = await User.findOne({ email: req.body.email });
      if (!email) return next(createError(404, "Email not found!"));

      const isPasswordCorrect = bcrypt.compare(
        req.body.password,
        email.password
      );

      if (!isPasswordCorrect)
        return next(createError(400, "Wrong email or password "));

      const token = jwt.sign(
        { id: email._id, isAdmin: email.isAdmin },
        process.env.JWT
      );
      const { password, isAdmin, ...ortherDetail } = email._doc;

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
