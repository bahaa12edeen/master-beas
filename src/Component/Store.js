import React, { useEffect, useState } from 'react';
import "./style/Store.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
// import img1 from "./images/acc1.jpg"
// import img2 from "./images/acc4.jpg"
// import img3 from "./images/acc3.jpg"
// import img4 from "./images/acc2.jpg"
import axios from "axios";

function Store() {

  const [pro, setPro] = useState([]);

  const loadProduct = async () => {
    const response = await axios.post("http://localhost/BigTest/testo/API/ShowProduct.php");
    setPro(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    loadProduct();
  }, [])

  const ShowProduct = () => {
    return pro.map(el => {
      return <div className="product" key={el.pro_id}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flex: 2,
            paddingRight: 100
          }}
        >
          <img
            src={el.pro_img}
            title="give"
            height="300px"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
            alt=""
          />
        </div>
        <div className="detail" style={{ flex: 2 }}>
          <div className="name">{el.pro_name}</div>
          <div className="desc">{el.pro_view}</div>
          <div>
            <input type="number" defaultValue={1}
            onChange={e=>changeHandle(document.getElementById('price'+el.pro_id), e.target.value, el.pro_price)} min={1} name="" id="" />
            <label htmlFor="">{el.pro_sub}</label>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input type="text" value={"$" + el.pro_price} name="" id={"price"+el.pro_id} disabled />
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    })
  }

  const changeHandle = (el, num, val)=>{
    el.value = "$"+(num* val);
    console.log("changrd!!", el);

  }

  return (
    <>
      <header className='headerS'>
        <div className="headparentS">
          <nav>
            <div className="tab">
              <Link to="/">HOME</Link>
              <Link to="/Store">STORE</Link>
              <Link to="/Dive">DIVE</Link>
            </div>
            <div className="logo">
              <div className="dot" />
              <div className="txt" style={{ fontSize: 18 }}>
                <b>Ayla Gem</b>
              </div>
              <div className="dash" />
              <div className="txt" style={{ fontSize: 15 }}>
                a way of life
              </div>
              <div className="dot" />
            </div>
            <div className="tab">
            <Link to="/Cart">CART</Link>
            {sessionStorage.getItem('user_id')!="null"?<><Link to="/Login">LOGIN</Link><Link to="/Register">REGISTER</Link></>:<Link to="/Acount">ACOUNT</Link>}            </div>
          </nav>
          <div className="title">BEACH&nbsp;ACCESSORIES</div>
          <div className="arr">
            <FontAwesomeIcon className='icon' icon={faAnglesDown}></FontAwesomeIcon>
          </div>
        </div>
      </header>
      <div className='list'
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "auto"
        }}
      >
        {ShowProduct()}
      </div>
    </>
  );
}

export default Store;