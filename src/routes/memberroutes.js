// const express = require('express');

// const memberrouter = express.Router();

// // Add your member routes here:

<<<<<<< HEAD
const { getAllMembers, getMemberById, createMember, membersWithBooks } = require('../controllers/memberControllers');

memberrouter.get('/members', getAllMembers);
memberrouter.get('/members/:MemberID', getMemberById);
memberrouter.get('/loans',membersWithBooks);
memberrouter.post('/member', createMember); 
=======
// const { getAllMembers, getMemberById, memberlogin } = require('../controllers/memberControllers');

// memberrouter.get('/members', getAllMembers);
// memberrouter.get('/members/:MemberID', getMemberById);
// memberrouter.post('/memberlogin', memberlogin)
>>>>>>> 2c739981c6255a2b1b0cdb4551587b73d3040fd3



// module.exports = memberrouter;