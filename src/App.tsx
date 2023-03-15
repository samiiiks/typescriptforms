import React from 'react';
import './App.css';
import SignupForm from './component/SignupForm';
import { Toaster } from 'react-hot-toast'; 
import LoginForm from './component/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
     <Toaster />
    </div>
  );
}

export default App;
