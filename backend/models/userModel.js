// Author: Neelansh Gulati
const mongoose = require("mongoose");
const dbConnection = require("../models/dbConnection");

let connection = dbConnection;

const userSchema = mongoose.Schema({  
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
  },
  address: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "male",
  },
});

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;
