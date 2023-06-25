-- sql stored procedure code for inserting new members
CREATE OR ALTER PROCEDURE InsertMember
@Name varchar(255),
@Address varchar(255),
@ContactNumber varchar(255),
@email varchar(50),
@password varchar(50)


AS
BEGIN
	INSERT INTO library.Members(Name,Address,ContactNumber,email,password)

	VALUES (@Name,@Address,@ContactNumber,@email,@password);

	SELECT * FROM library.Members WHERE MemberID = SCOPE_IDENTITY();
END;

-- EXEC InsertMember 
 --@Name ='Collins',
 --@Address='Kimathi',
-- @ContactNumber=738121314,
--@email="muchuicollins56@gmail.com",
--@password ='secret0011';

--SELECT * FROM library.Members