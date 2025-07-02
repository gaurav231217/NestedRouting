import React from "react";
import "./assest/style.css";
import {toast,ToastContainer} from 'react-toastify';

function Button()
{
     var validateotp=()=>{
            
        toast("validating otp");
  }
   return(<>
    <div style={{ textAlign: "center" }}>
   <button className="button" onClick={validateotp}>Submit OTP</button>
   </div>
     </>
   ) ;
}
export default Button;