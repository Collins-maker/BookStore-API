const express = require('express');

const bookrouter = express.Router();

// add your codes here:
const validateMakeBook = require('../validators/validateMakeBook');
const validateBookID = require('../validators/bookIDValidator');
const { getAllBooks, getBooksByID, makeBook, login } = require('../controllers/bookControllers')


bookrouter.get("/books", getAllBooks);
bookrouter.get("/books/:id", validateBookID, getBooksByID);
bookrouter.post("/books", validateMakeBook, makeBook);


module.exports = bookrouter;