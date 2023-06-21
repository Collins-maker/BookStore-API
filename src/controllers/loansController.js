const mssql = require("mssql");
const config = require("../config/config");;
const emailConfig = require('../config/emailConfiguration');
const bcrypt = require("bcrypt");

const { request } = require("express");

const { tokenVerifier } = require("../utils/token");

async function borrowBook(req, res) {
  let token = req.headers["authorization"].split(" ")[1];
  console.log(token);
  try {
    let user = await tokenVerifier(token);
    // console.log(user);
    // res.json(user)
    if (user) {
      const { book_id } = req.body;
      const { member_id } = req.body;

      const sql = await mssql.connect(config);

      const loanDate = new Date();
      const returnDate = new Date(loanDate.getTime());
      returnDate.setDate(loanDate.getDate() + 7);
      // console.log(returnDate);

        request.input('book_id', mssql.Int, book_id);
        request.input('member_id', mssql.Int, member_id);
        request.input('loan_date', mssql.Date, loanDate);
        request.input('return_date', mssql.Date, returnDate);

        const result = await request.query('INSERT INTO library.Loans(BookID,MemberID,LoanDate,ReturnDate) VALUES (@book_id,@member_id,@loan_date,@return_date)');
      const request = sql.request();

      request.input("book_id", mssql.Int, book_id);
      request.input("member_id", mssql.Int, member_id);
      request.input("loan_date", mssql.Date, loanDate);
      request.input("return_date", mssql.Date, returnDate);

      const result = await request.query(
        "INSERT INTO library.Loans(BookID,MemberID,LoanDate,ReturnDate) VALUES (@book_id,@member_id,@loan_date,@return_date)"
      );
        if (result.rowsAffected[0] > 0) {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'cruzhumphriz@gmail.com',
                subject: 'Book Borrowed',
                text: 'The book has been borrowed successfully.',
            };

      if (result.rowsAffected[0] > 0) {
        res.status(200).json({ message: "Book borrowed succesfully" });
      } else {
        res.status(400).json({ message: "Failed to borrow the book" });
      }
            emailConfig.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error sending email:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });

            res.status(200).json({ message: 'Book borrowed successfully' });
        } else {
            res.status(400).json({ message: 'Failed to borrow the book' });
        }
    } catch (error) {
        console.log('Error borrowing book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
    
    
}

async function returnBook(req,res){
    try {
        const {book_id}=req.body
        

        const sql=await mssql.connect(config)
        const request=sql.request()
        request.input('book_id',mssql.Int,book_id)
        
        // const result=await request.query("UPDATE library.Books SET Status = 'Available' WHERE BookID=@book_id")
        const result=await request.query("DELETE FROM library.Loans WHERE BookID=@book_id")

      if (result.rowsAffected[0] > 0) {
        res.status(200).json({ message: "Book returned succesfully" });
      } else {
        res.status(400).json({ message: "Failed to return the book" });
      }
    }
  } catch (error) {
    console.log("Error in returning a book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
// signup

module.exports = { borrowBook, returnBook };

