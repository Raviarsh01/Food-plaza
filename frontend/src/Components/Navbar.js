import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutAction } from "../Redux/Actions/AuthActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { cartData } = useSelector((state) => state.cartReducer);
  const number = cartData?.length;
  const [login, setlogin] = useState(false);
  const [role, setRole] = useState(1);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      setlogin(true);
    }
    const role = localStorage.getItem("Role");
    if (role == 0) {
      setRole(0);
    } else if (role == 1) {
      setRole(1);
    }
  }, []);

  const handleLogout = async () => {
    await dispatch(LogoutAction());
    localStorage.clear();
    setlogin(false);
    navigate("/");
  };
  return (
    <div className="navbar">
      <div>
        <img className="navbar-logo" src="/Images/logo.png" alt="logo image" />
      </div>
      <div className="navbar-sec2">
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "navbar-sec2-Link nav-sec2Color"
              : "navbar-sec2-Link"
          }
        >
          Home
        </Link>
        <Link
          to="/menu"
          className={
            location.pathname === "/menu"
              ? "navbar-sec2-Link nav-sec2Color"
              : "navbar-sec2-Link"
          }
        >
          Menu
        </Link>
        <Link
          to="/about"
          className={
            location.pathname === "/about"
              ? "navbar-sec2-Link nav-sec2Color"
              : "navbar-sec2-Link"
          }
        >
          About
        </Link>
      </div>
      <div className="navbar-section3">
        <Link to="/cart" className="cart">
          <i className="fa-light fa-cart-shopping cart-img"></i>
          <span className="cart-numbers">{number}</span>
        </Link>
        {login ? (
          <>
            {role === 0 && (
              <Link className="home-button" to="/admin">
                Admin
              </Link>
            )}
            {role === 1 && (
              <Link className="home-button" to="/profile">
                Profile
              </Link>
            )}

            <button
              className="home-button home-button-white"
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
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
