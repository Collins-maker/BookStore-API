const mssql = require('mssql');
const config = require('../config/config')

// Function To List All Available books

async function getAllBooks(req, res) {
    let sql = await mssql.connect(config);
    if (sql.connected) {
        let request = sql.request();
        let result = await request.execute("getBooks");
        console.log(result);
        res.json({
            success: true,
            message: "Books Have Been Retreived",
            data: result.recordset,
        });
    }
}

//Function To Get Books By ID
async function getBooksByID(req, res) {
    let sql = await mssql.connect(config);
    if (sql.connected) {
        const { id } = req.params;
        let request = sql.request();
        request.input("BookID", id);
        let result = await request.execute("getBookById");
        console.log(id);
        if (result.recordset.length > 0) {
            res.status(200).json({
                success: true,
                message: "Retrieved book successfully",
                data: result.recordset,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Book does not exist",
            });
        }
    }
}

//Function to create a new book
async function makeBook(req, res) {
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
            message: "Book made successfully",
            data: result.recordset,
        });
    }
}



module.exports = { getAllBooks, getBooksByID, makeBook }