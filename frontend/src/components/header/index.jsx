import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { paths } from "../../utils/paths";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutAction } from "../../redux/actions/auth-actions";
import { toast } from "react-toastify";
import { FaCartShopping } from "react-icons/fa6";
import Button from "../../components/button";
import { IoIosRestaurant } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { cartData } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const number = cartData?.length;
  const [login, setlogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [onHover, setOnHover] = useState(false);

  useEffect(() => {
    if (user?.token) {
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
    const sidebarElement = document.getElementById("mobileMenu");
    const tabElement = document.getElementById("profileTab");

    if (tabElement && !tabElement.contains(event.target)) {
      setOnHover(false);
    }
    if (sidebarElement && !sidebarElement.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const handleLogout = () => {
    dispatch(LogoutAction());
    setlogin(false);
    setOnHover((prev) => !prev);
    toast.success("Logout success", {
      autoClose: 1500,
    });
    navigate(`${paths.login}`);
  };

  const links = [
    { value: "Home", link: paths.home },
    { value: "About", link: paths.about },
    { value: "Menu", link: paths.menu },
    { value: "Contact us", link: paths.contact },
  ];
  return (
    <div className="flex items-center bg-white w-full h-24 fixed top-0 z-10 shadow">
      <div className="main-container flex items-center justify-between w-full">
        <div>
          <Link
            className="flex gap-1 items-center text-2xl font-semibold text-primary"
            to={paths.home}
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
        <div className="flex items-center gap-4 md:gap-6">
          <Link to={paths.cart} className="no-underline relative text-primary">
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
                <div
                  id="profileTab"
                  className="shadow absolute top-[2.5rem] right-0 bg-white px-8 py-4 rounded"
                >
                  <Link
                    to={paths.profile}
                    onClick={() => setOnHover((prev) => !prev)}
                    className="hover:text-primary"
                  >
                    Profile
                  </Link>
                  <div className="border my-1 border-primary"></div>
                  <Link
                    to={paths.orders}
                    onClick={() => setOnHover((prev) => !prev)}
                    className="hover:text-primary"
                  >
                    Orders
                  </Link>
                  <div className="border my-1 border-primary"></div>
                  <div
                    className="cursor-pointer hover:text-primary"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <>
              <Link className=" md:hidden" to={paths.login}>
                <FaArrowRight className="text-primary text-2xl" />
              </Link>
              <div className="hidden md:flex">
                <Button
                  href={paths.login}
                  text="Log In"
                  variant="outlined"
                  background="primary"
                />
              </div>
            </>
          )}

          {/* mobile menu */}
          <div className="flex gap-4 md:hidden">
            <button onClick={() => setMenuOpen((prev) => !prev)}>
              {menuOpen ? (
                <IoClose className="text-3xl text-primary" />
              ) : (
                <FiMenu className="text-3xl text-primary" />
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
