const express = require("express");
const vegeFoods = require("../../data/vege.js");
const {
  foodList,
  foodById,
  createVegeFood,
  updateVegeFood,
  deleteVegeFood,
} = require("../Controler/vegeControler.js");

//-------routes at methods
const router = express.Router();
router.get("/list", foodList);
router.get("/:id", foodById);
router.post("/", createVegeFood);
router.patch("/:id", updateVegeFood);
router.delete("/:id", deleteVegeFood);
//---------------------
module.exports = router;
