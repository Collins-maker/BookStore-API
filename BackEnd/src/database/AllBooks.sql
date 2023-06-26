CREATE PROCEDURE getBooks
AS
BEGIN
    SELECT BookID, Title, Author, PublicationYear, Status, ImageURL, Description
    FROM library.Books;
END;
