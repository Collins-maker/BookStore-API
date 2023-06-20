const express = require('express');

const memberrouter = express.Router();

// Add your member routes here:

<<<<<<< HEAD
const { getAllMembers, getMemberById, memberlogin } = require('../controllers/memberControllers');

memberrouter.get('/members', getAllMembers);
memberrouter.get('/members/:MemberID', getMemberById);
memberrouter.post('/memberlogin', memberlogin)
=======
const { getAllMembers, getMemberById, createMember } = require('../controllers/memberControllers');

memberrouter.get('/members', getAllMembers);
memberrouter.get('/members/:MemberID', getMemberById);
memberrouter.post('/member', createMember);
>>>>>>> 6078b06beab3047918b67ce3261c800e27fdf16b



module.exports = memberrouter;