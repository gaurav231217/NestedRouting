import React, { useEffect } from "react";
import "./assest/style.css";
import Button from "./Button.js";


function OTP() {

    useEffect(() => {

        var otpInput = document.getElementsByClassName("otp-input");
        Array.from(otpInput).forEach((element, index, array) => {
            var length = Array.from(otpInput).length;

            element.addEventListener("input", (e) => {
                const value = element.value;

                if (!/^[0-9]$/.test(value)) {
                    element.value = "";
                    return;

                }
                if (value && index < length - 1) {
                    Array.from(otpInput)[index + 1].focus();
                }
                var otp = ""
                for (var i = 0; i <= index; i++) {
                    otp += Array.from(otpInput)[i].value;
                }
                if (otp.length == Array.from(otpInput).length) {
                    alert(`your otp is ${otp}`);
                }
            })
            Array.from(otpInput).forEach((element, index, array) => {


                element.addEventListener("keydown", (e) => {
                    if (e.key == "Backspace" && index > 0) {
                        if (element.value == "")
                            Array.from(otpInput)[index - 1].focus()
                    }
                })

            })

        })
    });

    return (
        <>
         
            <div className="otp-container">
                <input type="text" maxlength="1" className="otp-input" />
                <input type="text" maxlength="1" className="otp-input" />
                <input type="text" maxlength="1" className="otp-input" />
                <input type="text" maxlength="1" className="otp-input" />
            </div>
            <Button />
        </>
    );


}
export default OTP;