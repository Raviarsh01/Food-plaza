import React from 'react'
import { CgMail } from "react-icons/cg";
import {
  FaPhoneVolume,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
      <div className="footer-child flex">
        <FaPhoneVolume className="footer-img" />
        <div className="space-left">
          <p>Phone</p>
          <p>+91 9843520017</p>
        </div>
      </div>
      <div className="footer-child flex">
        <CgMail className="footer-img" />
        <div className="space-left">
          <p>Email</p>
          <p>freshbox@gmail.com</p>
        </div>
      </div>
      <div className="footer-child flex">
        <FaLinkedinIn className="flex3-img" />
        <FaFacebookF  className="flex3-img"/>
        <FaTwitter className="flex3-img"/>
        <FaInstagram className="flex3-img"/>
      </div>
    </footer>
   
    <footer className="footer-2">
      <div className="footer-bottom">© 2023 Restaurant. All rights reserved.</div>
    </footer>
    </>
  )
}

export default Footer