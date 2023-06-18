const express = require('express');

const bookrouter = express.Router();
// const{borrowBook}=require('../controllers/bookControllers')

// // enpoint to borrow a book
// bookrouter.get('/borrow',borrowBook)

const { getAllBooks, getBooksByID, makeBook } = require('../controllers/bookControllers')
bookrouter.get("/books", getAllBooks);
bookrouter.get("/books/:id", getBooksByID);
bookrouter.post("/books", makeBook)


module.exports = bookrouter;