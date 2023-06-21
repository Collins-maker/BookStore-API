const express = require('express');

const bookrouter = express.Router();
const { borrowBook, returnBook, signUp } = require('../controllers/loansController')


// add your codes here:
const validateMakeBook = require('../validators/validateMakeBook');
const validateBookID = require('../validators/bookIDValidator');
const { getAllBooks, getBooksByID, makeBook, } = require('../controllers/bookControllers')


// endpoint to borrow a book
bookrouter.get('/borrow', borrowBook)

// // endpoint to borrow a book
// // bookrouter.get('/borrow',borrowBook)
bookrouter.post('/borrow', borrowBook)
bookrouter.put('/return', returnBook)
    // bookrouter.post('/signup',signUp)


bookrouter.get("/books", getAllBooks);
bookrouter.get("/books/:id", validateBookID, getBooksByID);
bookrouter.post("/books", validateMakeBook, makeBook);



module.exports = bookrouter;