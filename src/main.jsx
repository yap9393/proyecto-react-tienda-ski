import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../style.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBeqcKskzTtir03WaO2EvIMkzzbp_rTYtQ",
  authDomain: "react-coderhouse-agustin-p.firebaseapp.com",
  projectId: "react-coderhouse-agustin-p",
  storageBucket: "react-coderhouse-agustin-p.appspot.com",
  messagingSenderId: "807839313626",
  appId: "1:807839313626:web:81c65722c7eebc1ee0ffe3"
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId, 
  // appId:process.env.REACT_APP_appId
  
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
