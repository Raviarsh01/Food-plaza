import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
} from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="flex gap-[7rem]">
        <div className="footerflex56y">
          <p className=" text-xl">Social links</p>
          <div className="flex gap-5 mt-6 mb-5">
            <div className="footerdiv66">
              <FaLinkedinIn className="flex3-img" />
            </div>
            <div className="footerdiv66">
              <FaFacebookF className="flex3-img" />
            </div>
            <div className="footerdiv66">
              <FaTwitter className="flex3-img" />
            </div>
            <div className="footerdiv66">
              <FaInstagram className="flex3-img" />
            </div>
          </div>
          <p>
            Sace the exquisite blend of flavors in every bite. Taste the
            extraordinary!
          </p>
        </div>
        <div className="footerflex56y">
          <h2 className="text-xl ">Get in Touch</h2>
          <div className="flex items-center mt-6">
            <div className="footerdiv66">
              {" "}
              <FaPhone className="flex3-img" />
            </div>

            <div className="ms-3">
              <p>Phone</p>
              <p>+91 9843520017</p>
            </div>
          </div>
          <div className="flex mt-5 items-center">
            <div className="footerdiv66">
              <MdOutlineMailOutline className="flex3-img" />
            </div>

            <div className="ms-3">
              <p>Email</p>
              <p>freshbox@email.com</p>
            </div>
          </div>
        </div>
        <div className="footerflex56y">
          <h2 className="text-xl ">Address</h2>
          <p className="mt-6">121 street d-block, Industrial Area,</p>
          <p> Sector 74, Opp.: HDFC bank,</p>
          <p>Sahibzada Ajit Singh Nagar,</p>
          <p>Punjab 163400, India</p>
        </div>
      </div>
      <hr />
      <p className="text-center py-2">@2023 FreshBox. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
