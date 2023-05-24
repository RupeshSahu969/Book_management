import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';


// to check if user is authenticated
// if yes take him to the protected route
// else navigate/redirect to the login page
const RequireAuth = ({children}) => {

    const auth =useSelector((state)=>state.AuthReducer.isAuth);
    // console.log(auth);

    const location=useLocation();
    console.log(location);
  
    if(!auth){
        // send him to login page
        return <Navigate to="/login" replace 
        // state={{data:"Testing Data from RequireAuth to Login Page"}}
        state={{data:location.pathname}}
        />

    }

    return children;
}

export default RequireAuth
