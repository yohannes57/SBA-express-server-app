const express = require("express");
const nonVegeControler = require("../Controler/nonVegeControler.js");
const router = express.Router();

router.get("/", nonVegeControler.getAllNonveges);
router.get("/:id", nonVegeControler.getNonvegeById);
//
router.get("/add/:category", nonVegeControler.showForm);
router.post("/add/:category", nonVegeControler.addMenuItem);
//
router.get("/:id/edit", nonVegeControler.addMenuItem); //right
router.patch("/:id/edit", nonVegeControler.updateVegeFood);
router.delete("/:id", nonVegeControler.deleteNonvege);

module.exports = router;
