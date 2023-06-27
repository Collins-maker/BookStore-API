import React, { useState, useEffect } from 'react';

import axios from 'axios';

import BookCard from './BookCard';


import './Book.css';


const Books = () => {

  const [books, setBooks] = useState([]);

  const [error, setError] = useState('');




  useEffect(() => {

    const fetchBooks = async () => {

      try {

        console.log('Fetching books...'); // Add this line

        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        console.log(token);
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        };

        const response = await axios.get('http://localhost:4040/books',config);

        const data = response.data;

        console.log('Fetched books:', data);// Add this line




        if (data.success) {

          setBooks(data.data);

        } else {

          setError(data.message);

        }

      } catch (error) {

        console.error('Error fetching books:', error);

        setError('Internal server error');

      }

    };




    fetchBooks();

  }, []);




  return (

    <div>

      <div className='card'> {/* Wrap the card content in a div */}

        {error ? (

          <p>An error occurred: {error}</p>

        ) : (

          books.map((book) => <BookCard key={book.BookID} book={book} />)

        )}

      </div>

    </div>

  );

};


export default Books;