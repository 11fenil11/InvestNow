// Author: Fenil Parmar
// Author: Group 3

const express = require("express");
const router = express.Router();

const investorModel = require("../models/investorModel");

router.get("/fetchAll", async (req, res) => {
  var investor = await investorModel.find();
  return res.status(200).json({
    investor: investor,
  });
});

router.get("/:id", async (req, res) => {
  id = req.params.id;
  const result = await investorModel.find({ email: id });
  if (!result) {
    return res.status(404).json({
      feedbacks: "Not Found",
    });
  } else {
    return res.status(200).json({
      investor: result[0],
    });
  }
});

module.exports = router;
