CREATE PROCEDURE getBookByID
    @BookID INT
AS
BEGIN
    SELECT BookID, Title, Author, PublicationYear, Status, ImageURL, Description
    FROM library.Books
    WHERE BookID = @BookID;
END;
