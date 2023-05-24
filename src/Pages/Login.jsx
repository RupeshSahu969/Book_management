import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Logins } from '../Redux/AuthReducer/actionCreator';

const Login = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();
  const location=useLocation();
  console.log(location);

  const navigate=useNavigate();

  const comingFrom=location.state?.data || "/";

  const handleSubmit=(e)=>{
    
    e.preventDefault()

    if(email && password)
    {
      dispatch(Logins({email ,password}))
      .then((res)=>{
         
        console.log("acess Login",res);
        navigate(comingFrom,{replace :true});
      })
    }
  }

  return (
   
      <FormWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email :</label>
          <input type="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          </div>
          {/* <br /> */}
          <div>
          <label>Password:</label>
          <input type="password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          </div>
          
          <button type="submit">LOGIN</button>
        
      </form>
      </FormWrapper>
    
  )
}

const FormWrapper=styled.div`
display:flex;
flex-direction:column;
width:300px;
align-items:center;
margin:auto;

`

export default Login;
