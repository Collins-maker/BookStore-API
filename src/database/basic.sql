CREATE TABLE library.Books (
    BookID INT PRIMARY KEY IDENTITY(1,1),
    Title VARCHAR (255) NOT NULL, 
    Author VARCHAR(255) NOT NULL,
    PublicationYear VARCHAR(255) NOT NULL,
    Status VARCHAR(255) NOT NULL,
    ImageURL VARCHAR(255),
    Description VARCHAR(1000)
);


-- have added a Password column into the table Members to enhance authentication

CREATE TABLE library.Members(
MemberID INT IDENTITY(1,1) PRIMARY KEY,
Name VARCHAR(255) NOT NULL,
Address VARCHAR (255) NOT NULL,
ContactNumber VARCHAR (255) NOT NULL,
email VARCHAR(50) NOT NULL, 
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




--INSERT INTO library.Books (Title, Author, PublicationYear, Status, ImageURL, Description) VALUES
   
INSERT INTO library.Books (Title, Author, PublicationYear, Status, ImageURL, Description)
VALUES
     ('To Kill a Mockingbird', 'Harper Lee', '1960', 'Available', 'https://i.postimg.cc/Fs0W9tN0/to-kill-a-mockingbird-broadway-poster-3kcaoqh0l3im2e1o.jpg', 'To Kill a Mockingbird is a classic novel written by Harper Lee. It explores themes of racial injustice, morality, and the loss of innocence through the eyes of Scout Finch, a young girl in the 1930s American South.'),
     ('1984', 'George Orwell', '1949', 'Available', 'https://i.postimg.cc/tC4n2WJw/wonder-woman-1984-gal-gadot-art-gmgvk36wxsmihjcf.jpg', '1984 is a dystopian novel by George Orwell. It depicts a totalitarian society where individualism is suppressed, and the government exercises complete control over its citizens. The story follows Winston Smith, a man who rebels against the oppressive regime.'),
     ('The Great Gatsby', 'F. Scott Fitzgerald', '1925', 'Available', 'https://i.postimg.cc/BZm7RH5H/dark-academia-the-great-gatsby-a0otyey4rcgvwfl9.jpg', 'The Great Gatsby, written by F. Scott Fitzgerald, is a novel set in the 1920s during the Jazz Age. It explores themes of wealth, love, and the American Dream through the eyes of the enigmatic Jay Gatsby and the narrator, Nick Carraway.'),
     ('Pride and Prejudice', 'Jane Austen', '1813', 'Available', 'https://i.postimg.cc/5yDBb42d/pride.jpg', 'Pride and Prejudice is a renowned novel by Jane Austen. It revolves around the lives of the Bennet sisters and explores themes of love, marriage, and social expectations in early 19th-century England.'),
     ('The Catcher in the Rye', 'J.D. Salinger', '1951', 'Available', 'https://i.postimg.cc/k5hFfvPg/catcher-Rye.jpg', 'The Catcher in the Rye is a coming-of-age novel by J.D. Salinger. It follows the rebellious teenager Holden Caulfield as he navigates through the complexities of adolescence, identity, and societal expectations.'),
     ('The Hobbit', 'J.R.R. Tolkien', '1937', 'Available', 'https://i.postimg.cc/tT4rS4c9/hobit.jpg', 'The Hobbit, written by J.R.R. Tolkien, is a fantasy adventure novel set in the world of Middle-earth. It tells the story of Bilbo Baggins, a hobbit who embarks on a quest to reclaim the dwarf kingdom of Erebor from the fearsome dragon Smaug.'),
     ('To the Lighthouse', 'Virginia Woolf', '1927', 'Available', 'https://i.postimg.cc/66mvGpLC/lighthouse.jpg', 'To the Lighthouse is a modernist novel by Virginia Woolf. It explores themes of time, memory, and the complexity of human relationships through the perspectives of the characters during their visits to the Isle of Skye.'),
     ('Brave New World', 'Aldous Huxley', '1932', 'Available', 'https://i.postimg.cc/HxCmVKBq/Brave-New-World-First-Edition.jpg', 'Brave New World is a dystopian novel written by Aldous Huxley. Set in a futuristic society, it explores themes of government control, technological advancements, and the consequences of sacrificing individuality and personal freedom in the pursuit of stability and happiness. The novel raises profound questions about the nature of humanity and the price of utopia.'),
     ('Moby-Dick', 'Herman Melville', '1851', 'Available', 'https://i.postimg.cc/qMkp095S/Mo-By-V1-FMjpg-UX1000.jpg', 'Moby-Dick is a novel written by Herman Melville. It tells the story of Captain Ahab and his obsessive pursuit of the great white whale, Moby Dick. The novel explores themes of obsession, fate, and the human struggle against nature.'),
     ('The Lord of the Rings', 'J.R.R. Tolkien', '1954', 'Available', 'https://i.postimg.cc/P56tx2wy/Lord-of-the-rings.jpg', 'The Lord of the Rings is an epic fantasy trilogy written by J.R.R. Tolkien. Set in the fictional world of Middle-earth, the story follows a group of characters as they embark on a perilous journey to destroy the One Ring and defeat the dark lord Sauron. The trilogy explores themes of friendship, heroism, and the struggle between good and evil.');

	 ALTER TABLE library.Books
ALTER COLUMN Description VARCHAR(1000);


--To confirm if inserted execute:
SELECT * FROM library.Books;