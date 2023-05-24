import React from 'react'
import Booklist from '../Component/Booklist'
import FilterComp from '../Component/FilterComp'
import styled from 'styled-components'

const Books = () => {
  return (
    <div>
      {/* <h1>Books</h1> */}
      {/* <div style={{display:"flex"}}> */}
      <BookPageWrapper>
        <FilterCompWrapper>
      <FilterComp/>
      </FilterCompWrapper>
      <BookListWrapper>
      <Booklist/>
      </BookListWrapper>
      </BookPageWrapper>
      {/* </div> */}
    </div>
  )
}

const BookPageWrapper=styled.div`
display:flex;

`;

const FilterCompWrapper=styled.div`width:300px;border:1px solid red`;

const BookListWrapper=styled.div`width:100%;
border:1px solid blue;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,max-content));
grid-gap:10px;
justify-content:center;

`

export default Books
