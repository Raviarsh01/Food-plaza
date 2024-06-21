import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

import { Link } from "react-router-dom";
import { IoIosRestaurant } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="main-container">
        <div className="footer-grid py-8 border-b-[1px] border-white">
          <div>
            <div>
              <Link
                className="flex gap-1 items-end text-2xl font-semibold text-primary"
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

          <div className="mt-[8px]">
            <h2 className="font-semibold mb-[24px]">NAVIGATION</h2>
            {["Menu", "Contact us", "Main dishes", "About us"].map(
              (value, i) => (
                <p className="mb-[18px]">{value}</p>
              )
            )}
          </div>

          <div className="mt-[8px]">
            <h2 className="font-semibold mb-[24px]">MENU</h2>
            {["Pizza", "Burger", "Shakes", "Drinks"].map((value, i) => (
              <p className="mb-[18px]">{value}</p>
            ))}
          </div>

          <div className="mt-[8px]">
            <h2 className="font-semibold">FOLLOW US</h2>
            <div className="flex gap-5 mt-6 mb-5">
              {[
                <FaFacebookF className="text-xl text-secondary" />,
                <FaLinkedinIn className="text-xl text-secondary" />,
                <FaTwitter className="text-xl text-secondary" />,
                <FaInstagram className="text-xl text-secondary" />,
              ].map((value, i) => (
                <div className="bg-white rounded-full w-[48px] h-[48px] flex justify-center items-center">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between py-4 flex-col md:flex-row">
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
