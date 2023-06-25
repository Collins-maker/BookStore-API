const { createTransport } = require("nodemailer");
require("dotenv").config();

const emailConfig = require("../config/emailConfiguration");

const transporter = createTransport(emailConfig);

async function sendMail(message) {
    try {
        let result = await transporter.sendMail(message);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = sendMail;