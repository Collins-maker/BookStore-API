const cron = require('node-cron');
const mssql = require("mssql");
const config = require("../config/config");
const emailConfig = require('../config/emailConfiguration');
const bcrypt = require("bcrypt");
const sendMail = require("../utils/sendMail");
const ejs = require("ejs");
const createMarkup = require("../utils/createMarkup");
const { request } = require("express");

const { tokenVerifier } = require("../utils/token");

async function borrowBook(req, res) {
    let token = req.headers["authorization"].split(" ")[1];
    console.log(token);
    try {
        let user = await tokenVerifier(token);

        if (user) {
            const { book_id } = req.body;
            const { member_id } = req.body;

            const sql = await mssql.connect(config);

            const loanDate = new Date();
            const returnDate = new Date(loanDate.getTime());
            returnDate.setDate(loanDate.getDate() + 7);

            const request = sql.request();

            request.input('book_id', mssql.Int, book_id);
            request.input('member_id', mssql.Int, member_id);
            request.input('loan_date', mssql.Date, loanDate);
            request.input('return_date', mssql.Date, returnDate);

            const result = await request.query('INSERT INTO library.Loans(BookID,MemberID,LoanDate,ReturnDate) VALUES (@book_id,@member_id,@loan_date,@return_date)');

            if (result.rowsAffected[0] > 0) {
                res.status(200).json({ message: "Book borrowed successfully" });

                const BookName = 'results.rowsAffected[0].Title';
                // Templating
                let html = await createMarkup("./src/views/borrow.ejs", {
                    name: user.Name,
                    text: `Thank you for borrowing ${BookName}, a book from BookstoreAPI. We have successfully processed your request. The book is now available for you to enjoy.\n\nPlease remember to return the book by the due date to avoid any late fees. If you have any questions or need assistance, feel free to contact our support team.\n\nHappy reading!\n\nThank you,\nThe BookstoreAPI Team`,
                });

                const message = {
                    to: user.Email,
                    from: process.env.EMAIL_USER,
                    subject: "Book Borrowing from Bookstore API",
                    html: html,
                };
                await sendMail(message);
            } else {
                res.status(400).json({ message: "Failed to borrow the book" });
            }
        }
    } catch (error) {
        console.log('Error borrowing book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


async function returnBook(req, res) {
    try {
        const { book_id } = req.body;
        const sql = await mssql.connect(config);
        const request = sql.request();
        request.input('book_id', mssql.Int, book_id);

        const result = await request.query("DELETE FROM library.Loans WHERE BookID=@book_id");

        if (result.rowsAffected[0] > 0) {
            res.status(200).json({ message: "Book returned successfully" });

            const BookName = 'result.rowsAffected[0].Title';

            // Templating
            let html = await createMarkup("./src/views/return.ejs", {
                name: user.Name,
                text: `Thank you for returning ${BookName}, a book from BookstoreAPI. We have successfully processed your return. We hope you enjoyed reading the book and found it insightful.\n\nIf you have any further questions or need assistance, please feel free to reach out to our support team.\n\nThank you,\nThe BookstoreAPI Team`,
            });

            const message = {
                from: process.env.EMAIL_USER,
                to: user.Email,
                subject: 'Book Returned',
                html: html,
            };

            await sendMail(message)
        } else {
            res.status(400).json({ message: "Failed to return the book" });
        }
    } catch (error) {
        console.log("Error in returning a book:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { borrowBook, returnBook };