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
            <h2 className="font-semibold">NAVIGATION</h2>
            <p className="mt-[24px]">Menu</p>
            <p className="mt-[18px]">Contact us</p>
            <p className="mt-[18px]">Main dishes</p>
            <p className="mt-[18px]">About us </p>
          </div>
          <div className="mt-[8px]">
            <h2 className="font-semibold">MENU</h2>
            <p className="mt-[24px]">Pizza</p>
            <p className="mt-[18px]">Burger</p>
            <p className="mt-[18px]">Shakes</p>
            <p className="mt-[18px]">Drinks</p>
          </div>
          <div className="mt-[8px]">
            <h2 className="font-semibold">FOLLOW US</h2>
            <div className="flex gap-5 mt-6 mb-5">
              <div className="bg-white rounded-full w-[48px] h-[48px] flex justify-center items-center">
                <FaLinkedinIn className="text-xl text-secondary" />
              </div>
              <div className="bg-white rounded-full w-[48px] h-[48px] flex justify-center items-center">
                <FaFacebookF className="text-xl text-secondary" />
              </div>
              <div className="bg-white rounded-full w-[48px] h-[48px] flex justify-center items-center">
                <FaTwitter className="text-xl text-secondary" />
              </div>
              <div className="bg-white rounded-full w-[48px] h-[48px] flex justify-center items-center">
                <FaInstagram className="text-xl text-secondary" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between py-4">
          <p>© 2022 Restaurants. All Right Reserved. Designed by Isaac</p>
          <div className="flex gap-8">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
