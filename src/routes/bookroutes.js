const express = require('express');

const bookrouter = express.Router();

// add your codes here:

const { getAllBooks, getBooksByID, makeBook } = require('../controllers/bookControllers')
bookrouter.get("/books", getAllBooks);
bookrouter.get("/books/:id", getBooksByID);
bookrouter.post("/books", makeBook)


module.exports = bookrouter;