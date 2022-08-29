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
import { useSelector,useDispatch } from 'react-redux';
import {priceChnge} from "../redux/actions/action";

function Store() {

const price = useSelector(state=>state.salary);
const dispatch=useDispatch();

  const logout = ()=>{
    sessionStorage.setItem('user_id', null);
    sessionStorage.setItem('cartQaunt', 0);
      window.location.href = "/";
    }

  const [pro, setPro] = useState([]);
  const [cart, setCart] = useState([]);
  const [render, setRender] = useState(0);

  const loadProduct = async () => {
    const response = await axios.post("http://localhost/BigTest/testo/API/ShowProduct.php");
    setPro(response.data);
  }

  const cartCalc = async () => {
    const response3 = await axios.post("http://localhost/BigTest/testo/API/cartCalc.php");
    let counter = 0;
    console.log("response3.data.map",response3.data);
    if(response3.data != "empty"){
      response3.data.map((q)=>{
        counter += parseInt(q.quantity)
      })
      sessionStorage.setItem('cartQaunt', counter);
      console.log("response3", counter);
    }else{console.log("Oops! it's empty");}
    setRender(render+1);
    console.log(render);
  }

  const insertToCart = async (id) => {
    if(sessionStorage.getItem('user_id')>0){
    let quan = document.getElementById("quan"+id).value
    const response2 = await axios.post("http://localhost/BigTest/testo/API/inserToCart.php?id="+id+"&quan="+quan+"&user="+sessionStorage.getItem('user_id'));
    cartCalc();
    }else{
      window.location.href = "Login";
    }
  }

  useEffect(() => {
    loadProduct();
    cartCalc();
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
            onChange={(e)=>{dispatch(priceChnge(e.target.value, el.pro_price,document.getElementById('price'+el.pro_id)))}} min={1} name="" id={"quan"+el.pro_id} />
            <label>{el.pro_sub}</label>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input type="text" defaultValue={"$" + el.pro_price} name="" id={"price"+el.pro_id} disabled />
            <a className='addCart'><button onClick={()=>insertToCart(el.pro_id)}>ADD TO CART</button></a>
          </div>
        </div>
      </div>
    })
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
            <Link to={sessionStorage.getItem('user_id')>0?"/Cart":"/Login"}>
              <span 
              style={{ display: sessionStorage.getItem('user_id')>0?"inline":"none"}} className='cart'>
                {sessionStorage.getItem('cartQaunt')}
              </span>
              CART
            </Link>
            {sessionStorage.getItem('user_id')=="null"?<><Link to="/Login">LOGIN</Link><Link to="/Register">REGISTER</Link></>:<><Link to="/Acount">ACOUNT</Link><span onClick={logout} className='out'>LOGOUT</span></>}
            </div>
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