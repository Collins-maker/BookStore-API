const express = require('express');
const bcrypt=require('bcrypt')

const bookrouter = express.Router();
<<<<<<< HEAD
const{borrowBook,returnBook,signUp}=require('../controllers/loansController')
const{register, login}=require('../controllers/authenticationController')


bookrouter.post('/borrow',borrowBook)
bookrouter.put('/return',returnBook)
=======
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
>>>>>>> 2c739981c6255a2b1b0cdb4551587b73d3040fd3


bookrouter.get("/books", getAllBooks);
bookrouter.get("/books/:id", validateBookID, getBooksByID);
bookrouter.post("/books", validateMakeBook, makeBook);


// authentication and authorization
// registration
bookrouter.post('/register',register)
// login
bookrouter.post('/login',login)


module.exports = bookrouter;