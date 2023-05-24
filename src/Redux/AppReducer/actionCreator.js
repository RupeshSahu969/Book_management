// action Creator//

import * as types from "./actionTypes";
import axios from "axios";



// currying Javascript 
export const getBooks=(params)=>(dispatch)=>{
    // dispatch(getBooksRequest());//same as itis
    dispatch({type:types.GET_BOOKS_REQUEST});
    return axios.get("http://localhost:8080/books",params)
    .then((res)=>{
        // dispatch(getBooksSuccess(res.data));
        dispatch({type:types.GET_BOOKS_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        // dispatch(getBooksFailure(err));
        dispatch({type:types.GET_BOOKS_FAILURE,payload:err});

    })

}

// patch the data for Update
export const UpdateBook=(id,payload)=>(dispatch)=>
{
    dispatch({type:types.PATCH_BOOK_REQUEST});
    return axios.patch(`http://localhost:8080/books/${id}`,payload)
    .then((res)=>{
        dispatch({type:types.PATCH_BOOK_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:types.PATCH_BOOK_FAILURE,payload:err});
    })

}


