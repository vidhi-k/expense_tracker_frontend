import React from 'react';
import styled from 'styled-components';
import "./sign.css";
import "./view.css";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function View(){
    return (
        <div>
            <Wrapper>
            <Logo>
            <IconButton><ArrowBackIcon /></IconButton>
                <text>Expense History</text>
            </Logo>
            <Wrapper2><NavOne>Weekly</NavOne><NavTwo>Monthly</NavTwo></Wrapper2>
            <Wrapper3>
            <IconButton><ArrowLeftIcon/></IconButton>
                <text>Week</text>
                <IconButton><ArrowRightIcon/></IconButton>
            </Wrapper3>
           
            </Wrapper>
        </div>
    );
}
export default View;

// const Home = styled.button`
//     height: 45px;
//     background-color: #7968F8;
//     padding: 10px;
//     color: #FFFFFF;
// `;

const NavTwo = styled.button`
    background-color: #EAF1FE;
    width: 50%;
    height: 1cm;
    color: #888888;
    font-size: 12px;
    border: none;
    margin-bottom: 10px;
`;

const NavOne = styled.button`
    background-color: #FFFFFF;
    width: 50%;
    height: 1cm;
    color: #372E7B;
    font-size: 12px;
    border: none;
    margin-bottom: 10px;
`;

const Logo = styled.div`
   
   margin-top: -10px;
   margin-bottom: 0;
   width: 100vw;
  height: 45px;
  background-color: #7968F8;
  padding: 10px; 
   color: white;
   font-size: 25px;
   display: flex;
  justify-content: center;
  align-items: left;
  font-family: 'Inter', sans-serif;
  
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
`;

const Wrapper3 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;