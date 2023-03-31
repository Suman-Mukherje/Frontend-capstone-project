//import logo from './logo.svg';
//import './App.css';
import React from "react";
import './style.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Review />
      <Contact />
      <Blog />
      <Footer />

    </>
  );
}

export default App;
