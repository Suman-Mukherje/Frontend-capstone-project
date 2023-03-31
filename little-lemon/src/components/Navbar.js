import React, { useRef } from "react";
import Logo from "../assets/Lit.png";
//import { cart } from "../Data.js";

const Navbar = () => {
  const navbarRef = useRef();
  
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    
  };

  

  return (
    <>
      <header className="header">
        <a href="#logo" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#review">Review</a>
          <a href="#contact">Reservation</a>
          <a href="#blogs">Blogs</a>
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
