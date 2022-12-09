import React, { useState } from "react";
import "./OtpSend.css";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useCallback } from "react";
import { async } from "@firebase/util";

export default function OtpSend({ setUserLogin }) {
  const [number, setNumber] = useState("");
  const [confoObj, setConfoObj] = useState("");
  const [otp, setOtp] = useState("");
  const [sendOptt, setsendOtpt] = useState(false);
  const [Error,setError]=useState("")
  const auth = getAuth();

  const getOtp = async (e) => {
    e.preventDefault();
    if (number.trim() !== "") {
      try {
        const response = await setUprecaptcha(number);
        console.log(response);
        setConfoObj(response);
        setsendOtpt(true);
        setError("")
      } catch (err) {
        console.log(err.message);
        setError(err.message)
        
      }
    }
  };

  function setUprecaptcha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  const OtpVeryfy = async (e) => {
    if (number.trim() !== "") {
      e.preventDefault();
      confoObj
        .confirm(otp)
        .then((result) => {
          const user = result.user;
          if (user) {
              setUserLogin(true);
              setError("")
          }
          // ...
        })
        .catch((error) => {
          console.log(error);
          setError(error.message)
        });
    }
  };

  return (
    <div className="app">
      <div className="form">
        <form onSubmit={getOtp}>
          <div
            className="input-container"
          >
            <label>Enter Mobile Number</label>
            <input
              type="number"
              name="uname"
              required
              onChange={(e) => setNumber("+91" + e.target.value)}
            />
            {Error}
            <div className="button-container">
              <input type="submit" value="Send OTP" />
            </div>
            <div id="recaptcha-container"></div>
          </div>
          </form>
          <form onSubmit={OtpVeryfy}>
          <div
            className="input-container"
            style={{ display: sendOptt ? "block" : "none" }}
          >
            <label>Veryfy OTP</label>
            <input
              type="password"
              name="pass"
              required
              onChange={(e) => setOtp(e.target.value)}
            />
            {Error}
            <div className="button-container">
              <input type="submit" value="Veryfy"  />
            </div>
          </div>
          </form>
      </div>
      
    </div>
  );
}
