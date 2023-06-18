const express = require('express');

const bookrouter = express.Router();
const{borrowBook}=require('../controllers/bookControllers')

// enpoint to borrow a book
bookrouter.get('/borrow',borrowBook)



module.exports = bookrouter;