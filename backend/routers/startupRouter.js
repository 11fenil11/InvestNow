// Author: Fenil Parmar
// Author: Group 3

const express = require("express");
const router = express.Router();

const startupModel = require("../models/startupModel");

router.get("/fetchAll", async (req, res) => {
  var startup = await startupModel.find();
  return res.status(200).json({
    startup: startup,
  });
});

router.get("/:id", async (req, res) => {
  id = req.params.id;
  const result = await startupModel.find({ _id: id });
  if (!result) {
    return res.status(404).json({
      feedbacks: "Not Found",
    });
  } else {
    return res.status(200).json({
      startup: result[0],
    });
  }
});

module.exports = router;
