import React from "react";
import "./assest/style.css";
import {toast,ToastContainer} from 'react-toastify';

function Button()
{
     var validateotp=()=>{
            
        toast.success("validating otp");
  }
   return(<>

   <button className="button" onClick={validateotp}>Submit OTP</button>
     </>
   ) ;
}
export default Button;