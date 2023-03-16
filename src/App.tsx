import React from 'react';
import './App.css';
import SignupForm from './component/SignupForm';
import { Toaster } from 'react-hot-toast'; 
import LoginForm from './component/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomePage from './component/Pages/HomePage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
     <Toaster />
    </div>
  );
}

export default App;
