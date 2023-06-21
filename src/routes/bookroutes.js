const express = require('express');
const bcrypt=require('bcrypt')

const bookrouter = express.Router();


// validating codes:
const validateMakeBook = require('../validators/validateMakeBook');
const validateBookID = require('../validators/bookIDValidator');
const { getAllBooks, getBooksByID, makeBook, } = require('../controllers/bookControllers')


bookrouter.get("/books", getAllBooks);
bookrouter.get("/books/:BookID",validateBookID, getBooksByID);
bookrouter.post("/books", validateMakeBook, makeBook);


module.exports = bookrouter;