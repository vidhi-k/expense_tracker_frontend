import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import "./sign.css";
import { Outlet, Link } from "react-router-dom";

function SignUp(){

    
    
    return (
        <div>
            <Wrapper>
            <Logo>
              <text className='logo'>Expense</text><text>Track</text>
            </Logo>
            <Input type="email" placeholder='Email'></Input>
            <Input type="text" placeholder='Name'></Input>
            <Input type="text" placeholder='Password'></Input>
            <Input type="text" placeholder='Re-Enter Password'></Input>

            <Login><Link className='linkMain' to="/signup/home">Sign Up</Link></Login>
            </Wrapper>
        </div>
    );
}
export default SignUp;

const Input = styled.input`
margin: auto;
    background-color: #EAF1FE;
    width: 60%;
    color: #372E7B;
    font-size: 12px;
    border: none;
   
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    ::placeholder {
    color: #0029FF;
    opacity: 0.5;
      font-family: 'Inter', sans-serif;
    
  }
  :focus {outline:none!important;}
 
`;

const Logo = styled.div`
   margin: auto;
   margin-top: 10vh;
   margin-bottom: 50px;
   width: 75%;
  height: 90px;
  background-color: #7968F8;
  padding: 10px;
 
   color: white;
   font-size: 40px;
   ${'' /* font-weight: bold; */}
   display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = styled.button`
    background-color: #7968F8;
    color: #fff;
   
    font-family: 'Inter', sans-serif;
    text-align: center;
    width: 45%;
    height: 35px;
    border: none;
    font-size: 15px;
    border-radius: 4px;

    font-weight: 750;
`;

