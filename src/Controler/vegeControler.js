const express = require("express");
const vegeFoods = require("../../data/vege.js");

//readAllVege ....get method
exports.foodList = (req, res) => {
  res.render("/vege/list", { vege: vegeFoods });
};

// //readById
exports.foodById = (req, res) => {
  const foodId = req.params.id;
  const food = vegeFoods.find((v) => v._id == foodId);
  res.json(food);
};

// //create vege ----post method
exports.createVegeFood = (req, res) => {
  let vegeId = vegeFoods.length + 1;
  let { name, description, price, category, image } = req.body;
  let newVege = { _id: vegeId, name, description, price, category, image };
  vegeFoods.push(newVege);
  res.json(newVege);
};
// //update vegeById------patch method
exports.updateVegeFood = (req, res, next) => {
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
};

// //delete vegeById-----detelet method
exports.deleteVegeFood = (req, res) => {
  let comId = req.params.id;
  let index = vegeFoods.find((v) => v._id == comId);

  if (index !== -1) {
    //destructuring
    const [deleteVege] = vegeFoods.splice(index, 1);

    res.json(deleteVege);
  } else {
    res.statusCode(404).json({ error: "not found" });
  }
};
