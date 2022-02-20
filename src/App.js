import React from 'react';
import logo from './logo.svg';
// import './App.css';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,RecaptchaVerifier 
// } from "firebase/auth";
// import { auth } from "./firebase-config";
// import Signup from './component/sinup/singup';
// import Login from './component/login/login';
import Home from './component/home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// const auth = getAuth();

function App() {
  return (
    <div className="App">
      <div>eldeeb</div>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={Login} />
          <Route path="/signup" element={Signup} />
        </Routes>
    </div>
  );
}

export default App;
