import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import View from './pages/view';
import Home from './pages/Home';
import AddExp from './pages/add';
import GlobalStyle from './GlobalStyles';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


