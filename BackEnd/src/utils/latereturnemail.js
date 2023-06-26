async function sendDefaultedLoansEmails() {
    try {
        const sql = await mssql.connect(config);
        const request = sql.request();
        const result = await request.query(`
            SELECT Loans.LoanID, Loans.BookID, Loans.MemberID, Members.email
            FROM Library.Loans AS Loans
            JOIN Library.Members AS Members ON Loans.MemberID = Members.MemberID
            WHERE Loans.ReturnDate <= GETDATE()
        `);

        for (const row of result.recordset) {
            const { LoanID, BookID, MemberID, email } = row;
            const subject = 'Book Return Reminder';
            const text = `Hello there,\n\nYou have defaulted on the return of Book ID ${BookID}. Kindly return the book as soon as you can.\n\nThank you.\nThe techbros`;

            // Send email to the defaulted borrower
            const html = await createMarkup("./src/views/reminder.ejs", { text });

            const message = {
                to: email,
                from: process.env.EMAIL_USER,
                subject: subject,
                html: html
            };

            await sendMail(message);
        }

    } catch (error) {
        console.log('Error sending defaulted loans emails:', error);
    }
}