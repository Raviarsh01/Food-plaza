import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import {FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const data = useSelector((state) => state.root3);
  let number=data.length;
  const [tab,setTab] = useState(1)
  const handleTab= (num) =>{
    setTab(num)
  }

  return (
    //   <header className="header">
    //    <img className='logo' src="/Images/Fresh box-logos_white.png" alt="Logo" />
    //   <nav className="menu">
    //     <ul>
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/menu">Menu</Link></li>
    //       <li><Link to="/about">About </Link></li>
    //     </ul>
    //   </nav>
    //   <div className="cart-login">
    //   <Link to="/cart" className="cart"><FaShoppingCart/><span class="cart-numbers">{number}</span></Link>
    //   <Link to="/login" className="login">Login</Link>
    //   </div>
    // </header>
    <div className="navbar">
      <div>
        <img
          className="navbar-logo"
          src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="logo image"
        />
      </div>
      <div className="navbar-sec2">
        <Link
          to="/"
          className={
            tab === 1 ? "navbar-sec2-Link nav-sec2Color" : "navbar-sec2-Link"
          }
          onClick={() => handleTab(1)}
        >
          Home
        </Link>
        <Link
          to="/menu"
          className={
            tab === 2 ? "navbar-sec2-Link nav-sec2Color" : "navbar-sec2-Link"
          }
          onClick={() => handleTab(2)}
        >
          Menu
        </Link>
        {/* <Link to="">Blog</Link> */}
        <Link
          to="/about"
          className={
            tab === 3 ? "navbar-sec2-Link nav-sec2Color" : "navbar-sec2-Link"
          }
          onClick={() => handleTab(3)}
        >
          About
        </Link>
      </div>
      <div className="navbar-section3">
        <Link to="/cart" className="cart">
          <FaShoppingCart />
          <span class="cart-numbers">{number}</span>
        </Link>
        <Link className="home-button" to="/login">
          Log In
        </Link>
        <Link className="home-button home-button-white" to="/">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Navbar