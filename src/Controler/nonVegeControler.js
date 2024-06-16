const nonVegeFoods = require("../../data/non-vege.js");

exports.getAllNonveges = (req, res) => {
  res.render("nonveges", {
    title: "non-vegetable list",
    nonvege: nonVegeFoods,
  });
};
//getById--or Details
exports.getNonvegeById = (req, res) => {
  let nvegeId = req.params.id;
  let nonvege = nonVegeFoods.find((v) => v._id == nvegeId);
  if (nonvege !== -1) {
    res.render("nonvegeDetail", { title: "detail nonvege", nonvege: nonvege });
  }
};

//edit nonvege menu
// /display form
exports.showForm = (req, res) => {
  let category = req.params.category;
  res.render("add", { category: category });
};
//---------------------------------------
// //create nonvege ----post method
exports.addMenuItem = (req, res) => {
  let category = req.params.category;
  let vegeId = nonVegeFoods.length + 1;
  const newMenu = {
    _id: vegeId, // A unique ID for the new item
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price),
    category: category,
    image: req.body.image,
  };
  if (category === "nonvege") {
    nonVegeFoods.push(newMenu);
    res.redirect("/nonvege");
  } else {
    res.status(400).send("invalid category");
  }
};
//-----------------------------------
exports.showEditForm = (req, res) => {
  const vegeId = req.params.id;
  const nonvegeItem = nonVegeFoods.find((item) => item._id === vegeId);
  if (nonvegeItem) {
    res.render("nonvegeEdit", { nonvege: nonvegeItem });
  } else {
    res.status(404).send("Vegetable not found");
  }
};
exports.updateVegeFood = (req, res, next) => {
  let vegeId = req.params.id;
  let { name, description, price, image } = req.body;

  let indexOfVege = nonVegeFoods.findIndex((vege) => vege._id == vegeId);
  if (indexOfVege !== -1) {
    nonVegeFoods[indexOfVege] = {
      ...nonVegeFoods[indexOfVege],
      name,
      description,
      price,
      image,
    };
    //let
    let updateVage = {
      ...nonVegeFoods[indexOfVege],
      links: {
        self: `/nonvege/${indexOfVege}`,
        list: `/nonvege`,
        edit: `/nonvege/${vegeId}/edit`,
        delete: `/nonvege/${vegeId}?_method=DELETE`,
      },
    };
    // res.redirect("/vege").json(updateVage);
    res.json(updateVage);
  } else {
    // Handle error if vegetable with vegeId is not found
    res.status(404).send("Vegetable not found");
  }
};
//=======================================
//delete vegeById-----detelet method
exports.deleteNonvege = (req, res) => {
  let comId = req.params.id;
  let index = nonVegeFoods.find((v) => v._id == comId);

  if (index !== -1) {
    //destructuring
    nonVegeFoods.splice(index, 1);
    res.status(200).send("food deleted successfully");
  } else {
    res.statusCode(404).json({ error: "not found" });
  }
};
