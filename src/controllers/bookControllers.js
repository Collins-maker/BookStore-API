const mssql = require("mssql");
const config = require("../config/config");
const { tokenVerifier } = require("../utils/token");

// Function To List All Available books,getbooks

async function getAllBooks(req, res) {
    let token = req.headers["authorization"].split(" ")[1];

    try {
        // let user = req.user;
        // console.log(user);
        let user = await tokenVerifier(token);
        if (user) {
            let sql = await mssql.connect(config);

            if (sql.connected) {
                let request = sql.request();

                let result = await request.execute("getBooks");

                res.json({
                    success: true,

                    message: "Books have been received",

                    data: result.recordset,
                });
            }
        }
    } catch (error) {
        if (error.message.includes("token") || error.message.includes("invalid")) {
            res.status(403).json({
                success: false,

                message: "Login again",
            });
        } else if (error.message.includes("expired")) {
            res.status(403).json({
                success: false,

                message: "Token has expired",
            });
        }
    }
}

//Function To Get Books By ID,getBooksByID,getBookById
async function getBooksByID(req, res) {
    try {
        let user = req.user;
        // console.log(user);

        if (user) {
            let sql = await mssql.connect(config);

            if (sql.connected) {
                const id = req.params.BookID;

                console.log('BookID:', id);

                // Check if the BookID parameter is provided
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        message: 'BookID is required',
                    });
                }

                let request = sql.request();

                request.input('BookID', id);

                let result = await request.execute('getBookByID');

                console.log('Result:', result.recordset);

                if (result.recordset.length > 0) {
                    res.status(200).json({
                        success: true,
                        message: 'The book has been retrieved',
                        data: result.recordset,
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'The book you are searching for is not present',
                    });
                }
            }
        }
    } catch (error) {
        console.log('Error:', error);

        if (error.message.includes('token') || error.message.includes('invalid')) {
            res.status(403).json({
                success: false,
                message: 'The provided token is wrong',
            });
        } else if (error.message.includes('expired')) {
            res.status(403).json({
                success: false,
                message: 'Your token has expired',
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'An error occurred',
            });
        }
    }
}


//Function to create a new book,makeBook,InBook
async function makeBook(req, res) {
    try {
        // let { value } = req;
        // console.log(value);
        let user = req.user;

        if (user) {
            let sql = await mssql.connect(config);

            if (sql.connected) {
                const { Title, Author, PublicationYear, Status } = req.body;

                let request = sql

                    .request()

                .input("Title", Title)

                .input("Author", Author)

                .input("PublicationYear", PublicationYear)

                .input("Status", Status);

                let result = await request.execute("InsertBook");

                res.json({
                    success: true,

                    message: "Book created successfully",

                    data: result.recordset,
                });
            }
        }
    } catch (error) {
        console.log(error);
        if (error.message.includes("token") || error.message.includes("invalid")) {
            res.status(403).json({
                success: false,

                message: "Login again",
            });
        } else if (error.message.includes("expired")) {
            res.status(403).json({
                success: false,

                message: "Token expired login again",
            });
        }
    }
}

module.exports = { getAllBooks, getBooksByID, makeBook };