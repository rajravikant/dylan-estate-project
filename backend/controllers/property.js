const { mongo, default: mongoose } = require("mongoose");
const Property = require("../models/Property");
const User = require("../models/User");
const { validationResult } = require("express-validator");
const createHttpError = require("http-errors");



exports.getProperties = async (req, res, next) => {
  const { page } = req.query;
  const limit = 6;

  if (page) {
    Property.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("creator")
      .then((props) => {
        if (!props) {
          return next(createHttpError(404, "No posts found"));
        }
        Property.countDocuments().then((cnt) => {
          res.status(200).json({
            properties: props,
            totalDocs: Math.ceil(cnt / limit),
          });
        });
      })
      .catch((error) => {
        next(createHttpError(error.status, error.message));
      });
  } else {
    Property.find()
      .populate("creator")
      .then((properties) => {
        if (!properties) {
          return next(createHttpError(404, "No posts found"));
        }
        res.status(200).json({ properties, });
      })
      .catch((error) => {
        next(createHttpError(error.status, error.message));
      });
  }
};

exports.postProperty = (req, res, next) => {

  const {userId,body} = req;
  creator = userId;
  const {
    propertyDetails,
    locationDetails,
    features,
    priceDetails,
    propertyImages,
  } = body;

  const property = new Property({
    details: propertyDetails,
    location: locationDetails,
    features: features,
    price: priceDetails,
    images: propertyImages.images,
    creator: creator,
  });
  

  property
    .save()
    .then((r) => {
      return User.findById(userId);
    })
    .then((user) => {
      if (user) {
        creator = user;
        user.properties.push(property);
        return user.save();
      }
    })
    .then((response) => {
      res.status(201).json({
        message: "Post Created Succesfully",
      });
    })
    .catch((err) => {
      next(createHttpError(404, err.message));
    });
};

exports.getProperty = (req, res, next) => {
  const {propertyID} = req.params;
  Property.findById(propertyID)
    .populate(["creator"])
    .then((property) => {
      if (!property) {
        return next(createHttpError(404, "No property found"));
      }
      res.status(200).json({
        property, 
      });
    })
    .catch((err) => {
      next(err);
    });
};


exports.deleteProperty = (req, res, next) => {
  const {userId} = req;
  const {postId} = req.params;

  Property.findById(postId)
    .then((result) => {
      if (result) {
        return Property.findByIdAndDelete(postId);
      }
    })
    .then((fin) => {
      return User.findById(userId);
    })
    .then((user) => {
      user.posts.pull(postId);
      return user.save();
    })
    .then((data) => {
      res.status(200).json({ message: "Deleted Succesfully !"});
    })
    .catch((err) => {
      next(err);
    });

};
