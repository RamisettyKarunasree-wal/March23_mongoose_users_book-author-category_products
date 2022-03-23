const Book = require('../models/book');
const getBooks = (req, res) => {
  Book.find((err, books_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(books_list);
    }
  });
};
const postBooks = (req, res) => {
  bookObj = new Book(req.body);
  bookObj.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json('added book successfully');
    }
  });
};
const editBooks = (req, res) => {
  const updatedBook = req.body;
  Book.findByIdAndUpdate(req.params.id, updatedBook, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`updated book with id ${req.params.id}`);
    }
  });
};
const getBookWithAuthor = (req, res) => {
  Book.find()
    .populate('author')
    .exec((err, books_list) => {
      if (err) {
        res.json(err);
      } else {
        res.json({ status: 1, data: books_list });
      }
    });
};
const getBookWithCondition = (req, res) => {
  Book.find({ name: req.params.name }).exec((err, books_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: 1, data: books_list });
    }
  });
};
const getBookWithAuthorAndCategory = (req, res) => {
  Book.find()
    .populate('author')
    .populate('category')
    .exec((err, books_list) => {
      if (err) {
        res.json(err);
      } else {
        res.json(books_list);
      }
    });
};
const getBookWithId = (req, res) => {
  Book.findById(req.params.id).exec((err, book) => {
    if (err) {
      res.json(err);
    } else {
      res.json(book);
    }
  });
};
module.exports = {
  getBooks,
  getBookWithAuthor,
  getBookWithCondition,
  postBooks,
  getBookWithAuthorAndCategory,
  editBooks,
  getBookWithId,
};
