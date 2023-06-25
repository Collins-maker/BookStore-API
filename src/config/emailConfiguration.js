const nodemailer = require('nodemailer');
require("dotenv").config();

const emailConfig = nodemailer.createTransport(

    {

        host: 'smtp.gmail.com',

        port: 587,

        secure: false,

        requireTLS: true,

        auth: {

            user: process.env.USER_EMAIL,

            pass: process.env.PWD

        }

    });

module.exports = {emailConfig};