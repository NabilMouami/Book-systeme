const express = require('express');
const jwt = require('jsonwebtoken');
const authMiddlware = require('../middlewares/authMiddleware');
const Book = require('../models/Book');
const User = require('../models/User');
const authTokenGenerator = require('../utils/authTokenGenerator');
const bookRouter = express.Router();

//Create Book
bookRouter.post('/',(async (req, res) => {
    try {
      const book = await Book.create(req.body);
      res.status(200);
      res.json(book);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  })
);

bookRouter.get('/',(async (req, res) => {
    const books = await Book.find().populate('createdBy').sort('createdAt');
    //Compare password
    if (books) {
      res.status(201);
      res.send(books);
    } else {
      res.status(401);
      throw new Error('Server error');
    }
  })
);

//Delete book

bookRouter.delete('/:id',(async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(book);
    } catch (error) {
      res.status(500);
      throw new Error('Server Error');
    }
  })
);

//Update

bookRouter.put('/:id',(async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body);
      res.status(200);
      res.json(book);
    } catch (error) {
      res.status(500);
      throw new Error('Update failed');
    }
  })
);

//find a book
bookRouter.get('/:id',(async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.status(200);
      res.send(book);
    } catch (error) {
      res.status(500);
      throw new Error('No book found');
    }
  })
);

module.exports = { bookRouter };
