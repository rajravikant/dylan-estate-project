const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Propertyschema = new Schema(
  {
    details : {
      propertyFor: {type: String,required: true,},
      propertyType: {type: String,required: true,},
      propertySubType: {type: String,required: true,},
      buildUpArea: {type: String,required: true,},
      carpetArea: {type: String,required: true,},
      propertyOnFloor: {type: String,required: true,},
      totalFloors: {type: String,required: true,},
      propertyFacing: {type: String,required: true,},
      propertyAge: {type: String,required: true,},
      bhkType: {type: String,required: true,},
      bathroomToilets: {type: String,required: true,},
      balcony: {type: String,required: true,},
      tenantPreference: {type: String,required: true,},
      availability: {type: String,required: true,},
      propertyDescription: {type: String,required: true,},
    },

    location : {
      buildingName: {type: String,required: true,},
      locality: {type: String,required: true,},
      landmark: {type: String,required: true,},
      city: {type: String,required: true,},
      map: {type: String},
    },


    features : {
      nonVeg: {type: String,required: true,},
      petsAllowed: {type: String,required: true,},
      electricity: {type: String,required: true,},
      waterSupply: {type: String,required: true,},
      furnishing: {type: String,required: true,},
      tiles: {type: String,required: true,},
      security: {type: String,required: true,},
      societyAmenities: {type: Array,required: true,},
      additionalFeatures: {type: Array,required: true,},
    },

    price : {
      rent: {type: Number,required: true,},
      security: {type: Number,required: true,},
      maintainance: {
        type: {type: String,required: true,deafault: "Included in Rent"},
        charge: {type: Number},
        period: {type: String},
      },
      remarks: {type: String},
    },

    images : [String],
    creator: {type: Schema.Types.ObjectId,ref: "User",required: true,},
    },
  { timestamps: true }
);

module.exports = mongoose.model("Property", Propertyschema);
