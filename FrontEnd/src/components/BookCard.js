import React from 'react';


const BookCard = ({ book, member }) => {

  const handleBorrowClick = async () => {

    try {

      const response = await fetch('http://localhost:3000/borrow', {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

        },

        body: JSON.stringify({

          book_id: book.id,

          member_id: member.id,

        }),

      });




      if (response.ok) {

        alert('Book Has Been Borrowed Successfully'); // Display success message as a toast

      } else {

        const error = await response.json();

        alert(error.message); // Display error message as a toast

      }

    } catch (error) {

      console.log('Error borrowing book:', error);

    }

  };




  return (

    <div className="">

      <img src={book.ImageURL} alt={book.Title} />

      <div className="card__content">

        <h3 className="card__title">{book.Title}</h3>

        <p className="card__author">Author: {book.Author}</p>

        <p className="card__year">Publication Year: {book.PublicationYear}</p>

        <button onClick={handleBorrowClick}>Borrow</button>

      </div>

    </div>

  );

};




export default BookCard;