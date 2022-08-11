import React, { Component } from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (  
    <footer>
    <div
      style={{
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: 30,
        paddingTop: 60
      }}
    >
      <div style={{ width: "30%" }}>
        <div className="logo" style={{ boxSizing: "content-box" }}>
          {/* <p style="margin: auto;"> */}
          <div className="dot" />
          {/* </p> */}
          <div className="txt" style={{ fontSize: 18, color: "white" }}>
            <b>Ayla Gem</b>
          </div>
          <div className="dash" />
          <div className="txt" style={{ fontSize: 15, color: "white" }}>
            a way of life
          </div>
          {/* <p style="margin: auto;"> */}
          <div className="dot" />
          {/* </p> */}
        </div>
      </div>
      <div style={{ width: "30%" }}>
        <h2>Keep on Touch</h2>
        <p></p>
        <p>Phone: +962-778089189</p>
        <p>Email: bahaa.aldeen.alnabelsi@gmail.com</p>
        <p />
      </div>
      <div>
        <h2>Our Objective</h2>
        <p style={{ width: 300 }}>
          Ayla Gem is interested in providing all services and opportunities in
          one place to have the best experience on the beach
        </p>
      </div>
    </div>
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        color: "white",
        fontFamily: "sans-serif",
        fontSize: 17,
        padding: "30px 0",
        textAlign: "center"
      }}
    >
      Copyright © 2022 Ayla Gem
    </div>
  </footer>

  );
}

export default Footer;