import React, { useState } from "react";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// import "./LoginPhone.css";

const LoginPhoneNew = () => {
  const navigate = useNavigate();
  // Inputs
  const [mynumber, setnumber] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  });
  const [otp, setotp] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  console.log(mynumber);

  // Sent OTP
  const signin = () => {
    console.log(mynumber);
    let finalNum = "+91";
    Object.entries(mynumber).map((entry) => (finalNum += entry[1]));
    console.log(finalNum);
    // setshow(true);
    // return;

    if (finalNum === "" || finalNum.length < 10) return;

    let verify = new RecaptchaVerifier("recaptcha-container", {}, getAuth());
    signInWithPhoneNumber(getAuth(), finalNum, verify)
      .then((result) => {
        setfinal(result);
        alert("code sent");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  const ValidateOtp = () => {
    console.log(otp);
    let finalOtp = "";
    Object.entries(otp).map((entry) => (finalOtp += entry[1]));
    console.log(finalOtp);
    if (finalOtp === null || final === null) return;
    final
      .confirm(finalOtp)
      .then((result) => {
        console.log(result);
        console.log(result.user.uid);
        getDoc(doc(collection(getFirestore(), "user"), result.user.uid)).then(
          (doc) => {
            if (!doc.exists()) {
              setDoc(doc(collection(getFirestore(), "user"), result.user.uid), {
                phoneNumber: result.user.phoneNumber,
                uid: result.user.uid,
              }).then(() => {
                navigate("/profile");
              });
              console.log("login successful");
            }
          }
        );
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  function handleNumberChange(e) {
    // e.preventDefault();
    // console.log(e.target);
    // let index = parseInt(e.target.name);
    // let newNumber = mynumber;
    // newNumber[index] = e.target.value;
    // setnumber(newNumber);
    // console.log("here", { mynumber });
    const key = e.target.name;
    const value = e.target.value;
    const temp = { ...mynumber };
    temp[key] = value;
    setnumber(temp);
  }

  function handleOtpChange(e) {
    console.log(e.target.name, e.target.value);
    const key = e.target.name;
    const value = e.target.value;
    const temp = { ...otp };
    console.log(temp);
    temp[key] = value;
    setotp(temp);
  }

  return (
    <>
      <div className="container">
        <div className="content">
          <p className="title1">
            Start your journey of finding the right PG and
          </p>
          <p className="title2">roommate with just a few clicks</p>
          <p className="subtitle1">
            Join the community of users finding their perfect
          </p>
          <p className="subtitle2">PG and rommate match</p>
          {!show && (
            <>
              <p className="middle">Enter your mobile number</p>
              <div className="numberline">
                {Object.keys(mynumber).map((val, index) => {
                  return (
                    <input
                      key={index}
                      type="text"
                      className="digit"
                      name={val}
                      onChange={handleNumberChange}
                      value={mynumber[val]}
                    ></input>
                  );
                })}
              </div>
              <div id="recaptcha-container"></div>
              <div className="btncontainer">
                <button className="verify" onClick={signin}>
                  SEND OTP
                </button>
              </div>
            </>
          )}
          {show && (
            <>
              <p className="middle">Enter your OTP</p>
              <div className="numberline">
                {Object.keys(otp).map((val, index) => {
                  return (
                    <input
                      key={index}
                      type="text"
                      className="digit"
                      name={val}
                      onChange={(e) => handleOtpChange(e)}
                      value={otp[val]}
                    ></input>
                  );
                })}
              </div>
              <div className="btncontainer">
                <button className="verify" type="submit" onClick={ValidateOtp}>
                  VERIFY
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPhoneNew;
