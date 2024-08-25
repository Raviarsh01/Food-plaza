import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutAction } from "../Redux/Actions/AuthActions";
import { toast } from "react-toastify";
import { FaCartShopping } from "react-icons/fa6";
import Button from "../Components/Button";
import { IoIosRestaurant } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { cartData } = useSelector((state) => state.cartReducer);
  const { user } = useSelector((state) => state.LoginReducer);
  const number = cartData?.length;
  const [login, setlogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [onHover, setOnHover] = useState(false);

  useEffect(() => {
    if (user?.userData) {
      setlogin(true);
    }
  }, [user]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    // console.log("hanlde click", event.target);
    // const sidebarElement = document.getElementById("mobileMenu");
    // console.log("sidebarElement", sidebarElement);
    // if (sidebarElement !== event.target) {
    //   setMenuOpen(false);
    // }
  };

  const handleLogout = async () => {
    await dispatch(LogoutAction());
    setlogin(false);
    setOnHover((prev) => !prev);
    toast.success("Logout success", {
      autoClose: 1500,
    });
    navigate("/login");
  };

  const links = [
    { value: "Home", link: "/" },
    { value: "About", link: "/about" },
    { value: "Menu", link: "/menu" },
    { value: "Contact us", link: "/contact" },
  ];
  return (
    <div className="flex items-center bg-white w-full h-24 fixed top-0 z-10 shadow">
      <div className="main-container flex items-center justify-between w-full">
        <div>
          <Link
            className="flex gap-1 items-center text-2xl font-semibold text-primary"
            to="/"
          >
            <IoIosRestaurant className="font-bold text-4xl" />
            <h2 className="text-primary">
              Food <span className="text-secondary">Plaza</span>
            </h2>
          </Link>
        </div>
        <div className="hidden md:flex gap-10 transition">
          {links?.map(({ value, link }, i) => (
            <Link
              to={link}
              key={i}
              className={`no-underline font-medium text-secondary text-base px-2 pb-1 ${
                location.pathname === link
                  ? "border-b-[1px] border-primary"
                  : ""
              } `}
            >
              {value}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/cart" className="no-underline relative text-primary">
            <FaCartShopping className="text-[28px] font-medium" />
            <span className="absolute top-[-12px] right-[-11px] text-sm border-[1px] border-primary rounded-full w-[22px] h-[22px] flex items-center justify-center bg-white">
              {number}
            </span>
          </Link>
          {login ? (
            <div className="relative">
              <div
                onClick={() => setOnHover((prev) => !prev)}
                className="cursor-pointer p-[8px] mr-[4px] transition font-medium border border-2 rounded-full text-primary bg-white"
              >
                <FaUser />
              </div>
              {onHover ? (
                <div className="shadow absolute top-[2.5rem] right-0 bg-white px-8 py-4 rounded">
                  <Link
                  to="/profile"
                    onClick={() => setOnHover((prev) => !prev)}
                    className="hover:text-primary"
                  >
                    Profile
                  </Link>
                  <div className="border my-1 border-primary"></div>
                  <Link
                   to="/orders"
                    onClick={() => setOnHover((prev) => !prev)}
                    className="hover:text-primary"
                  >
                    Orders
                  </Link>
                  <div className="border my-1 border-primary"></div>
                  <div className="cursor-pointer hover:text-primary" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <Button
              href="/login"
              text="Log In"
              variant="outlined"
              background="primary"
            />
          )}
        </div>

        {/* mobile menu */}
        <div className="flex gap-4 md:hidden">
          <Link to="/cart" className="no-underline relative text-primary">
            <FaCartShopping className="text-[28px] font-medium" />
            <span className="absolute top-[-12px] right-[-11px] text-sm border-[1px] border-primary rounded-full w-[22px] h-[22px] flex items-center justify-center bg-white">
              {number}
            </span>
          </Link>
          <button onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? (
              <IoClose className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobileMenu"
            className="block p-6 md:hidden absolute bg-white top-[70px] right-0 w-[65%] h-screen"
          >
            <div className="flex flex-col gap-6 transition">
              {links?.map(({ value, link }, i) => (
                <Link
                  onClick={() => setMenuOpen((prev) => !prev)}
                  to={link}
                  key={i}
                  className={`no-underline font-medium text-secondary text-base px-2 pb-1`}
                >
                  {value}
                </Link>
              ))}
            </div>

            <div className="flex mt-8 items-center gap-6">
              {login ? (
                <>
                  <button
                    className="transition font-medium px-[38px] py-[14px] border rounded rounded-tl-2xl rounded-br-2xl text-primary bg-white hover:text-white hover:bg-primary"
                    onClick={() => {
                      handleLogout();
                      setMenuOpen((prev) => !prev);
                    }}
                  >
                    Log out
                  </button>
                </>
              ) : (
                <Button
                  href="/login"
                  text="Log In"
                  variant="outlined"
                  background="primary"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
