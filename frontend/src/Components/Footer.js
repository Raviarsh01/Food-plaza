import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="flex gap-14">
          <div className="footerflex56y">
            <p className="font-semibold text-xl">Social links</p>
            <div className="flex gap-4 mt-6 mb-7">
              <i className="fa-brands fa-linkedin-in flex3-img"></i>
              <i className="fa-brands fa-facebook-f flex3-img"></i>
              <i className="fa-brands fa-twitter flex3-img"></i>
              <i className="fa-brands fa-instagram flex3-img"></i>
            </div>
            <p>
              Sace the exquisite blend of flavors in every bite. Immerse
              yourself in culinary delight with our authentic shawarmas. Taste
              the extraordinary!
            </p>
          </div>
          <div className="footerflex56y">
            <h2 className="text-xl font-semibold">Get in Touch</h2>
            <p className="my-5">
              121 street d-block, Ranjit avenue, Amritsar, Punjab.
              <br />
              Opp: HDFC bank
            </p>
            <div className="flex items-center">
              <i className="fa-solid fa-phone flex3-img"></i>
              <div className="ms-3">
                <p>Phone</p>
                <p>+91 9843520017</p>
              </div>
            </div>
            <div className="flex mt-2 items-center">
              <i className="fa-regular fa-envelope flex3-img"></i>
              <div className="ms-3">
                <p>Email</p>
                <p>freshbox@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="footerflex56y">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="my-5">
              New subscribers get new offer your next order
            </p>
            <input type="email" placeholder="Email" />
            <button className="btn766">Subscribe</button>
          </div>
        </div>
        <hr />
        <p className="text-center py-2">@2023 FreshBox. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
