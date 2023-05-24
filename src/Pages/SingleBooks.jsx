import React from 'react'
import { useParams } from 'react-router-dom'

const SingleBooks = () => {
  const id=useParams()
  console.log(id)
  return (
    <div>
      <h1>SingleBook Page</h1>
    </div>
  )
}

export default SingleBooks
