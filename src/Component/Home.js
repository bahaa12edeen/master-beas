import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style/Home.css";
import img1 from "./images/beach15.jpg";
import img2 from "./images/beach17.jpeg";
import img3 from "./images/beach21.jpg";
import img4 from "./images/beach22.jpg";
import img5 from "./images/beach25.jpg";
import img6 from "./images/beach27.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonSnowboarding } from '@fortawesome/free-solid-svg-icons'
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'


function Home() {
    sessionStorage.setItem('user_id', null);

    return (  
        <>
        <>
        <header className='headerA'>
<div className="headparent">
{/* <Router> */}
  <nav>
    <div className="tab">
    <Link to="/">HOME</Link>
    <Link to="/Store">STORE</Link>
    <Link to="/Dive">DIVE</Link>
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
    <Link to="/Cart">CART</Link>
    {sessionStorage.getItem('user_id')!="null"?<><Link to="/Login">LOGIN</Link><Link to="/Register">REGISTER</Link></>:<Link to="/Acount">ACOUNT</Link>}    </div>
  </nav>
  {/* </Router> */}
  <div className="title">
    YOUR ULTIMATE BEACH <br /> SERVICE PROVIDER!
  </div>
</div>
</header>

  <div className="body">
  <div className="category">
      <div className="c1">
        {/* <i className="fa-solid fa-person-snowboarding" /> */}
        <FontAwesomeIcon className='icon' icon={faBoxArchive}></FontAwesomeIcon>
        <h3>Products</h3>
      </div>
      <div className="c2">
        {/* <i className="fa-solid fa-box-archive" /> */}
        <FontAwesomeIcon className='icon' icon={faPersonSnowboarding}></FontAwesomeIcon>
        <h3>Activities</h3>
      </div>
      <div className="c3">
        {/* <i className="fa-solid fa-calendar-check" /> */}
        <FontAwesomeIcon className='icon' icon={faCalendarCheck}></FontAwesomeIcon>
        <h3>Events</h3>
      </div>
    </div>
    <div className="services">
      <h1 style={{ textAlign: "center", color: "white", marginBottom: "35px" }}>Latest Services</h1>
      <div className="service">
        <div className="card">
          <div style={{ textAlign: "center" }}>
            <img src={img1} alt="" />
          </div>
          <div style={{ padding: "10px 20px 30px" }}>
            <div>
              <h3 style={{ textAlign: "center" }}>LEONARDO ART</h3>
            </div>
            <div style={{ textAlign: "center" }}>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <img src={img2} alt="" />
          </div>
          <div style={{ padding: "10px 20px 30px" }}>
            <div>
              <h3 style={{ textAlign: "center" }}>SHORELINE WATERSPORTS</h3>
            </div>
            <div style={{ textAlign: "center" }}>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <img src={img3} alt="" />
          </div>
          <div style={{ padding: "10px 20px 30px" }}>
            <div>
              <h3 style={{ textAlign: "center" }}>CABANA SUPPLIES</h3>
            </div>
            <div style={{ textAlign: "center" }}>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <img src={img4} alt="" />
          </div>
          <div style={{ padding: "10px 20px 30px" }}>
            <div>
              <h3 style={{ textAlign: "center" }}>BEACH RESTAURANT</h3>
            </div>
            <div style={{ textAlign: "center" }}>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          backgroundColor: "#31BCCC",
          color: "white"
        }}
      >
        <img
          src={img5}
          style={{ width: "50%", height: 375 }}
          alt=""
        />
        <div style={{ flex: 2, textAlign: "center" }}>
          <div style={{ marginBottom: "25px" }}>
            <h2>DIVING TRIPS</h2>
          </div>
          <div>
            <button className='trip'>LEARN MORE</button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0065FF",
          color: "white"
        }}
      >
        <img
          src={img6}
          style={{ width: "50%", height: 375 }}
          alt=""
        />
        <div style={{ flex: 2, textAlign: "center" }}>
          <div style={{ marginBottom: "30px" }}>
            <h2>BEACH ACCESSORIES</h2>
          </div>
          <div>
            <button className='trip'>LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

        </>
    );
}

export default Home;