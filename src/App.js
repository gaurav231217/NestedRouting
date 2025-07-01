import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Component/Navbar.js';
import HomePage from './Component/HomePage.js';
import App2 from './Component/App2.js'; // Will handle all /otp/* routes

function App() {
  return (
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
    </>
  );
}

export default App;
