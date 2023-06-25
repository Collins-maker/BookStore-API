--Done some changes...consider running the commands below to drop the tables first then re- execute the schema and tables to have it in...

--Commands to drop the tables before executing them again:
DROP TABLE library.Loans;
DROP TABLE library.Members;
DROP TABLE library.Books;

--To confirm that the tables have been deleted...run the select comannds below:
SELECT * FROM library.Books;
SELECT * FROM library.Loans;
SELECT * FROM library.Members;

--after you execute the above separately you can now execute the code below...

--CREATE SCHEMA library;
--GO 
CREATE TABLE library.Books (
BookID INT PRIMARY KEY IDENTITY(1,1),
Title VARCHAR (255) NOT NULL, 
Author VARCHAR(255) NOT NULL,
PublicationYear VARCHAR(255) NOT NULL,
Status VARCHAR(255) NOT NULL);

-- have added a Password column into the table Members to enhance authentication

CREATE TABLE library.Members(
MemberID INT IDENTITY(1,1) PRIMARY KEY,
Name VARCHAR(255) NOT NULL,
Address VARCHAR (255) NOT NULL,
ContactNumber VARCHAR (255) NOT NULL,
email VARCHAR(30) NOT NULL, 
password VARCHAR(100) NOT NULL
);
 
CREATE TABLE library.Loans(
LoanID INT IDENTITY(1,1) PRIMARY KEY,
BookID INT FOREIGN KEY REFERENCES library.Books (BookID) NOT NULL,
MemberID INT FOREIGN KEY REFERENCES library.members(MemberID) NOT NULL,
LoanDate DATE,
ReturnDate DATE 
);




<---inserting data now---->
INSERT INTO library.Members (Name, Address, ContactNumber, email, password) VALUES
('John Smith', '123 Main St, Cityville', '555-1234', 'john.smith@example.com', 'secret001'),
('Emily Johnson', '456 Elm St, Townville', '555-5678', 'emily.johnson@example.com', 'secret002'),
('Michael Williams', '789 Oak St, Villagetown', '555-9012', 'michael.williams@example.com', 'secret003'),
('Sophia Brown', '321 Pine St, Hamletville', '555-3456', 'sophia.brown@example.com', 'secret004'),
('Daniel Taylor', '654 Maple St, Countryside', '555-7890', 'daniel.taylor@example.com', 'secret005'),
('Olivia Martinez', '987 Cedar St, Hillside', '555-1234', 'olivia.martinez@example.com', 'secret006'),
('James Davis', '741 Birch St, Riverside', '555-5678', 'james.davis@example.com', 'secret007'),
('Emma Garcia', '852 Walnut St, Lakeside', '555-9012', 'emma.garcia@example.com', 'secret008'),
('Benjamin Rodriguez', '369 Willow St, Mountainview', '555-3456', 'benjamin.rodriguez@example.com', 'secret009'),
('Ava Wilson', '951 Cherry St, Beachside', '555-7890', 'ava.wilson@example.com', 'secret010');


--To confirm if inserted execute:
SELECT * FROM library.Members;




INSERT INTO library.Books (Title, Author, PublicationYear, Status) VALUES
('To Kill a Mockingbird', 'Harper Lee', '1960', 'Available'),
('1984', 'George Orwell', '1949', 'Available'),
('The Great Gatsby', 'F. Scott Fitzgerald', '1925', 'Available'),
('Pride and Prejudice', 'Jane Austen', '1813', 'Available'),
('The Catcher in the Rye', 'J.D. Salinger', '1951', 'Available'),
('The Hobbit', 'J.R.R. Tolkien', '1937', 'Available'),
('To the Lighthouse', 'Virginia Woolf', '1927', 'Available'),
('Brave New World', 'Aldous Huxley', '1932', 'Available'),
('Moby-Dick', 'Herman Melville', '1851', 'Available'),
('The Lord of the Rings', 'J.R.R. Tolkien', '1954', 'Available');

--To confirm if inserted execute:
SELECT * FROM library.Books;