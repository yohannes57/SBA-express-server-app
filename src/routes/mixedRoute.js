const express = require("express");
const {
  getAllMixeds,
  deleteMixedFood,
  showEditForm,
  updateMixedVege,
} = require("../Controler/mixedControler.js");

const router = express.Router();

router.get("/", getAllMixeds);
router.delete("/:id", deleteMixedFood);
router.get("/:id/edit", showEditForm); //right
router.patch("/:id/edit", updateMixedVege);
module.exports = router;
