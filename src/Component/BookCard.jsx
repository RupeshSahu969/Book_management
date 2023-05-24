import React from 'react'
import { Link } from 'react-router-dom'

// book_name": "Full-Stack Web Development",
//   "category": "Novel",
//   "release_year

const BookCard = ({bookdata}) => {
  return (
    <div>
     <div>
      <div>
        <img src="https://images.unsplash.com/photo-1511108690759-009324a90311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3MlMjBjb3ZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
         alt="Books Image" 
         width="100%"
         />
        <div>{bookdata.book_name}</div>
        <div>{bookdata.category}</div>
        <div style={{display:"flex"}}>
        <div style={{flex: 1}}>{bookdata.release_year}</div>
        </div>
        <Link to={`/books/${bookdata.id}/edit`}>
          <button>EditBook</button>
          </Link>

          <Link to={`/books/${bookdata.id}`}>
          <button>SingleBook</button>
          </Link>
        </div>

     </div>

    </div>
  )
}

export default BookCard
