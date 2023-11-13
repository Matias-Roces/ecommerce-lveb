import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA_WNFTU2uxf5lH9SkwMLtV0wtXFjQGCI",
  authDomain: "ecommerce-lveb.firebaseapp.com",
  projectId: "ecommerce-lveb",
  storageBucket: "ecommerce-lveb.appspot.com",
  messagingSenderId: "487558793773",
  appId: "1:487558793773:web:33ca05b248710000f406a4",
  measurementId: "G-B1E8TRR33C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
