import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // useEffect(() => {
    //     document.getElementById('nav').style.display = "none";
    // })

    const changeHandel1 = (value) => {
        setEmail(value);
    }

    const changeHandel2 = (value) => {
        setPass(value);
    }

    const clickHandel = () => {
        axios.post('http://localhost/BigTest/testo/API/checkUser.php?email=' + email + '&pass=' + pass)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    console.log(res.data);
                    sessionStorage.setItem('user_id', res.data);
                    window.location.href = "/";
                } else {
                    document.getElementById('btn_wr').style.display = "block";
                }
            })
            .catch((error) => {
                console.error(error);
            });
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
                    {console.log(sessionStorage.getItem('user_id')!="null")}
                    {sessionStorage.getItem('user_id')!="null"?<><Link to="/Login">LOGIN</Link><Link to="/Register">REGISTER</Link></>:<Link to="/Acount">ACOUNT</Link>}
                </div>
            </nav>
            <div style={{ height: "100vh" }}>
                <div style={{ maxHeight: "100vh", width: "45%", display: "inline-block", backgroundImage: "url(https://media.istockphoto.com/vectors/abstract-modern-geometric-retro-background-vector-id1188381613?k=20&m=1188381613&s=612x612&w=0&h=VMCsct3EYvQiif83MzX2W5DYHLhBzbOqRHEfmHHKtqk=)", height: "100vh", position: "relative" }}>
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -65%)", width: "fit-content" }}>
                        <h1 style={{ width: "fit-content", color: "#414BB2", backgroundColor: "white", fontSize: "3.5rem", margin: "0 auto 20px" }}>Welcome Back!</h1>
                        <p style={{ fontSize: "2.2rem", color: "#414BB2", backgroundColor: "#ffffff78", width: "80%", margin: "auto" }}>
                            To keep connected with us please login with your personal info
                        </p>
                    </div>
                </div>

                <div style={{ height: "100vh", width: "55%", display: "inline-block", position: "relative" }}>
                    <div style={{ width: "50%", margin: "auto", display: "inline-block", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <div className='form'>
                            <h3 style={{ textAlign: "center", marginTop: 0 }}>LOGIN</h3>
                            <div className='rows'>
                                <label htmlFor="email">email</label>
                                <div >
                                    <input type="email" onChange={(e) => changeHandel1(e.target.value)} id='email' />
                                </div>
                            </div>
                            <div className='rows'>
                                <label htmlFor="pass">password</label>
                                <div >
                                    <input type="password" onChange={(e) => changeHandel2(e.target.value)} id='pass' />
                                </div>
                            </div>
                            <div id='btn_wr' style={{ textAlign: "center", padding: "10px 15px", backgroundColor: "#ff7575", color: "white", borderRadius: "20px", marginTop: "13px", display: "none" }}>
                                <FontAwesomeIcon icon={faCircleExclamation}>
                                </FontAwesomeIcon>&nbsp;email or password not valid
                            </div>
                            <button id='btn' className='login' style={{ display: "block", marginTop: "13px" }} onClick={clickHandel}>LOGIN</button>
                        </div>
                        <div style={{ textAlign: "center", padding: "10px" }}>
                            <span>Don't have an account? <a href="/Register">Register</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;