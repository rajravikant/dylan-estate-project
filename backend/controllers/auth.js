const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const createHttpError = require("http-errors");
const { v4: uuidv4 } = require("uuid");

exports.postSignUp = (req, res, next) => {
  const { name, email, password,country,role,phone } = req.body;
  const valiResult = validationResult(req);
  if (!valiResult.isEmpty()) {
    return next(createHttpError(416, valiResult.array()[0].msg));
  }
  User.findOne({ email: email })
    .then((found) => {
      if (found) {
        return next(createHttpError(409, "Email already in use"));
      }
      return bycrypt.hash(password, 6).then((hasedPassword) => {
        const user = new User({
          name,
          email,
          country,
          role,
          phone,
          password: hasedPassword,
        });
        return user.save().then((result) => {
          res.status(201).json({
            message: "user created succesfully you may login",
            userId: result._id,
          });
        });
      });
    })
    .catch((err) => next(err));
};

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;
  const valiResult = validationResult(req);
  if (!valiResult.isEmpty()) {
    return next(createHttpError(406, valiResult.array()[0].msg));
  }
  User.findOne({ email: email })
    .select("+password +email").populate('properties')
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "No account exits!" });
      }
      bycrypt.compare(password, user.password).then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign(
            { email: user.email, userId: user._id.toString() },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          );
          return res.status(200).json({
            token: token,
            user : {
              id : user._id.toString(),
              name : user.name,
              phone : user.phone,
              country : user.country,
              role : user.role,
              avatar : user.avatar,
              properties : user.properties,
            },
          });
        } else {
          return next(createHttpError(401, "wrong password"));
        }
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postGoogleLogin = (req, res, next) => {
  const { email, name, avatar } = req.body;


  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        const token = jwt.sign(
          { email: user.email, userId: user._id.toString() },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        return res.status(200).json({
          token: token,
          userId: user._id.toString(),
          verified_user : user
        });
      } else {
        const randomPassword = uuidv4();
        return bycrypt.hash(randomPassword, 12).then((hasedPassword) => {
          const user = new User({
            name: name,
            email: email,
            password: hasedPassword,
            avatar: avatar,
          });
          user.save().then(() => {
            const token = jwt.sign(
              { email: user.email, userId: user._id.toString() },
              process.env.JWT_SECRET,
              { expiresIn: "1h" }
            );
            return res.status(200).json({
              token: token,
              userId: user._id.toString(),
              verified_user : user
            });
          });
        });
      }
    })
    .catch((err) => next(err));
};

// create a api for forgot password and reset password
exports.postForgotPassword = (req, res, next) => {
  const { email } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return next(createHttpError(404, "No account exits!"));
    }
    const token = jwt.sign(
      { email: user.email, userId: user._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      token: token,
      userId: user._id.toString(),
    });
  });
}
