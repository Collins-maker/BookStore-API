const { createTransport } = require("nodemailer");
const email_config = require("../config/emailConfig");
require("dotenv").config()

const message_options = {
  to: ["haronkiarii@gmail.com", "haronkiari@gmail.com"],
  from: process.env.MAIL,
  subject: "Email testing || Send From Nodemailer",
  text: "Hello big man bazuu",
  // html: ,
  // attachments:
};
const transporter = createTransport(email_config);

async function sendMail() {
  try {
    let results = await transporter.sendMail(message_options);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
// module.exports = sendMail ;
module.exports=sendMail
