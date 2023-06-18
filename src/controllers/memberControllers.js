const mssql = require('mssql');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validateMemberID = require('../validators/memberIDValidation')


// Function to hash the password
async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

// Function to compare password and hashed password
async function comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

// Function To Sign Up/Register a new user
async function signUp(req, res) {
    try {
        let sql = await mssql.connect(config);
        if (sql.connected) {
            const { username, password } = req.body;
            const hashedPassword = await hashPassword(password);
            let request = sql
                .request()
                .input('Username', username)
                .input('Password', hashedPassword);
            let result = await request.execute('InsertUser');
            res.json({
                success: true,
                message: 'User registered successfully',
                data: result.recordset,
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error occurred while registering user',
        });
    }
}

// Function to generate a JWT token
function generateToken(user) {
    const payload = { id: user.id, username: user.username };
    const token = jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' });
    return token;
}

// Middleware to authenticate and authorize requests
function authenticate(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ success: false, message: 'No token provided' });
    }

    jwt.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) {
            return res.status(403).json({ success: false, message: 'Failed to authenticate token' });
        }
        req.user = decoded;
        next();
    });
}

// Function To Login
async function login(req, res) {
    try {
        let sql = await mssql.connect(config);
        if (sql.connected) {
            const { username, password } = req.body;
            let request = sql.request();
            request.input('Username', username);
            let result = await request.execute('getUserByUsername');
            if (result.recordset.length === 0) {
                return res.status(401).json({ success: false, message: 'Invalid username or password' });
            }
            const user = result.recordset[0];
            const passwordMatch = await comparePassword(password, user.Password);
            if (!passwordMatch) {
                return res.status(401).json({ success: false, message: 'Invalid username or password' });
            }
            const token = generateToken(user);
            res.json({ success: true, message: 'Login successful', token });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error occurred while logging in',
        });
    }
}





//Get all members
async function getAllMembers(req, res) {
    let sql = await mssql.connect(config);
    if (sql.connected) {
        let results = await sql.query(`SELECT * from library.Members`);
        let Members = results.recordset;
        res.json({
            success: true,
            message: "fetched Members successfully",
            results: Members
        })
    } else {
        res.status(500).send("Internal server error")
    }


}

//Get Member By ID

async function getMemberById(req, res) {

    let { MemberID } = req.params;

    let sql = await mssql.connect(config);
    if (sql.connected) {
        let results = await sql.query(`SELECT * from library.Members WHERE MemberID=${Number(MemberID)}`)

        let Member = results.recordset[0]

        res.json({
            success: true,
            message: 'fetched Member successfully',
            results: Member
        });
    }

}



module.exports = { getAllMembers, getMemberById, login }