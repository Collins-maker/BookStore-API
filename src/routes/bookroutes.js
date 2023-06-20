const express = require('express');

const bookrouter = express.Router();
const{borrowBook,returnBook,signUp}=require('../controllers/loansController')

<<<<<<< HEAD
<<<<<<< HEAD
// add your codes here:
const validateMakeBook = require('../validators/validateMakeBook');
const validateBookID = require('../validators/bookIDValidator');
const { getAllBooks, getBooksByID, makeBook, login } = require('../controllers/bookControllers')

=======
// enpoint to borrow a book
bookrouter.get('/borrow',borrowBook)
>>>>>>> 0cae998a73107efbf0e1f8f528075e5bf87e994f
=======
// // enpoint to borrow a book
// // bookrouter.get('/borrow',borrowBook)
bookrouter.post('/borrow',borrowBook)
bookrouter.put('/return',returnBook)
// bookrouter.post('/signup',signUp)
>>>>>>> 6078b06beab3047918b67ce3261c800e27fdf16b

bookrouter.get("/books", getAllBooks);
bookrouter.get("/books/:id", validateBookID, getBooksByID);
bookrouter.post("/books", validateMakeBook, makeBook);


module.exports = bookrouter;