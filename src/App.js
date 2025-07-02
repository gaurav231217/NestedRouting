import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Component/Navbar.js';
import HomePage from './Component/HomePage.js';
import Loader from './Component/Loader.js';
import App2 from './Component/App2.js';
import { useEffect, useState } from 'react';
// Will handle all /otp/* routes

function App() {
  var [bool, setBool] = useState(true);
  useEffect(() => {
      setTimeout(() => {
      setBool(false);
    }, 5000); 
    

    
   }, [])
  return (<>{bool ? <Loader /> :
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomePage />} />

            <Route path="otp/*" element={<App2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>}</>
  );
}

export default App;
