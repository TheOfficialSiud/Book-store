import React, { useEffect } from 'react'
import { useState } from 'react'

const FavouriteBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
  return (
    <div>FavouriteBooks</div>
  )
}

export default FavouriteBooks