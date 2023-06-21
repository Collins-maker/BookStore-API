const express = require('express');
const bcrypt=require('bcrypt')

const bookrouter = express.Router();
// <<<<<<< HEAD
const{borrowBook,returnBook}=require('../controllers/loansController')

const{register, login}=require('../controllers/authenticationController')


bookrouter.post('/borrow',borrowBook)
bookrouter.put('/return',returnBook)



// add your codes here:
const validateMakeBook = require('../validators/validateMakeBook');
const validateBookID = require('../validators/bookIDValidator');
const { getAllBooks, getBooksByID, makeBook, } = require('../controllers/bookControllers')


// endpoint to borrow a book
bookrouter.get('/borrow', borrowBook)


bookrouter.post('/borrow', borrowBook)
bookrouter.put('/return', returnBook)



bookrouter.get("/books", getAllBooks);
bookrouter.get("/books/:id", validateBookID, getBooksByID);
bookrouter.post("/books", validateMakeBook, makeBook);


// authentication and authorization
// registration
bookrouter.post('/register',register)
// login
bookrouter.post('/login',login)


module.exports = bookrouter;