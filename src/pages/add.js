import React from 'react';
import styled from 'styled-components';

function AddExp() {
    return (
        <Wrapper>
    
        <Bar>Add Expenses</Bar>
        <Input1 type="number" placeholder='0'></Input1>
        <Input2 type="text" placeholder='Category'></Input2> 
        <Input2 type="date" placeholder='Date'></Input2>
        <Add>Add</Add>
    </Wrapper>
    );
    
}
export default AddExp;

const Bar = styled.div`
    line-height: 2em;
    padding: 5px 0px 6px;
    background: #7968F8;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    color: white;
    font-size: 30px;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
`;

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
    position: absolute;
`;
