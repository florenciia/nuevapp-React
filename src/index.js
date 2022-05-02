import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBo2INxe0kibnjVnCObhBM5QDTncknVFfk",
    authDomain: "sensations-perfumes.firebaseapp.com",
    projectId: "sensations-perfumes",
    storageBucket: "sensations-perfumes.appspot.com",
    messagingSenderId: "602419753240",
    appId: "1:602419753240:web:80dfbf43497cb796f46e6d",
    measurementId: "G-2SNTDZVB5N"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
