import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.root3);
  let number = data.length;
  const [login, setlogin] = useState(true);
  const [tab, setTab] = useState(1);
  const handleTab = (num) => {
    setTab(num);
  };
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setlogin(true);
    }
  });
  const handleLogout = () => {
    localStorage.clear();
    setlogin(false);
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div>
        <img
          className="navbar-logo"
          // src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          src="Images\logo.png"
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
        {login ? (
          <>
            <Link className="home-button" to="">
              Profile
            </Link>
            <button
              className="home-button home-button-white"
              onClick={handleLogout}
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link className="home-button" to="/login">
              Log In
            </Link>
            <Link className="home-button home-button-white" to="/signup">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
