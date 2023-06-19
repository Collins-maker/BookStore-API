---stored procedures for membes table data---->

CREATE OR ALTER PROCEDURE getAllMembers
AS
BEGIN
SELECT * FROM library.Members;
END;

-- EXEC getAllMembers;

--get member by ID
CREATE OR ALTER PROCEDURE getMemberById
  @MemberID AS INT
AS
BEGIN
  SELECT * FROM library.Members
  WHERE MemberID = @MemberID; 
END;
EXEC getMemberById @MemberID;




