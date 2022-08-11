import React, { Component } from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (  
//     <nav id='nav'>
//     <Link to="/">Home</Link>
// <span> | </span>
//     <Link to="/Login">Login</Link>
// <span> | </span>
//     <Link to="/Register">Register</Link>
// <span> | </span>
//     <Link to="/Add">Add</Link>
// <span> | </span>
//     <Link to="/Update">Update</Link>
//   </nav>

<header>
<div className="headparent">
  <nav>
    <div className="tab">
    <Link to="/">HOME</Link>
    <Link to="/Store">STORE</Link>
    </div>
    <div className="logo">
      {/* <p style="margin: auto;"> */}
      <div className="dot" />
      {/* </p> */}
      <div className="txt" style={{ fontSize: 18 }}>
        <b>Ayla Gem</b>
      </div>
      <div className="dash" />
      <div className="txt" style={{ fontSize: 15 }}>
        a way of life
      </div>
      {/* <p style="margin: auto;"> */}
      <div className="dot" />
      {/* </p> */}
    </div>
    <div className="tab">
    <Link to="/Login">Login</Link>
    <Link to="/Register">Register</Link>
    </div>
  </nav>
  <div className="title">
    YOUR ULTIMATE BEACH <br /> SERVICE PROVIDER!
  </div>
</div>
</header>
  );
}

export default Nav;