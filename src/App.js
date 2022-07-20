import React from 'react';
import styled from 'styled-components';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUp from "./pages/signUp";
import Home from "./pages/Home";
import AddExp from "./pages/add";

function App(){
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}>
            {/* <Route path='/home' element={<Home />}></Route> */}
          </Route>
          <Route path='/signup' element={<SignUp />}>
          {/* <Route path='/home' element={<Home />}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
}
export default App;
