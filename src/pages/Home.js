import React from 'react';
import styled from 'styled-components';
import "./home.css";
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
function Home(){
    return (
        <Wrapper>
        <Bar>
        <IconButton className='hamburger'><MenuIcon sx={{fontSize: 30, left: 0}} /></IconButton><text className='logo'>Expense</text><text>Track</text>
        </Bar>
        <Link className='expense_history' to="/view"><Button1>Expense History<ArrowForwardIcon /></Button1></Link>
        <IconButton  component = {Link} to="/add"><AddCircleOutlinedIcon sx={{fontSize: 100, marginBottom: -100, color: "#7968F8"}} /></IconButton>

    </Wrapper>
    );
    

}
export default Home;


const Bar= styled.div`
    line-height: 2em;
    ${'' /* padding: 5px 0px 6px; */}
    background-color: #7968F8;
    margin: 0 auto;
    margin-bottom: 10px;
    text-align: center;
    width: 100%;
    color: #fff;
    font-size: 30px;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
 
  
`;

const Button1 = styled.button`
background-color: #EAF1FE;
color: #303030;
font-family: 'Inter', sans-serif;
text-align: center;
width: 90vw;
height: 8vh;
border: none;
margin-left: auto;
margin-right: auto;
border-radius: 8px;
${'' /* font-weight: 900; */}
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;

`;
