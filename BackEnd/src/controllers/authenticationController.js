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
            const { Name, Address, ContactNumber, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 8);

            let request = sql
                .request()
                .input("Name", mssql.VarChar, Name)
                .input("Address", mssql.VarChar, Address)
                .input("ContactNumber", mssql.VarChar, ContactNumber)
                .input("email", mssql.VarChar, email)
                .input("password", mssql.VarChar, hashedPassword);

            let result = await request.execute("InsertMember");

            if (result.rowsAffected[0] > 0) {
                // Templating
                let html = await createMarkup("./src/views/signup.ejs", {
                    name: Name,
                    text: "At our bookstore, you'll find a wide range of books in various genres, from bestsellers to classics.Feel free to explore our collection, find your next favorite book, and enjoy the reading journey.If you have any questions or need assistance, don't hesitate to reach out to our friendly staff.",
                });

                const message = {
                    to: email,
                    from: process.env.EMAIL_USER,
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
    const { email, password } = req.body
    try {
        let user = await getaUser(email)
        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {

            return res.status(401).json({ success: false, message: 'Invalid credentials' })

        } else {
            let token = await tokenGenerator({
                userId: user.id,
                email: user.email
            })
            console.log("our token", token);
            res.json({ success: true, message: "logged in succesfully", token })

        }
    } catch (error) {
        console.error('Error during login :', error)
        res.status(500).json({ message: 'Internal server error' })

    }

}


module.exports = { register, login };