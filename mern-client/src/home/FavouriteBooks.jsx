import React, { useEffect } from 'react'
import { useState } from 'react'
import BookCards from '../components/BookCards';

const FavouriteBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
  return (
    <div>
        <BookCards books={books} headline="Best Seller Book"/>
    </div>
  )
}

export default FavouriteBooks