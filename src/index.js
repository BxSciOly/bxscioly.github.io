import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmvRMmxuwaE9RHYzKLAxT9shEX1oBLQes",
  authDomain: "auth-production-35273.firebaseapp.com",
  projectId: "auth-production-35273",
  storageBucket: "auth-production-35273.appspot.com",
  messagingSenderId: "342777760904",
  appId: "1:342777760904:web:6b73c383298badc925e33d",
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
