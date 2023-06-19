const express = require('express');

const bookrouter = express.Router();
const{borrowBook}=require('../controllers/bookControllers')

<<<<<<< HEAD
// add your codes here:
const validateMakeBook = require('../validators/validateMakeBook');
const validateBookID = require('../validators/bookIDValidator');
const { getAllBooks, getBooksByID, makeBook, login } = require('../controllers/bookControllers')

=======
// enpoint to borrow a book
bookrouter.get('/borrow',borrowBook)
>>>>>>> 0cae998a73107efbf0e1f8f528075e5bf87e994f

bookrouter.get("/books", getAllBooks);
bookrouter.get("/books/:id", validateBookID, getBooksByID);
bookrouter.post("/books", validateMakeBook, makeBook);


module.exports = bookrouter;