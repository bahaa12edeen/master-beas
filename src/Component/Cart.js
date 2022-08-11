import React, { Component } from 'react';
import "./style/Cart.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Cart() {
  return (  
    <div className='Cbody'>
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
                    {sessionStorage.getItem('user_id')!="null"?<><Link to="/Login">LOGIN</Link><Link to="/Register">REGISTER</Link></>:<><Link to="/Acount">ACOUNT</Link><Link to="/Logout">LOGOUT</Link></>}
                </div>
            </nav>
    <div className="board">
  <h1 className="bhead">CART</h1>
  <div className="table">
    <div style={{ margin: "auto" }}>
      <table>
        <tbody>
          <tr>
            <th>PRODUCTS</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
          <form action="" method="get" />
          <tr>
            <td style={{ position: "relative" }}>
              <div
                style={{
                  left: 0,
                  margin: "auto",
                  display: "inline-flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: 200
                }}
              >
                <a href="">
                <FontAwesomeIcon icon={faCircleXmark} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)" }}>
                </FontAwesomeIcon>
                </a>
                <img
                  src="images\acc4.jpg"
                  width="50px"
                  alt=""
                />
                <span style={{ marginLeft: "15px" }}>Beach Chairs</span>
              </div>
            </td>
            <td>$24.99</td>
            <td>
              <input type="hidden" defaultValue={13} name="product_id0" />
              <input
                type="number"
                className="num"
                min={1}
                defaultValue={1}
                name="quan0"
                id=""
              />
            </td>
            <td>$24.99</td>
          </tr>
        </tbody>
      </table>
      <div className="total">
        <h4>CART TOTAL: $32.54</h4>
        <form method="post">
          <div
            type="submit"
            name="checkout"
            defaultValue="Checkout"
            className="change">
              Checkout
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Cart;