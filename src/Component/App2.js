import React from "react";
import Navbar2 from "./Navbar2";
import OTP from "./OTP";
import { Outlet, Routes, Route,Navigate } from "react-router-dom";
import HomePage from "./HomePage";


function App2() {
  return (
    <>
      <Routes>
         
        <Route path="/" element={<Navbar2 />}>
          <Route index element={<HomePage/>} />
         
          <Route path="gkt" element={<OTP />} />
         
          {/* Add more routes under /otp/ as needed */}
        </Route>
      </Routes>
      <Outlet/>
    </>
  );
}

export default App2;

