const express = require('express');

const memberrouter = express.Router();

// Add your member routes here:

const { getAllMembers, getMemberById, login } = require('../controllers/memberControllers');

memberrouter.get('/members', getAllMembers);
memberrouter.get('/members/:MemberID', getMemberById);
memberrouter.post('/login', login)



module.exports = memberrouter;