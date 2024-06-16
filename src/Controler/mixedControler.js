const mixedFoods = require("../../data/mixed.js");

exports.getAllMixeds = (req, res) => {
  res.render("mixedList", {
    title: "Mixed Menu",
    mixed: mixedFoods,
  });
};
//

// //update vegeById------patch method
exports.showEditForm = (req, res) => {
  const vegeId = req.params.id;
  const vegeItem = mixedFoods.find((item) => item._id === vegeId);
  if (vegeItem) {
    res.render("mixedEdit", { mixed: vegeItem });
  } else {
    res.status(404).send("Vegetable not found");
  }
};
exports.updateMixedVege = (req, res, next) => {
  let vegeId = req.params.id;
  let { name, description, price, image } = req.body;

  let indexOfVege = mixedFoods.findIndex((vege) => vege._id == vegeId);
  if (indexOfVege !== -1) {
    mixedFoods[indexOfVege] = {
      ...mixedFoods[indexOfVege],
      name,
      description,
      price,
      image,
    };
    //let
    let updateVage = {
      ...mixedFoods[indexOfVege],
      links: {
        self: `/mixed/${indexOfVege}`,
        list: `/mixed`,
        edit: `/mixed/${vegeId}/edit`,
        delete: `/mixed/${vegeId}?_method=DELETE`,
      },
    };
    res.json(updateVage);
  } else {
    // Handle error if vegetable with mixedvegeId is not found
    res.status(404).send("Vegetable not found");
  }
};

// //delete vegeById-----detelet method
exports.deleteMixedFood = (req, res) => {
  let comId = req.params.id;
  let index = mixedFoods.find((v) => v._id == comId);

  if (index !== -1) {
    mixedFoods.splice(index, 1);
    res.status(200).send("food deleted successfully");
  } else {
    res.statusCode(404).json({ error: "not found" });
  }
};
