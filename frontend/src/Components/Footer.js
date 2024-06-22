import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

import { IoIosRestaurant } from "react-icons/io";

const Footer = () => {
  const navigation = [
    {
      value: "Menu",
      href: "/menu",
    },
    {
      value: "Contact us",
      href: "/contact",
    },
    {
      value: "Main dishes",
      href: "/menu",
    },
    {
      value: "About us",
      href: "/about",
    },
  ];
  return (
    <footer className="bg-secondary text-white">
      <div className="main-container">
        <div className="footer-grid  py-8 border-b-[1px] border-white">
          <div className=" text-center md:text-left">
            <div>
              <Link
                className="flex gap-1 items-end justify-center md:justify-start text-2xl font-semibold text-primary"
                to="/"
              >
                <IoIosRestaurant className="font-bold text-4xl" />
                <h2 className="text-primary">
                  Food <span className="text-white">Plaza</span>
                </h2>
              </Link>
            </div>
            <p className="mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt cons uur adipi orre labore et dolore
              .Learn more
            </p>
          </div>

          <div className="mt-[8px] text-center md:text-left">
            <h2 className="font-semibold mb-[24px]">NAVIGATION</h2>
            {navigation?.map(({ value, href }, i) => (
              <div key={i} className="mb-[18px]">
                <Link to={href} className="text-base text-white">
                  {value}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-[8px] text-center md:text-left">
            <h2 className="font-semibold mb-[24px]">MENU</h2>
            {["Pizza", "Burger", "Shakes", "Drinks"].map((value, i) => (
              <div key={i} className="mb-[18px]">
                <Link
                  to="/menu"
                  className="text-base text-white"
                  onClick={() => localStorage.setItem("menuTab", `${value}`)}
                >
                  {value}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-[8px] text-center md:text-left">
            <h2 className="font-semibold">FOLLOW US</h2>
            <div className="flex gap-5 mt-6 mb-5 justify-center md:justify-start">
              {[
                <FaFacebookF className="text-xl text-secondary" />,
                <FaLinkedinIn className="text-xl text-secondary" />,
                <FaTwitter className="text-xl text-secondary" />,
                <FaInstagram className="text-xl text-secondary" />,
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-white rounded-full w-[48px] h-[48px] flex justify-center items-center"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center md:items-start py-4 flex-col md:flex-row">
          <p className="mb-8 md:mb-0">
            © 2022 Restaurants. All Right Reserved. Designed by Isaac
          </p>
          <div className="flex gap-8 flex-col md:flex-row">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
