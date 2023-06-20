-- sql stored procedure code for inserting new members
CREATE OR ALTER PROCEDURE InsertMember
@Name varchar(255),
@Address varchar(255),
@ContactNumber INT


AS
BEGIN
	INSERT INTO library.Members(Name,Address,ContactNumber)

	VALUES (@Name,@Address,@ContactNumber);

	SELECT * FROM library.Members WHERE MemberID = SCOPE_IDENTITY();
END;

-- EXEC InsertMember 
-- @Name ='Collins',
-- @Address='Kimathi',
-- @ContactNumber=738121314;

-- SELECT * FROM library.Members