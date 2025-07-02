import React, { useEffect } from "react";
import Navbar2 from "./Navbar2";
import OTP from "./OTP";
import { Outlet, Routes, Route,Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import "./assest/style.css";
import { useState } from "react";


function App2() {
  useEffect(()=>{
    document.getElementsByClassName("tabvalue")[1].style.display="none";
  });
  function tab(index){
    
    if(index==0){
      document.getElementsByClassName("tabvalue")[index].style.display="block";
       document.getElementsByClassName("tabvalue")[index+1].style.display="none";

    }
    else{
            document.getElementsByClassName("tabvalue")[index-1].style.display="none";
       document.getElementsByClassName("tabvalue")[index].style.display="block";
    }
  }
  return (
           
       <div className="container">
        <div className="tab">
          <div className="tabs" onClick={()=>{tab(0)}}>Home</div>
          <div className="tabs" onClick={()=>{tab(1)}}>Otp</div>
          <div className="tabs">Bombay</div>
        </div>
        <div className="tabrender">
          <div className="tabvalue"><HomePage/></div>
          <div className="tabvalue"><OTP/></div>
          
        </div>
       </div>

  );
}

export default App2;

