const express = require("express");
const vegeFoods = require("../../data/vege.js");
const router = express.Router();

//readAllVege ....get method
router.get("/", (req, res) => {
  res.json(vegeFoods);
});

//readById
router.get("/:id", (req, res) => {
  const foodId = req.params.id;
  const food = vegeFoods.find((v) => v._id == foodId);
  res.json(food);
});

//create vege ----post method
router.post("/", (req, res) => {
  let vegeId = vegeFoods.length + 1;
  let { name, description, price, category, image } = req.body;
  let newVege = { _id: vegeId, name, description, price, category, image };
  vegeFoods.push(newVege);
  res.json(newVege);
});
//update vegeById------patch method
router.patch("/:id", (req, res, next) => {
  let vegeId = req.params.id;

  let { name, description, price, category, image } = req.body;

  let indexOfVege = vegeFoods.findIndex((vege) => vege._id == vegeId);

  let food = {
    ...vegeFoods[indexOfVege],
    vegeId,
    name,
    description,
    price,
    category,
    image,
  };
  vegeFoods[indexOfVege] = food;
  res.json(food);

  //   let food = vegeFoods.find((v) => {
  //     (v.name = name),
  //       (v.description = description),
  //       (v.price = price),
  //       (v.category = category),
  //       (image = image);
  //   });
});

//delete vegeById-----detelet method
router.delete("/:id", (req, res) => {
  let comId = req.params.id;
  let index = vegeFoods.find((v) => v._id == comId);

  if (index !== -1) {
    //destructuring
    const [deleteVege] = vegeFoods.splice(index, 1);

    res.json(deleteVege);
  } else {
    res.statusCode(404).json({ error: "not found" });
  }
});

//---------------------
module.exports = router;
