const express = require("express");
// const vegeFoods = require("../../data/vege.js");
const {
  getAllVeges,
  foodById,
  createVegeFood,
  updateVegeFood,
  deleteVegeFood,
} = require("../Controler/vegeControler.js");
const vegeControler = require("../Controler/vegeControler.js");
//-------routes at methods
const router = express.Router();
//router
router.get("/", vegeControler.getAllVeges);
router.get("/:id", foodById);
router.post("/", createVegeFood);
router.patch("/:id", updateVegeFood);
router.delete("/:id", deleteVegeFood);
//---------------------
module.exports = router;
