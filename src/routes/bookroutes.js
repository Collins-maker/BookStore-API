const express = require('express');
const bcrypt=require('bcrypt')

const bookrouter = express.Router();
const{borrowBook,returnBook,signUp}=require('../controllers/loansController')
const{register, login}=require('../controllers/authenticationController')


bookrouter.post('/borrow',borrowBook)
bookrouter.put('/return',returnBook)


const { getAllBooks, getBooksByID, makeBook } = require('../controllers/bookControllers')
bookrouter.get("/books", getAllBooks);
bookrouter.get("/books/:id", getBooksByID);
bookrouter.post("/books", makeBook)

// authentication and authorization
// registration
bookrouter.post('/register',register)
// login
bookrouter.post('/login',login)


module.exports = bookrouter;