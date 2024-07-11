const express = require("express");
const router = express.Router();
const isAuth = require("../middlerware/is-Auth");
const controller = require("../controllers/property");


router.get("/allproperties", controller.getProperties);
router.get("/property/:propertyID", controller.getProperty);
router.post("/addproperty",isAuth,controller.postProperty);
router.delete("/property/:propertyID", controller.deleteProperty);

module.exports = router;
