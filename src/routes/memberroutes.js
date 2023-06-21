// const express = require('express');

// const memberrouter = express.Router();

// // Add your member routes here:

<<<<<<< HEAD
// const { getAllMembers, getMemberById, memberlogin } = require('../controllers/memberControllers');

// memberrouter.get('/members', getAllMembers);
// memberrouter.get('/members/:MemberID', getMemberById);
// memberrouter.post('/memberlogin', memberlogin)
=======
const { getAllMembers, getMemberById, createMember, membersWithBooks } = require('../controllers/memberControllers');

memberrouter.get('/members', getAllMembers);
memberrouter.get('/members/:MemberID', getMemberById);
memberrouter.get('/loans',membersWithBooks);
memberrouter.post('/member', createMember); 
>>>>>>> a7c8e49d0dbd0002025fec3d5f2c3b26817f2938



// module.exports = memberrouter;