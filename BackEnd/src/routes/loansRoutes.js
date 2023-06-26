const express = require('express');
const loansRouter =express.Router();

const{borrowBook,returnBook}=require('../controllers/loansController');

loansRouter.post('/borrow', borrowBook);
loansRouter.put('/return', returnBook);






module.exports=loansRouter