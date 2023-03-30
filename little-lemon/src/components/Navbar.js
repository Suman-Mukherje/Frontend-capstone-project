import React, { useRef } from "react";
import Logo from "../assets/Lit.png";
//import { cart } from "../Data.js";

const Navbar = () => {
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  

  return (
    <>
      <header className="header">
        <a href="#logo" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </nav>
        <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        
        
      </header>
    </>
  );
};

export default Navbar;
