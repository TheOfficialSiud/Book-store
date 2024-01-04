import React from 'react'
import BookCards from '../components/BookCards';
import { useEffect, useState} from 'react'


const OtherBook = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://book-store-backend-deployed.onrender.com/all-books')
        .then(res => res.json())
        .then(data => setBooks(data.slice(2, 6)))
    }, [])
  return (
    <div>
        <BookCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBook