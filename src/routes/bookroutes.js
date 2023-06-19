const express = require('express');

const bookrouter = express.Router();
const{borrowBook,returnBook,signUp}=require('../controllers/loansController')

// // enpoint to borrow a book
// // bookrouter.get('/borrow',borrowBook)
bookrouter.post('/borrow',borrowBook)
bookrouter.put('/return',returnBook)
// bookrouter.post('/signup',signUp)

const { getAllBooks, getBooksByID, makeBook } = require('../controllers/bookControllers')
bookrouter.get("/books", getAllBooks);
bookrouter.get("/books/:id", getBooksByID);
bookrouter.post("/books", makeBook)


module.exports = bookrouter;