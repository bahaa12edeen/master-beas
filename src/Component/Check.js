import React, { useEffect, useState } from "react";
import "./style/Cart.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { priceChnge } from "../redux/actions/action";
import "./style/Check.css";

function Check() {
  const [pro, setPro] = useState([]);

  const logout = () => {
    sessionStorage.setItem("user_id", null);
    sessionStorage.setItem("cartQaunt", 0);
    window.location.href = "/";
  };

  const loadCart = async () => {
    const response = await axios.post(
      "http://localhost/BigTest/testo/API/selectCart.php?id=" +
        sessionStorage.getItem("user_id")
    );
    setPro(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);
  return (
    <>
      <div className="Cbody">
        <nav className="navR">
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
            <Link
              to={sessionStorage.getItem("user_id") > 0 ? "/Cart" : "/Login"}
            >
              <span className="cart">
                {sessionStorage.getItem("cartQaunt")}
              </span>
              CART
            </Link>
            {sessionStorage.getItem("user_id") == "null" ? (
              <>
                <Link to="/Login">LOGIN</Link>
                <Link to="/Register">REGISTER</Link>
              </>
            ) : (
              <>
                <Link to="/Acount">ACOUNT</Link>
                <span onClick={logout} className="out">
                  LOGOUT
                </span>
              </>
            )}
          </div>
        </nav>
        <div className="board">
          {/* <form action="" method="GET"> */}
          <h2 className="bhead">CheckOut</h2>
          <div className="parent">
            <div className="side1">
              <div className="name">
                <div style={{ width: "45%" }}>
                  <label style={{ fontWeight: "bold" }} htmlFor="">
                    First name
                  </label>
                  <br />
                  <input
                    type="text"
                    defaultValue="roa"
                    name="first"
                    className="first"
                    id="first"
                    required=""
                  />
                </div>
                <div style={{ width: "45%" }}>
                  <label style={{ fontWeight: "bold" }} htmlFor="">
                    Last name
                  </label>
                  <br />
                  <input
                    type="text"
                    defaultValue="mohammad"
                    className="last"
                    id="last"
                    required=""
                  />
                </div>
              </div>
              <div className="numC">
                <label style={{ fontWeight: "bold" }} htmlFor="">
                  Phone
                </label>
                <br />
                <input
                  type="phone"
                  defaultValue={7889895}
                  className="phone"
                  id="phone"
                  required=""
                />
              </div>
              <div className="mail">
                <label style={{ fontWeight: "bold" }} htmlFor="">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  defaultValue="roa@gmail.com"
                  className="email"
                  id="email"
                  required=""
                />
              </div>
              <div className="cou">
                <label style={{ fontWeight: "bold" }} htmlFor="">
                  Country
                </label>
                <br />
                <input
                  type="text"
                  defaultValue="Jordan"
                  className="country"
                  id="country"
                  required=""
                />
              </div>
              <div className="town">
                <label style={{ fontWeight: "bold" }} htmlFor="">
                  City
                </label>
                <br />
                <input
                  type="text"
                  defaultValue="Aqaba"
                  className="city"
                  id="city"
                  required=""
                />
              </div>
              <div className="tall">
                <label style={{ fontWeight: "bold" }} htmlFor="">
                  Street
                </label>
                <br />
                <input
                  type="text"
                  defaultValue="Al-kwait Street"
                  className="street"
                  id="street"
                  required=""
                />
              </div>
            </div>
            <div className="side2">
              <h3 style={{ textAlign: "center" }}>YOUR ORDER</h3>
              <table>
                <tbody>
                  <tr>
                    <th className="th" style={{ textAlign: "left" }}>
                      Product
                    </th>
                    <th className="th">Quantity</th>
                    <th className="th">Price</th>
                    <th className="th" style={{ textAlign: "right" }}>
                      Subtotal
                    </th>
                  </tr>
                  <tr>
                    <td className="td">Ariana Grande Ari</td>
                    <td className="td" style={{ textAlign: "center" }}>
                      3
                    </td>
                    <td
                      className="td"
                      style={{ textAlign: "center", width: "30%" }}
                    >
                      $24.99
                    </td>
                    <td className="td" style={{ textAlign: "right" }}>
                      $74.97
                    </td>
                  </tr>
                  <tr>
                    <td className="td">Kérastase Elixir Ultime</td>
                    <td className="td" style={{ textAlign: "center" }}>
                      2
                    </td>
                    <td
                      className="td"
                      style={{ textAlign: "center", width: "30%" }}
                    >
                      $7.55
                    </td>
                    <td className="td" style={{ textAlign: "right" }}>
                      $15.1
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="th"
                      style={{ textAlign: "left" }}
                      colSpan={2}
                    >
                      Total:
                    </th>
                    <th
                      className="th"
                      style={{ textAlign: "right" }}
                      colSpan={2}
                    >
                      $90.07
                    </th>
                  </tr>
                </tbody>
              </table>
              <div>
                <div
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  payment method:{" "}
                </div>
                <div className="cash">
                  <input
                    type="checkbox"
                    name="cash"
                    id="cash"
                    defaultChecked="checked"
                    required=""
                  />
                  <label htmlFor="cash">cash on delivery</label>
                </div>
                <button className="submit">Place Order</button>
                {/* <input
                    type="submit"
                    name="submit"
                    Value="Place Order"
                    className="submit"
                    id="submit"
                  /> */}
              </div>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
}

export default Check;
{
  /* 

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

*/
}
