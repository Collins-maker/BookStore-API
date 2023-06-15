const express = require('express');

const memberrouter = express.Router();

// Add your member routes here:

const { getAllMembers, getMemberById } = require('../controllers/memberControllers');

memberrouter.get('/members', getAllMembers);
memberrouter.get('/members/:MemberID', getMemberById);



module.exports =memberrouter;