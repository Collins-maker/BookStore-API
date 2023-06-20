CREATE OR ALTER PROCEDURE membersWithBooks
AS
BEGIN
SELECT * FROM library.Members m 
JOIN library.Loans l
ON m.MemberID = l.MemberID
END;

EXEC membersWithBooks