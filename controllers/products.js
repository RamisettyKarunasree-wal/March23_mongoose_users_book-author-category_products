const Product = require('../models/product');
const getProducts = (req, res) => {
  Product.find((err, products_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(products_list);
    }
  });
};
const postProducts = (req, res) => {
  productObj = new Product(req.body);
  productObj.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json('added product successfully');
    }
  });
};
const editProducts = (req, res) => {
  const updatedProduct = req.body;
  Product.findByIdAndUpdate(req.params.id, updatedProduct, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`updated product with id ${req.params.id}`);
    }
  });
};
const getProductWithId = (req, res) => {
  Product.findById(req.params.id).exec((err, product) => {
    if (err) {
      res.json(err);
    } else {
      res.json(product);
    }
  });
};
const deleteProductWithId = (req, res) => {
  Product.findByIdAndDelete(req.params.id).exec((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json(`deleted product with id ${req.params.id}`);
    }
  });
};
const getProductWithName = (req, res) => {
  Product.find({ name: req.params.name }).exec((err, product) => {
    if (err) {
      res.json(err);
    } else {
      res.json(product);
    }
  });
};
const getProductWithAvailability = (req, res) => {
  Product.find({ availability: req.params.availability }).exec(
    (err, product) => {
      if (err) {
        res.json(err);
      } else {
        res.json(product);
      }
    }
  );
};
const getProductWithPrice = (req, res) => {
  Product.find({ price: { $gte: req.params.price } }).exec((err, product) => {
    if (err) {
      res.json(err);
    } else {
      res.json(product);
    }
  });
};
module.exports = {
  getProducts,
  postProducts,
  editProducts,
  getProductWithId,
  deleteProductWithId,
  getProductWithName,
  getProductWithAvailability,
  getProductWithPrice,
};
