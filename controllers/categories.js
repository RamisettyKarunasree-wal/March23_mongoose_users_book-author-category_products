const Category = require('../models/category');
const getCategories = (req, res) => {
  Category.find((error, categories_list) => {
    if (error) {
      res.json(error);
    } else {
      res.json(categories_list);
    }
  });
};
const postCategories = (req, res) => {
  const categoryObj = new Category(req.body);
  categoryObj.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: 'added category successfully' });
    }
  });
};
const deleteCategories = (req, res) => {
  Category.findByIdAndDelete(req.params.id, req.body, function (err) {
    console.log(req.body);
    if (err) {
      res.json(err);
    } else {
      res.json({ status: `removed category with id ${req.params.id}` });
    }
  });
};
function updateCategories(req, res) {
  const newValues = req.body;
  Category.findByIdAndUpdate(req.params.id, newValues, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`category with _id ${req.params.id} is updated`);
    }
  });
}
module.exports = {
  getCategories,
  postCategories,
  deleteCategories,
  updateCategories,
};
