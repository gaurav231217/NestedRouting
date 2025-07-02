import React, { useEffect } from "react";
import Navbar2 from "./Navbar2";
import OTP from "./OTP";
import { Outlet, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import "./assest/style.css";
import { useState } from "react";


function App2() {
  var [count, setCount] = useState(0);
  useEffect(() => {
    document.getElementsByClassName("tabvalue")[1].style.display = "none";
  });
  function tab(index) {

    if (index == 0) {

      document.getElementsByClassName("tabvalue")[index].style.display = "block";
      document.getElementsByClassName("tabvalue")[index + 1].style.display = "none";
      if (count == 0) {
        setCount(1);
        document.getElementsByClassName("tabscontent")[index].style.height = "300px";
        document.getElementsByClassName("tabscontent")[index + 1].style.height = "0px"
      }
      else {
        setCount(0);
        document.getElementsByClassName("tabscontent")[index].style.height = "0px";
        document.getElementsByClassName("tabscontent")[index + 1].style.height = "0px"
      }

    }
    else {
      document.getElementsByClassName("tabvalue")[index - 1].style.display = "none";
      document.getElementsByClassName("tabvalue")[index].style.display = "block";
      document.getElementsByClassName("tabscontent")[index].style.height = "300px";
      document.getElementsByClassName("tabscontent")[index - 1].style.height = "0px"
    }
  }
  return (

    <div className="container">
      <div className="tab">
        <div className="tabs" onClick={() => { tab(0) }}>Home
          <div className="tabscontent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </div>
        </div>
        <div className="tabs" onClick={() => { tab(1) }}>Otp
          <div className="tabscontent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </div>
        </div>
        <div className="tabs">Bombay</div>
      </div>
      <div className="tabrender">
        <div className="tabvalue"><HomePage /></div>
        <div className="tabvalue"><OTP /></div>

      </div>
    </div>

  );
}

export default App2;

