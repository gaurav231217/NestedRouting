import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./assest/style.css";

function Navbar() {
    var [bool,setBool]=useState(true);
    function menubar(){
      
         if(bool)
         {  
            setBool(false);
            document.getElementsByClassName("navbar")[0].style.width="0px";
            document.getElementsByClassName("navbar")[0].style.padding="0px";
           

         }
         else{
            setBool(true);
            document.getElementsByClassName("navbar")[0].style.width="9%";
            document.getElementsByClassName("navbar")[0].style.padding="10px 20px";
            

         }
    }
    return (
        <>
            <div className="navbarcontainer">
                <div className="navbar">
                    <div className="item">
                        <Link to="" style={{ color: "white", textDecoration: "none" }}>Home</Link>
                        <div className="list">
                            <Link to="otp" className="list-item">OTP</Link>
                            <Link to="#" className="list-item">bombay</Link>
                            <Link to="#" className="list-item">china</Link>
                        </div>
                    </div>
                    <div className="item">
                        About
                        <div className="list">
                            <Link to="#" className="list-item">delhi</Link>
                            <Link to="#" className="list-item">bombay</Link>
                            <Link to="#" className="list-item">china</Link>
                        </div>
                    </div>
                    <div className="item">
                        Contact
                        <div className="list">
                            <Link to="#" className="list-item">delhi</Link>
                            <Link to="#" className="list-item">bombay</Link>
                            <Link to="#" className="list-item">china</Link>
                        </div>
                    </div>
                </div>



                {/* Move Outlet outside navbar */}
                <div className="page-content">
                    <div className="menubar" onClick={()=>{
                        menubar();
                    }}>
                        <div
                                onclick={()=>{
                        menubar();
                    }}
                            style={{
                                width: '30px',
                                height: '25px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                cursor: 'pointer',
                                padding: '5px'
                            }}
                        >
                            <div style={{ height: '4px', background: 'black', borderRadius: '2px' }}></div>
                            <div style={{ height: '4px', background: 'black', borderRadius: '2px' }}></div>
                            <div style={{ height: '4px', background: 'black', borderRadius: '2px' }}></div>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Navbar;
