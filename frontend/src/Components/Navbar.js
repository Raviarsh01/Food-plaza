import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutAction } from "../Redux/Actions/AuthActions";
import { toast } from "react-toastify";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { cartData } = useSelector((state) => state.cartReducer);
  const { user } = useSelector((state) => state.LoginReducer);
  const number = cartData?.length;
  const [login, setlogin] = useState(false);
  console.log("loginlogin", login);

  useEffect(() => {
    if (user?.userData) {
      setlogin(true);
    }
  }, [user]);

  const handleLogout = async () => {
    await dispatch(LogoutAction());
    setlogin(false);
    toast.success("Logout success", {
      autoClose: 1500,
    });
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div>
        <Link to="/">
          {" "}
          <img
            className="navbar-logo"
            src="/Images/logo.png"
            alt="logo image"
          />
        </Link>
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
          <FaCartShopping className="cart-img" />
          <span className="cart-numbers">{number}</span>
        </Link>
        {login ? (
          <>
            {/* <img src="#" alt="profile" /> */}
            <button
              className="home-button home-button-white"
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              Log out
            </button>
          </>
        ) : (
          <Link className="home-button" to="/login">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
