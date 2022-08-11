import React, { useEffect, useState } from 'react';
import "./style/Register.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Register() {

    // useEffect(() => {
    //     document.getElementById('nav').style.display = "none";
    // })

    const nameReg = /^[A-Za-z]+$/;

    const [fname, setFname] = useState('');
    const [fnameD, setFnameD] = useState('');
    const [test1, setTest1] = useState(false);

    const fnameChange = (e) => {
        setFnameD(e.target.value);
        if (e.target.value !== "") {
            if (nameReg.test(e.target.value)) {
                document.getElementById('f_warr').style.display = "none";
                setTest1(true);
            } else {
                setFname("Only alphabet characters");
                document.getElementById('f_warr').style.display = "block";
                setTest1(false);
            }
        } else {
            setFname("Please enter your name");
            document.getElementById('f_warr').style.display = "block";
            setTest1(false);
        }
    }

    const [mname, setMname] = useState('!!');
    const [mnameD, setMnameD] = useState('');
    const [test2, setTest2] = useState(false);

    const mnameChange = (e) => {
        setMnameD(e.target.value);
        if (e.target.value !== "") {
            if (nameReg.test(e.target.value)) {
                document.getElementById('m_warr').style.display = "none";
                setTest2(true);
            } else {
                setMname("Only alphabet characters");
                document.getElementById('m_warr').style.display = "block";
                setTest2(false);
            }
        } else {
            setMname("Please enter your name");
            document.getElementById('m_warr').style.display = "block";
            setTest2(false);
        }
    }

    const [lname, setLname] = useState('!!');
    const [lnameD, setLnameD] = useState('');
    const [test3, setTest3] = useState(false);

    const lnameChange = (e) => {
        setLnameD(e.target.value);
        if (e.target.value !== "") {
            if (nameReg.test(e.target.value)) {
                document.getElementById('l_warr').style.display = "none";
                setTest3(true);
            } else {
                setLname("Only alphabet characters");
                document.getElementById('l_warr').style.display = "block";
                setTest3(false);
            }
        } else {
            setLname("Please enter your name");
            document.getElementById('l_warr').style.display = "block";
            setTest3(false);
        }
    }

    const [yname, setYname] = useState('!!');
    const [ynameD, setYnameD] = useState('!!');
    const [test4, setTest4] = useState(false);

    const ynameChange = (e) => {
        setYnameD(e.target.value);
        if (e.target.value !== "") {
            if (nameReg.test(e.target.value)) {
                document.getElementById('y_warr').style.display = "none";
                setTest4(true);
            } else {
                setYname("Only alphabet characters");
                document.getElementById('y_warr').style.display = "block";
                setTest4(false);
            }
        } else {
            setYname("Please enter your name");
            document.getElementById('y_warr').style.display = "block";
            setTest4(false);
        }
    }

    const [email, setEmail] = useState('');
    const [emailD, setEmailD] = useState('');
    const [test5, setTest5] = useState(false);

    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailChange = (e) => {
        setEmail(e.target.value);
        setEmailD(e.target.value);
        if (emailReg.test(email) && email !== "") {
            document.getElementById('mail_warr').style.display = "none";
            setTest5(true);
        } else {
            document.getElementById('mail_warr').style.display = "block";
            setTest5(false);
        }
    }

    const [cpass, setCpass] = useState('password and confirm password is not matched');
    const [cpassD, setCpassD] = useState('');
    const [test6, setTest6] = useState(false);

    const cpassChange = (e) => {
        setCpassD(e.target.value);
        if (e.target.value == document.getElementById('pass').value) {
            document.getElementById('cpass_warr').style.display = "none";
            setTest6(true);
        } else {
            document.getElementById('cpass_warr').style.display = "block";
            setTest6(false);
        }
    }

    const inputFocus = () => {
        document.getElementById("message").style.display = "block";
    }

    const inputBlur = () => {
        document.getElementById("message").style.display = "none";
    }

    const [passD, setPassD] = useState('');
    const [test7, setTest7] = useState(false);
    const passChange = (e) => {
        setPassD(e.target.value);
        var lowerCaseLetters = /[a-z]/g;
        if (document.getElementById("pass").value.match(lowerCaseLetters)) {
            document.getElementById("letter").classList.remove("invalid");
            document.getElementById("letter").classList.add("valid");
        } else {
            document.getElementById("letter").classList.remove("valid");
            document.getElementById("letter").classList.add("invalid");
        }

        var upperCaseLetters = /[A-Z]/g;
        if (document.getElementById("pass").value.match(upperCaseLetters)) {
            document.getElementById("capital").classList.remove("invalid");
            document.getElementById("capital").classList.add("valid");
        } else {
            document.getElementById("capital").classList.remove("valid");
            document.getElementById("capital").classList.add("invalid");
        }

        var numbers = /[0-9]/g;
        if (document.getElementById("pass").value.match(numbers)) {
            document.getElementById("number").classList.remove("invalid");
            document.getElementById("number").classList.add("valid");
        } else {
            document.getElementById("number").classList.remove("valid");
            document.getElementById("number").classList.add("invalid");
        }

        if (document.getElementById("pass").value.length >= 8) {
            document.getElementById("length").classList.remove("invalid");
            document.getElementById("length").classList.add("valid");
        } else {
            document.getElementById("length").classList.remove("valid");
            document.getElementById("length").classList.add("invalid");
        }
    }

    const [mobileD, setMobileD] = useState('');
    const [test8, setTest8] = useState(false);
    const mobileChange = (e) => {
        setMobileD(e.target.value);
        if (document.getElementById("mobile").value.length >= 10) {
            document.getElementById('mobile_warr').style.display = "none";
            setTest8(true);
        } else {
            document.getElementById('mobile_warr').style.display = "block";
            setTest8(false);
        }
    }

    const [dateD, setDateD] = useState('');
    const [test9, setTest9] = useState(false);
    const dateChange = (e) => {
        setDateD(e.target.value);
        var dob = new Date(e.target.value);
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff);
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        // document.write("Age of the date entered: " + age + " years"); 
        if (age > 18) {
            document.getElementById('date_warr').style.display = "none";
            setTest9(true);
        } else {
            document.getElementById('date_warr').style.display = "block";
            setTest9(false);
        }
    }

    const clickHandel = (e) => {
        console.log("CLICKED");
        if (test1 && test2 && test3 && test4 && test5 && test6 && test8 && test9) {
            console.log("CLICK SUCCESS");
            let fulName = fnameD + ' ' + mnameD + ' ' + lnameD + ' ' + ynameD;
            axios.post('http://localhost/BigTest/testo/API/insertUser.php?name=' + fulName + '&email=' + emailD + '&pass=' + passD + '&mobile=' + mobileD + '&birth=' + dateD)
                .then((data) => {
                })
                .catch((error) => {
                    console.error(error);
                });
            window.location.href = "/login";
        } else {
            console.log("CLICK FALSED");
            document.getElementById('btn_wr').style.display = "block";
        }
    }

    return (
        <>
            <nav className='navR'>
                <div className="tabR">
                    <Link to="/">HOME</Link>
                    <Link to="/Store">STORE</Link>
                    <Link to="/Dive">DIVE</Link>
                </div>
                <div className="logoR">
                    {/* <p style="margin: auto;"> */}
                    <div className="dotR" />
                    {/* </p> */}
                    <div className="txt" style={{ fontSize: 18 }}>
                        <b>Ayla Gem</b>
                    </div>
                    <div className="dashR" />
                    <div className="txt" style={{ fontSize: 15 }}>
                        a way of life
                    </div>
                    {/* <p style="margin: auto;"> */}
                    <div className="dotR" />
                    {/* </p> */}
                </div>
                <div className="tabR">
                <Link to="/Cart">CART</Link>
                {sessionStorage.getItem('user_id')!="null"?<><Link to="/Login">LOGIN</Link><Link to="/Register">REGISTER</Link></>:<Link to="/Acount">ACOUNT</Link>}                </div>
            </nav>

            <div style={{ height: "100vh", display: "flex" }}>
                <div style={{ height: "100vh", width: "55%", display: "inline-block", position: "relative", textAlign: "center" }}>
                    <div style={{ width: "fit-content", margin: "auto", display: "inline-block", textAlign: "left" }}>

                        <div className='form'>
                            <h3 style={{ textAlign: "center", marginTop: "10px" }}>REGISTRATION</h3>
                            <div>
                                <span style={{ display: "inline-block", position: "relative" }}>
                                    <label htmlFor="first">first name</label>
                                    <div >
                                        <input type="text" id='first' onChange={fnameChange} required />
                                    </div>
                                    <span className='warr' id='f_warr'><FontAwesomeIcon icon={faCircleExclamation}>
                                    </FontAwesomeIcon>&nbsp;{fname}
                                    </span>
                                </span>
                                <span style={{ display: "inline-block", marginLeft: "15px", position: "relative" }}>
                                    <label htmlFor="middle">middle name</label>
                                    <div >
                                        <input type="text" id='middle' onChange={mnameChange} required />
                                    </div>
                                    <span className='warr' id='m_warr'><FontAwesomeIcon icon={faCircleExclamation}>
                                    </FontAwesomeIcon>&nbsp;{mname}
                                    </span>
                                </span>
                            </div>
                            <div className='rows'>
                                <span style={{ display: "inline-block", position: "relative" }}>
                                    <label htmlFor="last">last name</label>
                                    <div >
                                        <input type="text" id='last' onChange={lnameChange} required />
                                    </div>
                                    <span className='warr' id='l_warr'><FontAwesomeIcon icon={faCircleExclamation}>
                                    </FontAwesomeIcon>&nbsp;{lname}
                                    </span>
                                </span>
                                <span style={{ display: "inline-block", marginLeft: "15px", position: "relative" }}>
                                    <label htmlFor="family">family name</label>
                                    <div >
                                        <input type="text" id='family' onChange={ynameChange} required />
                                    </div>
                                    <span className='warr' id='y_warr'><FontAwesomeIcon icon={faCircleExclamation}>
                                    </FontAwesomeIcon>&nbsp;{yname}
                                    </span>
                                </span>
                            </div>
                            <div className='rows' style={{ position: "relative" }}>
                                <label htmlFor="email">email</label>
                                <div >
                                    <input type="email" id='email' onChange={emailChange} required />
                                </div>
                                <span className='warr' id='mail_warr'><FontAwesomeIcon icon={faCircleExclamation}>
                                </FontAwesomeIcon>&nbsp;email is not valid
                                </span>
                            </div>
                            <div className='rows' style={{ position: "relative" }}>
                                <label htmlFor="pass">password</label>
                                <div >
                                    <input type="password" id='pass' onChange={passChange} onFocus={inputFocus} onBlur={inputBlur} required />
                                </div>
                                <div id="message">
                                    <h5>Password must contain the following:</h5>
                                    <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
                                    <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
                                    <p id="number" className="invalid">A <b>number</b></p>
                                    <p id="length" className="invalid">Minimum <b>8 characters</b></p>
                                </div>
                            </div>
                            <div className='rows' style={{ position: "relative" }}>
                                <label htmlFor="cpass">confirm password</label>
                                <div >
                                    <input type="password" id='cpass' onChange={cpassChange} required />
                                </div>
                                <span className='warr' id='cpass_warr'><FontAwesomeIcon icon={faCircleExclamation}>
                                </FontAwesomeIcon>&nbsp;{cpass}
                                </span>
                            </div>
                            <div className='rows' style={{ position: "relative" }}>
                                <label htmlFor="mobile">mobile</label>
                                <div >
                                    <input type="tel" id='mobile' onChange={mobileChange} required />
                                </div>
                                <span className='warr' id='mobile_warr'><FontAwesomeIcon icon={faCircleExclamation}>
                                </FontAwesomeIcon>&nbsp;mobile number must be great than 10-dig
                                </span>
                            </div>
                            <div className='rows' style={{ position: "relative" }}>
                                <label htmlFor="birth">birth date</label>
                                <div >
                                    <input type="date" id='birth' onChange={dateChange} required />
                                </div>
                                <span className='warr' id='date_warr'><FontAwesomeIcon icon={faCircleExclamation}>
                                </FontAwesomeIcon>&nbsp;Your age is under the permissible limit
                                </span>
                            </div>
                            <div id='btn_wr' style={{ textAlign: "center", padding: "10px 15px", backgroundColor: "#ff7575", color: "white", borderRadius: "20px", display: "none" }}>
                                <FontAwesomeIcon icon={faCircleExclamation}>
                                </FontAwesomeIcon>&nbsp;You did not complete the registration requirements
                            </div>
                            <button onClick={clickHandel}>Sign Up</button>
                        </div>
                        <div style={{ textAlign: "center", padding: "10px" }}>
                            <span>Already have an account? <a href="/Login" target={"_self"}>Login</a></span>
                        </div>
                    </div>
                </div>
                <div style={{ maxHeight: "100vh", width: "45%", display: "inline-block", backgroundImage: "url(https://media.istockphoto.com/vectors/abstract-modern-geometric-retro-background-vector-id1188381613?k=20&m=1188381613&s=612x612&w=0&h=VMCsct3EYvQiif83MzX2W5DYHLhBzbOqRHEfmHHKtqk=)", height: "100vh", position: "relative" }}>
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -65%)", width: "fit-content" }}>
                        <h1 style={{ width: "fit-content", color: "#414BB2", backgroundColor: "white", fontSize: "3.5rem", margin: "0 auto 20px" }}>Hello, Friend!</h1>
                        <p style={{ fontSize: "2.2rem", color: "#414BB2", backgroundColor: "#ffffff78", width: "80%", margin: "auto" }}>
                            Enter your personal details and start journy with us
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;