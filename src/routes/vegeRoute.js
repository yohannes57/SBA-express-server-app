const express = require("express");
const router = express.Router();
const {
  updateVegeFood,
  deleteVegeFood,
} = require("../Controler/vegeControler.js");

const vegeControler = require("../Controler/vegeControler.js");
//-------routes at methods
//router
router.get("/", vegeControler.getAllVeges);
router.get("/:id", vegeControler.foodById);
router.get("/add/:category", vegeControler.showForm);
router.post("/add/:category", vegeControler.addMenuItem);

router.get("/:id/edit", vegeControler.showEditForm); //right
router.patch("/:id/edit", vegeControler.updateVegeFood);
router.delete("/:id", deleteVegeFood);
//---------------------
module.exports = router;
