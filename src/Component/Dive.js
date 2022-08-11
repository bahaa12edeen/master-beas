import React, { Component } from 'react';
import "./style/Dive.css";
import img1 from "./images/p1.jpg";
import img2 from "./images/p2.jpg";
import img3 from "./images/p3.jpg";
import img4 from "./images/p4.jpg";
import img5 from "./images/s1.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Dive() {
  return (
    <>

      <header className='headerC'>
        <div className="headparentD">
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
            {sessionStorage.getItem('user_id')!="null"?<><Link to="/Login">LOGIN</Link><Link to="/Register">REGISTER</Link></>:<Link to="/Acount">ACOUNT</Link>}            </div>
          </nav>

          <div className="title">DIVING&nbsp;TRIPS</div>
          <div className="arr">
            <i className="fa-solid fa-angles-down down" />
          </div>
          <div className="formd">
            <div className="i_coni">
              <label htmlFor="">LOCATION</label>
              <input type="text" placeholder="abc see" />
            </div>
            <div className="i_coni">
              <label htmlFor="">DATE</label>
              <input type="text" placeholder="yyyy - mm - dd" />
            </div>
            <button className="d_butt">FIND</button>
          </div>
          <div className="arr">
            <i className="fa-solid fa-angles-down down" />
          </div>
        </div>
      </header>
      <div className="body">
        <div className="location">
          <div className="item1">
            <img src={img1} className="imgy" alt="" />
            <div className="shadow">
              <span className="loca">South Beach</span>
            </div>
          </div>
          <div className="item2">
            <img src={img2} className="imgy" alt="" />
            <div className="shadow">
              <span className="loca">Castle Beach</span>
            </div>
          </div>
          <div className="item3">
            <img src={img3} className="imgy" alt="" />
            <div className="shadow">
              <span className="loca">Marine Beach</span>
            </div>
          </div>
          <div className="item4">
            <img src={img4} className="imgy" alt="" />
            <div className="shadow">
              <span className="loca">Marine Park</span>
            </div>
          </div>
          {/* <div class="item"></div>
      <div class="item"></div> */}
        </div>
        <div className="find">
          <img
            src={img5}
            style={{ height: 750, width: "100%" }}
            alt=""
          />
          <div className="shadow1">Find the Best Experience</div>
        </div>
      </div>
    </>
  );
}

export default Dive;