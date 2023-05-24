import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getBooks} from '../Redux/AppReducer/actionCreator'

const SingleBooks = () => {
  const books=useSelector((state)=>state.AppReducer.books);

  const {id}=useParams()
  console.log(id)
  const navigate=useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getBooks(id));

  }, [id]);
  
  
  return (
    <div>
      <h1>SingleBook Page</h1>
      <div> {books.id} </div>
    </div>
  )
}

export default SingleBooks
