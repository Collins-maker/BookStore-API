const express = require('express');

const memberrouter = express.Router();

// Add your member routes here:

const { getAllMembers, getMemberById, createMember, membersWithBooks } = require('../controllers/memberControllers');

memberrouter.get('/members', getAllMembers);
memberrouter.get('/members/:MemberID', getMemberById);
memberrouter.get('/loans', membersWithBooks);
memberrouter.post('/member', createMember);



module.exports = memberrouter;