import React, { useEffect } from 'react'
import { useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://book-store-backend-deployed.onrender.com/all-books')
        .then(res => res.json())
        .then(data => setBooks(data.slice(0, 6)))
    }, [])
  return (
    <div>
        <BookCards books={books} headline="Best Seller Book"/>
    </div>
  )
}

export default BestSellerBooks