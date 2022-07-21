import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom';

function AddExp() {
    
    const [amount, setAmount] = useState();
    const [note, setNote] = useState("");
    const [category, setCategory] = useState("");
    // const [date, setDate] = useState();

    function addE(){
        let item = {amount, note, category, user_id};
       fetch("http://localhost:8080/api/v1/expenses", {
          method:"POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({amount, note, category, user_id}),
        })
        .then(response => {
          return response.text();
        })
        .then(data => {
         
        });
      }

    return (
        <Wrapper>
        <Logo>
            <IconButton component = {Link} to="/home"><ArrowBackIcon /></IconButton>
                <text>Add Expense</text>
            </Logo>
        
        <Input1 type="number" placeholder='0' onChange={(e) => setAmount(e.target.value)}></Input1>
        <Input2 type="text" placeholder='Note' onChange={(e) => setNote(e.target.value)}></Input2> 
        <Input2 type="text" placeholder='Category' onChange={(e) => setCategory(e.target.value)}></Input2> 
        {/* <Input2 type="date" placeholder='Date' onChange={(e) => setDate(e.target.value)}></Input2> */}
        <Add onClick={addE}>Add</Add>
    </Wrapper>
    );
    
}
export default AddExp;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input1 = styled.input`
    margin: auto;
    background-color: #EAF1FE;
    width: 60%;
    color: #372E7B;
    font-size: 12px;
    border: none;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 32.5px;
    ::placeholder {
    color: #0029FF;
    opacity: 0.5;
    font-family: 'Inter', sans-serif;
  }
  :focus {outline:none!important;}
 
`;

const Input2 = styled.input`
margin: auto;
    background-color: #EAF1FE;
    width: 90%;
    color: #372E7B;
    font-size: 12px;
    border: none;

    padding: 10px;
    margin-bottom: 10px;
    border-radius: 0px;
    ::placeholder {
    color: #0029FF;
    opacity: 0.5;
    font-family: 'Inter', sans-serif;
    }
    :focus {outline:none!important;}

`;

const Add = styled.button`
    background-color: #7968F8;
    color: #fff;
   
    font-family: 'Inter', sans-serif;
    text-align: center;
    width: 45%;
    height: 35px;
    border: none;
    font-size: 30px;
    border-radius: 4px;
    font-weight: 750;
    ${'' /* position: absolute; */}
`;

const Logo = styled.div`
   
   ${'' /* margin-top: -10px;
   margin-bottom: 10px;
   width: 100vw;
  height: 60px;
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
