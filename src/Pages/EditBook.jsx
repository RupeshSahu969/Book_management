import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getBooks, UpdateBook } from '../Redux/AppReducer/actionCreator';

const EditBook = () => 
{
  const {id}=useParams();

  // const [currentBook,setCurrentBook]=useState({});

  const [bookName,setBookbyName]=useState("");
  const [bookAuthor,setBookbyAuthor]=useState("");

  const books=useSelector((state)=>state.AppReducer.books);

  const dispatch=useDispatch();

  const navigate=useNavigate();

  useEffect(()=>{
    
    if(books.length === 0)
    {
      dispatch(getBooks());
    }

  },[books.length,dispatch]);

  useEffect(()=>{
    if(id){
      const BookById=books.find((book)=>book.id === Number(id));
      // BookById && setCurrentBook(BookById)
      BookById && setBookbyName(BookById.book_name);
      BookById && setBookbyAuthor(BookById.author);

    }

  },[books,id]);

  const upadteBookData=()=>{
    const payload={
      book_name:bookName,
      author:bookAuthor
    }
    dispatch(UpdateBook(id,payload))
    // .then(()=>{
    //   dispatch(getBooks())
      .then(()=>{
        navigate("/");

      })
    // })
  }
  // console.log(currentBook);
  return (
    <div>
      <h3>EditBook</h3>
      {/* <div>{currentBook.book_name? currentBook.book_name:""}</div>
      <div>{currentBook.author ? currentBook.author:""}</div> */}
      <div>
        <input type="text" value={bookName}
         onChange={(e)=>setBookbyName(e.target.value)}/>
      </div>
      <div>
        <input type="text"
         value={bookAuthor} 
        onChange={(e)=>setBookbyAuthor(e.target.value)}/>
      </div>
      <button onClick={upadteBookData}>Update</button>
    </div>
  )
}

export default EditBook
