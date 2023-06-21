CREATE SCHEMA library;
GO 
CREATE TABLE library.Books (
<<<<<<< HEAD
BookID INT PRIMARY KEY IDENTITY(1,1),
=======
BookID INT IDENTITY(1,1) PRIMARY KEY, 
>>>>>>> 6078b06beab3047918b67ce3261c800e27fdf16b
Title VARCHAR (255) NOT NULL, 
Author VARCHAR(255) NOT NULL,
PublicationYear VARCHAR(255) NOT NULL,
Status VARCHAR(255) NOT NULL);

CREATE TABLE library.Members(
MemberID INT IDENTITY(1,1) PRIMARY KEY,
Name VARCHAR(255) NOT NULL,
Address VARCHAR (255) NOT NULL,
ContactNumber VARCHAR (20) NOT NULL
);
 
CREATE TABLE library.Loans(
LoanID INT IDENTITY(1,1) PRIMARY KEY,
BookID INT FOREIGN KEY REFERENCES library.Books (BookID),
MemberID INT FOREIGN KEY REFERENCES library.members(MemberID),
LoanDate DATE,
ReturnDate DATE 
);

<---inserting data now---->
INSERT INTO library.Members (Name, Address, ContactNumber) VALUES
('John Smith', '123 Main St, Cityville', '555-1234'),
('Emily Johnson', '456 Elm St, Townville', '555-5678'),
('Michael Williams', '789 Oak St, Villagetown', '555-9012'),
('Sophia Brown', '321 Pine St, Hamletville', '555-3456'),
('Daniel Taylor', '654 Maple St, Countryside', '555-7890'),
('Olivia Martinez', '987 Cedar St, Hillside', '555-1234'),
('James Davis', '741 Birch St, Riverside', '555-5678'),
('Emma Garcia', '852 Walnut St, Lakeside', '555-9012'),
('Benjamin Rodriguez', '369 Willow St, Mountainview', '555-3456'),
( 'Ava Wilson', '951 Cherry St, Beachside', '555-7890');




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

