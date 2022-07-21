import React from 'react';
import styled from 'styled-components';
import "./sign.css";
import "./view.css";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {Link} from 'react-router-dom';
import {useState} from 'react';



function View(){
    const [items, setItems] = useState([{"user_id": 1, "category": "Business", "amount": "1200", "date": "21/07/2022", "time": "2:28PM"}]);
            
        // implement the fetch function by week
        // const fetchItems = () =>{
        // fetch("https://jsonplaceholder.typicode.com/users")
        //         .then((res) => res.json())
        //         .then((json) => setItems(json));
        //};
        const fetchItems = () =>{setItems([]);};
    return (

        <div>
            <Wrapper>
            <Logo>
            <IconButton component = {Link} to="/home"><ArrowBackIcon /></IconButton>
                <text>Expense History</text>
            </Logo>
            <Wrapper2><NavOne>Weekly</NavOne><NavTwo>Monthly</NavTwo></Wrapper2>
            <Wrapper3>
            <IconButton onClick = {fetchItems}><ArrowLeftIcon/></IconButton>
                <text>Week</text>
                <IconButton><ArrowRightIcon/></IconButton>
            </Wrapper3>

            <div className="App">
              {
                items.map((item) => ( 
                <ol key = { item.id } >
                   <Expense> <b>{ item.category }</b>, &emsp;
                    { item.amount }, <br />
                    { item.date }, &emsp;
                    { item.time} </Expense>
                    <hr />
                    </ol>
                ))
            }
    </div>

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
   
   ${'' /* margin-top: -10px;
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
  font-family: 'Inter', sans-serif; */}
  line-height: 2em;
    ${'' /* padding: 5px 0px 6px; */}
    background-color: #7968F8;
    margin: 0 auto;
   
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

const Expense = styled.div`
  height: 45px;
  background-color: #F5F5F5;
  color: #372E7B;  
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