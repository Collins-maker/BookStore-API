const bcrypt = require('bcrypt')
const mssql = require('mssql')
const jwt = require('jsonwebtoken')
const { user } = require('../config/config')
const config = require('../config/config')
const createMarkup = require("../utils/createMarkup");
const sendMail = require('../utils/sendMail')
const { getUser } = require("../utils/getUser");
require('dotenv').config()

const getaUser = require('../utils/getUser')
const { tokenGenerator } = require('../utils/token')


//Function to register a new member
async function register(req, res) {
    try {
        let sql = await mssql.connect(config);

        if (sql.connected) {
            const { userName, Address, contactNumber, Email, Password, confirmPassword } = req.body;
            const hashedPassword = await bcrypt.hash(Password, 8);
            const hashedPassword2 = await bcrypt.hash(confirmPassword, 8);


            let request = sql
                .request()
                .input("userName", mssql.VarChar, userName)
                .input("Address", mssql.VarChar, Address)
                .input("contactNumber", mssql.VarChar, contactNumber)
                .input("Email", mssql.VarChar, Email)
                .input("Password", mssql.VarChar, hashedPassword)
                .input("confirmPassword", mssql.VarChar, hashedPassword2);

            let result = await request.execute("InsertMember");

            if (result.rowsAffected[0] > 0) {
                // Templating
                let html = await createMarkup("./src/views/signup.ejs", {
                    name: userName,
                    text: "At our bookstore, you'll find a wide range of books in various genres, from bestsellers to classics.Feel free to explore our collection, find your next favorite book, and enjoy the reading journey.If you have any questions or need assistance, don't hesitate to reach out to our friendly staff.",
                });

                const message = {
                    to: Email,
                    from: process.env.Email_USER,
                    subject: "Hello from Bookstore API",
                    html: html,
                };

                await sendMail(message);
                console.log(result);

                res.status(201).send({
                    success: true,
                    message: "A new member has been added",
                    data: result.recordset, // Include the recordset data in the response
                });
            } else {
                res.status(500).send({
                    success: false,
                    message: "No rows affected",
                });
            }
        } else {
            res.status(500).send({
                success: false,
                message: "Database connection failed",
            });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "An error occurred",
            error: error.message, // Include the error message in the response
        });
    }
}



// user login 
async function login(req, res) {
    const { Email, Password } = req.body
    try {
        let user = await getaUser(Email)
        const PasswordMatch = await bcrypt.compare(Password, user.Password)

        if (!PasswordMatch) {

            return res.status(401).json({ success: false, message: 'Invalid credentials' })

        } else {
            let token = await tokenGenerator({
                userId: user.id,
                Email: user.Email
            })
            // console.log("our token", token);
            res.json({ success: true, message: "logged in succesfully", token })

        }
    } catch (error) {
        console.error('Error during login :', error)
        res.status(500).json({ message: 'Internal server error' })

    }

}


module.exports = { register, login };