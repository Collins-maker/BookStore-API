const express = require('express');

const memberrouter = express.Router();

// Add your member routes here:

const { getAllMembers, getMemberById, createMember } = require('../controllers/memberControllers');

memberrouter.get('/members', getAllMembers);
memberrouter.get('/members/:MemberID', getMemberById);
memberrouter.post('/member', createMember);



module.exports =memberrouter;