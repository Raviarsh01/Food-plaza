import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import {FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const data = useSelector((state) => state.root3);
  let number=data.length;
  return (
    <header className="header">
     <img className='logo' src="/Images/Fresh box-logos_white.png" alt="Logo" />
    <nav className="menu">
      <ul>
       <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About </Link></li>
      </ul>
    </nav>
    <div className="cart-login">
    <Link to="/cart" className="cart"><FaShoppingCart/><span class="cart-numbers">{number}</span></Link>
    <Link to="/login" className="login">Login</Link>
    </div>
  </header>
  )
}

export default Navbar