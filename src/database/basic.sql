CREATE SCHEMA library;
GO 
CREATE TABLE library.Books (
BookID INT PRIMARY KEY IDENTITY(1,1),
Title VARCHAR (255) NOT NULL, 
Author VARCHAR(255) NOT NULL,
PublicationYear VARCHAR(255) NOT NULL,
Status VARCHAR(255) NOT NULL);

CREATE TABLE library.Members(
MemberID INT PRIMARY KEY,
Name VARCHAR(255) NOT NULL,
Address VARCHAR (255) NOT NULL,
ContactNumber VARCHAR (20) NOT NULL
);
 
CREATE TABLE library.Loans(
LoanID INT PRIMARY KEY,
BookID INT FOREIGN KEY REFERENCES library.Books (BookID),
MemberID INT FOREIGN KEY REFERENCES library.members(MemberID),
LoanDate DATE,
ReturnDate DATE 
);

<---inserting data now---->
INSERT INTO library.Members (MemberID, Name, Address, ContactNumber) VALUES
(1, 'John Smith', '123 Main St, Cityville', '555-1234'),
(2, 'Emily Johnson', '456 Elm St, Townville', '555-5678'),
(3, 'Michael Williams', '789 Oak St, Villagetown', '555-9012'),
(4, 'Sophia Brown', '321 Pine St, Hamletville', '555-3456'),
(5, 'Daniel Taylor', '654 Maple St, Countryside', '555-7890'),
(6, 'Olivia Martinez', '987 Cedar St, Hillside', '555-1234'),
(7, 'James Davis', '741 Birch St, Riverside', '555-5678'),
(8, 'Emma Garcia', '852 Walnut St, Lakeside', '555-9012'),
(9, 'Benjamin Rodriguez', '369 Willow St, Mountainview', '555-3456'),
(10, 'Ava Wilson', '951 Cherry St, Beachside', '555-7890');




INSERT INTO library.Books (BookID, Title, Author, PublicationYear, Status) VALUES
(1, 'To Kill a Mockingbird', 'Harper Lee', '1960', 'Available'),
(2, '1984', 'George Orwell', '1949', 'Available'),
(3, 'The Great Gatsby', 'F. Scott Fitzgerald', '1925', 'Available'),
(4, 'Pride and Prejudice', 'Jane Austen', '1813', 'Available'),
(5, 'The Catcher in the Rye', 'J.D. Salinger', '1951', 'Available'),
(6, 'The Hobbit', 'J.R.R. Tolkien', '1937', 'Available'),
(7, 'To the Lighthouse', 'Virginia Woolf', '1927', 'Available'),
(8, 'Brave New World', 'Aldous Huxley', '1932', 'Available'),
(9, 'Moby-Dick', 'Herman Melville', '1851', 'Available'),
(10, 'The Lord of the Rings', 'J.R.R. Tolkien', '1954', 'Available');

INSERT INTO library.Loans (LoanID, BookID, MemberID, LoanDate, ReturnDate) VALUES
(1, 1, 1, '2023-06-01', '2023-06-15'),
(2, 2, 2, '2023-06-02', '2023-06-16'),
(3, 3, 3, '2023-06-03', '2023-06-17'),
(4, 4, 4, '2023-06-04', '2023-06-18'),
(5, 5, 5, '2023-06-05', '2023-06-19'),
(6, 6, 1, '2023-06-06', '2023-06-20'),
(7, 7, 2, '2023-06-07', '2023-06-21'),
(8, 8, 3, '2023-06-08', '2023-06-22'),
(9, 9, 4, '2023-06-09', '2023-06-23'),
(10, 10, 5, '2023-06-10', '2023-06-24');