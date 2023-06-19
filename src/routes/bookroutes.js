const express = require('express');

const bookrouter = express.Router();
const{borrowBook,returnBook,signUp}=require('../controllers/loansController')

// enpoint to borrow a book
// bookrouter.get('/borrow',borrowBook)
bookrouter.post('/borrow',borrowBook)
bookrouter.put('/return',returnBook)
// bookrouter.post('/signup',signUp)



module.exports = bookrouter;