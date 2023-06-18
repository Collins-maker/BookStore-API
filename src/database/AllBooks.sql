CREATE PROCEDURE getBooks
AS
BEGIN
	SELECT * 
	FROM Library.Books
	WHERE Books.Status='Available'
END;

