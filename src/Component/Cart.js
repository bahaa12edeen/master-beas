import React, { useEffect, useState } from "react";
import "./style/Cart.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { priceChnge } from "../redux/actions/action";
import imgo from "./images/carto.jpg";

function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [pro, setPro] = useState([]);
  const [render, setRender] = useState(1);
  const [cartQaunt, setCartQaunt] = useState(
    sessionStorage.getItem("cartQaunt")
  );
  const [total, setTotal] = useState(0);

  // console.log(state.salary.obj, "state");

  const logout = () => {
    sessionStorage.setItem("user_id", null);
    sessionStorage.setItem("cartQaunt", 0);
    setCartQaunt(0);
    window.location.href = "/";
  };

  const update = async (id, quan, oldQuan) => {
    // if (quan > oldQuan) {
    let z = quan - oldQuan;
    let a = parseInt(cartQaunt) + (quan - oldQuan);
    sessionStorage.setItem("cartQaunt", a);
    setCartQaunt(a);

    let i = pro.findIndex((element) => element.pro_id == id);
    pro[i].quantity = quan;

    const response = await axios.post(
      "http://localhost/BigTest/testo/API/proUpdate.php?id=" +
        id +
        "&quan=" +
        quan +
        "&user=" +
        sessionStorage.getItem("user_id")
    );

    totalCalc();
  };

  const removElement = (i, array) => {
    if (i !== -1) {
      array.splice(i, 1);
      setPro(array);
    }
  };

  const deleto = async (index, id, quan) => {
    let a = cartQaunt - parseInt(quan);
    sessionStorage.setItem("cartQaunt", a);
    setCartQaunt(a);

    let i = pro.findIndex((element) => element.pro_id == index);
    console.log(i, "deleto");
    removElement(i, pro);

    console.log(pro, "pro2");
    const response = await axios.post(
      "http://localhost/BigTest/testo/API/proDelete.php?id=" + id
    );

    totalCalc();
  };

  const loadCart = async () => {
    const response = await axios.post(
      "http://localhost/BigTest/testo/API/selectCart.php?id=" +
        sessionStorage.getItem("user_id")
    );
    setPro(response.data);
    console.log("product loaded!");

    if (response.data.length > 0 && response.data != "empty") {
      if (response.data[0].pro_id != undefined && response.data != 0) {
        count = 0;
        response.data.map((item) => {
          count += item.pro_price * item.quantity;
        });
        setTotal(count);
      }
    } else {
      setTotal(0);
      document.getElementById("table").innerHTML =
        '<div style="text-align: center"><img src=' + imgo + "></div>";
    }
  };

  useEffect(() => {
    loadCart();
    console.log(pro, "loara");
  }, []);

  let count = 0;

  const totalCalc = () => {
    if (pro.length > 0 && pro != "empty") {
      if (pro[0].pro_id != undefined && pro != 0) {
        count = 0;
        pro.map((item) => {
          count += item.pro_price * item.quantity;
        });
        setTotal(count);
      }
    } else {
      setTotal(0);
      document.getElementById("table").innerHTML =
        '<div style="text-align: center"><img src=' + imgo + "></div>";
    }
  };

  const ShowProduct = () => {
    if (pro.length > 0 && pro != "empty") {
      // if (Math.random() > 0.5)
      // totalCalc();
      // document.getElementById('total').innerHTML = "Oops! it's empty"
      return pro.map((item) => {
        return (
          <tr key={item.cart_id} id={"tr" + item.cart_id}>
            <td style={{ position: "relative" }}>
              <div
                style={{
                  left: 0,
                  margin: "auto",
                  display: "inline-flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: 200,
                }}
              >
                <div
                  className="x"
                  onClick={(e) => {
                    deleto(item.pro_id, item.cart_id, item.quantity);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    style={{
                      position: "absolute",
                      left: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  ></FontAwesomeIcon>
                </div>
                <img src={item.pro_img} width="50px" alt="" />
                <span style={{ marginLeft: "15px" }}>{item.pro_name}</span>
              </div>
            </td>
            <td>${item.pro_price}</td>
            <td>
              <input
                type="number"
                className="num"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) => {
                  // setUp(1);
                  // total();
                  dispatch(
                    priceChnge(
                      e.target.value,
                      item.pro_price,
                      document.getElementById("price" + item.pro_id)
                    )
                  );
                  update(item.pro_id, e.target.value, item.quantity);
                }}
                name=""
                id={"num" + item.pro_id}
              />
            </td>
            <td id={"price" + item.pro_id}>
              {"$" + item.pro_price * item.quantity}{" "}
            </td>
          </tr>
        );
      });
    } else {
      console.log("Loading...");
    }
  };

  let quantity, pro_id;

  const move = () => {
    pro_id = pro.map((el) => {
      return el.pro_id;
    });

    quantity = pro.map((el) => {
      return el.quantity;
    });
    /**************************** */
    // pro_id = "";
    // pro.map((el) => {
    //   pro_id += el.pro_id;
    //   if (el.cart_id != pro[pro.length - 1].cart_id)
    //     pro_id += ", ";
    // });

    // quantity = "";
    // pro.map((el) => {
    //   quantity += el.pro_id;
    //   if (el.cart_id != pro[pro.length - 1].cart_id)
    //     quantity += ", ";
    // });

    // bill = "("+sessionStorage.getItem("user_id")+", "+total +")";
    // order = "";
    // pro.map((el) => {
    //   order += "(";
    //   order +=
    //     el.pro_id +
    //     ", " +
    //     el.quantity;
    //   order += ")";
    //   if (el.cart_id != pro[pro.length - 1].cart_id) order += ", ";
    // });
  };

  const checkoutHandel = async () => {
    // if (pro.length > 0 && pro != "empty"){
    //   if (pro[0].pro_id != undefined && pro != 0) {
    //     console.log("checkoutHandel");
    //     move();
    //     const response = await axios.post(
    //       "http://localhost/BigTest/testo/API/insetBill.php?pro_id="+pro_id+"&quan="+quantity+"&user_id="+sessionStorage.getItem("user_id")+"&total="+total
    //     );
    //     window.location.href = "/Check";
    //   }else{console.log("Wrong1...");}
    // }else{console.log("Wrong2...");}

    if (pro.length > 0 && pro != "empty")
      if (pro[0].pro_id != undefined && pro != 0) move();
    console.log(pro_id, "pro_id!");
  };

  return (
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
          <Link to={sessionStorage.getItem("user_id") > 0 ? "/Cart" : "/Login"}>
            <span className="cart">{cartQaunt}</span>
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
        <h1 className="bhead">CART</h1>
        <div className="table" id="table">
          <div style={{ margin: "auto" }}>
            <table>
              <tbody id="tbody">
                <tr>
                  <th>PRODUCTS</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>SUBTOTAL</th>
                </tr>
                {ShowProduct()}
              </tbody>
            </table>
            <div className="total" id="romo">
              <h4>CART TOTAL: ${total}</h4>
              <form method="post">
                {/* <div href={"http://localhost/BigTest/testo/API/insetBill.php?user_id=9&total="+pro_id} style={{ textDecoration: "none" }}> */}
                <div
                  className="change"
                  onClick={() => {
                    checkoutHandel();
                  }}
                >
                  Checkout
                </div>
                {/* </div> */}
              </form>
              <a
                onClick={() => {
                  if (pro.length > 0 && pro != "empty")
                  if (pro[0].pro_id != undefined && pro != 0) move();
                  
                  window.location.href =
                    "http://localhost/BigTest/testo/API/insetBill.php?pro_id=" +
                    pro_id +
                    "&quan=" +
                    quantity +
                    "&user_id=" +
                    sessionStorage.getItem("user_id") +
                    "&total=" +
                    total;
                }}
              >
                TEST
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
