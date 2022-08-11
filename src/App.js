import React from 'react';
import "./App.css";
// import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import Add from './Component/Add';
import Update from './Component/Update';
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import Store from "./Component/Store";
import Dive from "./Component/Dive";
import Cart from "./Component/Cart";

function App() {
  return (
    <div>
      <Router>
      {/* <Nav /> */}

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/Add' element={<Add />}></Route>
          <Route path='/Update' element={<Update />}></Route>
          <Route path='/Store' element={<Store />}></Route>
          <Route path='/Dive' element={<Dive />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
          <Route path='/Logout' element={<Home id={null} />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;