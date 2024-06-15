const express = require("express");
const vegeFoods = require("../../data/vege.js");
const nonVegeFoods = require("../../data/non-vege.js");
const mixedFoods = require("../../data/mixed.js");
//readAllVege ....get method
exports.getAllVeges = (req, res) => {
  // res.render("vege/list", { vege: vegeFoods });
  res.render("list", {
    title: "vegetable list",
    vege: vegeFoods,
  });
};
// //readById
exports.foodById = (req, res) => {
  const foodId = req.params.id;
  const food = vegeFoods.find((v) => v._id == foodId);
  res.render("detail", {
    title: "vegetable detail",
    vege: food,
  });
};
//display form
exports.showForm = (req, res) => {
  let category = req.params.category;
  res.render("add", { category: category });
};
//
// //create vege ----post method
exports.addMenuItem = (req, res) => {
  let category = req.params.category;
  let vegeId = vegeFoods.length + 1;
  const newMenu = {
    _id: vegeId, // A unique ID for the new item
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price),
    category: category,
    image: req.body.image,
  };
  if (category === "vege") {
    vegeFoods.push(newMenu);
    res.redirect("/vege");
  } else if (category === "nonvege") {
    nonVegeFoods.push(newMenu);
    res.redirect("/nonvege");
  } else if (category === "mixed") {
    mixedFoods.push(newMenu);
    res.redirect("/mixed");
  } else {
    res.status(400).send("invalid category");
  }
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
