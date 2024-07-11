const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      select :false,
    },
    phone : {
      type: String,
      required: true,
    },
    country : {
      type: String,
      required: true,
    },
    role:{
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select :false,
    },
   
    avatar: {
      type: String,
      default:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    },
 
    properties: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
