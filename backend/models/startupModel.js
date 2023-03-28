// Author: Fenil Parmar
// Author: Group 3
const mongoose = require("mongoose");

module.exports = startupModel = mongoose.model(
  "startups",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: Array,
    },
    website: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    industries: {
      type: String,
    },
    locations: {
      type: String,
    },
    amountRaised: {
      type: String,
    },
    fundedOver: {
      type: String,
    },
  })
);
