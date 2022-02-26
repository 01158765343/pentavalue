import React, { useState } from "react";
import { auth } from "../../firebase-config";
import { signInWithPhoneNumber, RecaptchaVerifier  } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { accessToken } from "../../action/token";
function PhoneLogin (){
    const dispatch=useDispatch()
    const [phone ,setPhone]=useState()
    const [code ,setCode]=useState()
    const [phonex,setPhonex]=useState(true)
    const naveget=useNavigate()
    const onchangePhone =(e)=>{
        setPhone(e.target.value)
        // console.log(e.target.value)
    }
    const onchangeCode =(e)=>{
        setCode(e.target.value)
        // console.log(e.target.value)
    }

    const setUpRecaptcha=()=>{
        let phoneNumber = "0200" + phone;
        console.log("a")
        window.recaptchaVerifier = new RecaptchaVerifier('xxx', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
            //   onSignInSubmit();
            // console.log("a")

            }
          }, auth);
        // setRecaptchaVerifier(a)

    } 
    const onSignInSubmit = (e) => {
        e.preventDefault();
        setUpRecaptcha();
        let phoneNumber =  "+58 "+phone;
        // console.log(phoneNumber);
        let appVerifier = window.recaptchaVerifier;
        // console.log("a")

        signInWithPhoneNumber(auth,phoneNumber, appVerifier)
        .then(function (confirmationResult) {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // console.log(confirmationResult);
            console.log("OTP is sent");
            setPhonex(false)
        })
        .catch(function (error) {
            // console.log(error);
        });
    };
    const ocCode=(e)=>{
        e.preventDefault();
        let optConfirm = window.confirmationResult;
        // console.log(codee);
        optConfirm
        .confirm(code)
        .then(function (result) {
            // User signed in successfully.
            // console.log("Result" + result.verificationID);
            let user = result.user;
            console.log(user)
            dispatch(accessToken(user.accessToken))
            naveget("/")
        })
        .catch(function (error) {
            // console.log(error);
            alert("Incorrect OTP");
        });
    }
    return(
        <div className="PhoneLogin">
            {(phonex)?(
                <div>
                    <h1 style={{textAlign:"center",padding:"100px"}}>Phone Number</h1>
                    <div style={{width:"50%",margin:"auto"}}>
                        <input onChange={onchangePhone} value={phone} style={{width:"100%"}} type="text" />
                    </div>
                    <div style={{width:"50%",margin:"auto"}}>
                        <button id="xxx" onClick={onSignInSubmit} className="btnLogin">send</button>
                    </div>
                </div>
            ):(
                <div>
                    <h1 style={{textAlign:"center",padding:"100px"}}>obt</h1>
                    <div style={{width:"50%",margin:"auto"}}>
                        <input onChange={onchangeCode} value={code} style={{width:"100%"}} type="text" />
                    </div>
                    <div style={{width:"50%",margin:"auto"}}>
                        <button onClick={ocCode} className="btnLogin">send</button>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default PhoneLogin