import React, { Component } from 'react';

function Acount() {

  const logout = ()=>{
    sessionStorage.setItem('user_id', null);
      window.location.href = "/";
    }

  return (  
    <>
    <h1>ACOUNT PAGE</h1>
    </>
  );
}

export default Acount;