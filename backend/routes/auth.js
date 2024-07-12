const express = require("express");
const router = express.Router();
const { check, body } = require("express-validator");

const authController = require("../controllers/auth");
router.put(
  "/signup",
  [
    check("email").isEmail().withMessage("Please enter a valid email"),
    body("password", "Minimum length should be 8")
      .isLength({ min: 8, max: 16 })
      .isAlphanumeric(),
  ],

  authController.postSignUp
);
router.post(
  "/login",check("email").isEmail().withMessage("Please enter a valid email"),
  authController.postLogin
);

router.post('/google',authController.postGoogleLogin)




module.exports = router;
