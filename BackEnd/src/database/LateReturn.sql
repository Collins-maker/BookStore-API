USE [Library]
GO

CREATE PROCEDURE [dbo].[GetDefaultedLoansAndEmails]
AS
BEGIN
    SELECT Loans.LoanID, Loans.BookID, Loans.MemberID, Members.email
    FROM Library.Loans AS Loans
    JOIN Library.Members AS Members ON Loans.MemberID = Members.MemberID
    WHERE Loans.ReturnDate <= GETDATE()
END
EXEC GetDefaultedLoansAndEmails;
