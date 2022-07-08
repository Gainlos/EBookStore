import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './view/HomePage';
import OrderIndex from "./view/OrderIndex";
import TestFetch from "./components/testfetch"
import BookCard from "./components/BookCard";
import CardGrid from "./components/CardGrid";
const root = ReactDOM.createRoot(document.getElementById('root'));

const Array=[1,2,3,4,5,6,7,8,9,10];
root.render(
  <React.StrictMode>
      {/*<BookCard id='1'/>*/}
    {/*<CardGrid array={Array} />*/}
      <HomePage array={Array}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
