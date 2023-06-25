const {createTransport}= require("nodemailer");

const {emailConfig} =require('../config/emailConfiguration');





const transporter = createTransport(emailConfig);

async function sendMail(email,name){
  const message_options ={
    to:email,
    from: process.env.USER_EMAIL ,
    subject: "Register",
    text: `Hi ${name}, welcome to Book Store`
}
  
    try {
        let results =await transporter.sendMail(message_options);
        console.log(results);
    } catch (error) {
      console.log(error); 
    }
}

module.exports = sendMail;