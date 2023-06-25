const bcrypt = require('bcrypt')
const mssql = require('mssql')
const jwt = require('jsonwebtoken')
const { user } = require('../config/config')
const config = require('../config/config')
require('dotenv').config()

const getaUser = require('../utils/getUser')
const { tokenGenerator } = require('../utils/token')


//Function to register a new member
async function register(req, res) {
    let sql = await mssql.connect(config);
    if (sql.connected) {
        const { Name, Address, ContactNumber, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 8)
        let request = sql
            .request()
            .input("Name", Name)
            .input("Address", Address)
            .input("ContactNumber", ContactNumber)
            .input("email", email)
            .input("password", hashedPassword);
        let result = await request.execute('InsertMember');
        try {
            await sendMail(email, Name);
        } catch (error) {
            console.log(error)
        }
        res.json({
            success: true,
            message: "Member added successfully",
            data: result.recordset,
        });
    }
}

// user login 
async function login(req, res) {
    const { email, password } = req.body;

    try {
        let user = await getaUser(email);
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res
                .status(401)
                .json({ success: false, message: 'Invalid credentials' });
        } else {
            let token = await tokenGenerator({
                userId: user.id,
                email: user.email
            });
            console.log("our token", token);
            res.json({ success: true, message: "logged in successfully", token });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { register, login }