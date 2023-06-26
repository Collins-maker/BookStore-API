const express = require('express');
const authenticationRouter =express.Router();

const {login, register} =require('../controllers/authenticationController')


authenticationRouter.post('/register',register);
authenticationRouter.post('/login',login);

module.exports=authenticationRouter