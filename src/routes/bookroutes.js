const express = require('express');
const bcrypt=require('bcrypt')

const bookrouter = express.Router();

const{borrowBook,returnBook}=require('../controllers/loansController');

const{register, login}=require('../controllers/authenticationController');

// validating codes:
const validateMakeBook = require('../validators/validateMakeBook');
const validateBookID = require('../validators/bookIDValidator');
const { getAllBooks, getBooksByID, makeBook, } = require('../controllers/bookControllers')



bookrouter.post('/borrow', borrowBook)
bookrouter.put('/return', returnBook)
   


bookrouter.get("/books", getAllBooks);
bookrouter.get("/books/:BookID",validateBookID, getBooksByID);
bookrouter.post("/books", validateMakeBook, makeBook);


// authentication and authorization
// registration
bookrouter.post('/register',register)
// login
bookrouter.post('/login',login)


module.exports = bookrouter;