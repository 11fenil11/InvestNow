// Author: Fenil Parmar
// Author: Group 3
const mongoose = require("mongoose");

module.exports = investorModel = mongoose.model(
  "investors",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: Array,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    field: {
      type: String,
    },
    contactNo: {
      type: String,
      default: "",
    },
    totalInvestment: {
      type: String,
      default: "0",
    },
  })
);
