import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./assest/style.css";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="item">
                    <Link to="" style={{color:"white",textDecoration:"none"}}>Home</Link>
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
                <Outlet />
            </div>
        </>
    );
}

export default Navbar;
