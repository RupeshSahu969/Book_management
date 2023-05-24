import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../Redux/AppReducer/actionCreator';
import BookCard from './BookCard';
import styled from "styled-components";
import { useLocation, useSearchParams } from 'react-router-dom';

const Booklist = () => {

  const books=useSelector((state)=>state.AppReducer.books);
  // console.log(books);
  const dispatch=useDispatch();

  const [searchParams]=useSearchParams();

  const location=useLocation();
  console.log(location);

  useEffect(()=>{

    const sortBy=searchParams.get("sortBy");

    if(location || books.length===0){
      let getBooksParams={
        params:{
          category:searchParams.getAll("category"),
          _sort:sortBy && 'release_year',
          _order:sortBy,
        },
      };
      // console.log(getBooksParams);
    dispatch(getBooks(getBooksParams));
    }
    

  },[location.search]);
  console.log(books);

  return (
    <>
      {
        books.length > 0 && books.map((item)=>{
          return (
          <BookCardWrapper key={item.id}>
           <BookCard bookdata={item}/>
           </BookCardWrapper>
          )
        })
      }
    </>
  )
}

const BookCardWrapper=styled.div`
width:300px;
border:1px solid green;

`

export default Booklist
