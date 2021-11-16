import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

require('firebase/firestore');

  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyCJC2aZmEUln0v8a9J-EbU17y8v0M4snGQ",
  authDomain: "notesbanao-16007.firebaseapp.com",
  projectId: "notesbanao-16007",
  storageBucket: "notesbanao-16007.appspot.com",
  messagingSenderId: "1029744964392",
  appId: "1:1029744964392:web:fa990f4ad024a1c49ed61d",
  measurementId: "G-SQGQL4P265"
  });
  firebase.analytics();

  export const auth = firebase.auth();

  export const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('noteitdown-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
