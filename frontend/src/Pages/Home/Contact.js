import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="bg-[#e9e9e947]">
        <div className="main-container h-[520px]">
          <h2 className="text-5xl font-bold text-center text-secondary leading-tight pt-[50px]">
            Contact Us
          </h2>
          <p className="max-w-[560px] mx-auto text-base text-center text-third leading-7 mt-[30px]">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
          <div className="relative flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="absolute shadow top-[70px] max-w-[800px] w-full rounded-xl bg-white p-[40px] grid grid-cols-2 gap-[26px]"
            >
              <div className="col-span-2 md:col-span-1">
                <label className="font-semibold text-secondary">Name</label>
                <input
                  type="text"
                  className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                  placeholder="Enter your name"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="font-semibold text-secondary">Email</label>
                <input
                  type="email"
                  className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                  placeholder="Enter email address"
                />
              </div>
              <div className="col-span-2">
                <label className="font-semibold text-secondary">Subject</label>
                <input
                  type="text"
                  className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                  placeholder="Write a subject"
                />
              </div>
              <div className="col-span-2">
                <label className="font-semibold text-secondary">Message</label>
                <textarea
                  rows={5}
                  className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                  placeholder=" Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="col-span-2 transition font-medium px-[38px] py-[14px] border rounded rounded-tl-2xl rounded-br-2xl text-primary bg-white hover:text-white hover:bg-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-[500px] md:mt-[380px] mb-[90px] max-w-[800px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0 md:gap-0">
        <div>
          <h2 className="text-secondary text-xl font-semibold">Contact Us</h2>
          <div className="flex gap-2 items-center text-third mt-6">
            <FaPhone />
            <p>+91 98146840000</p>
          </div>
          <div className="flex gap-2 items-center text-third mt-4">
            <MdOutlineMailOutline className="text-lg font-bold" />
            <p>foodplaza@offmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-secondary text-xl font-semibold">Hours</h2>
          <p className="text-third mt-6">Mon-Sat: 10am - 8pm</p>
          <p className="text-third mt-4">Sun: 10am - 1pm</p>
        </div>
        <div>
          <h2 className="text-secondary text-xl font-semibold">Our Location</h2>
          <p className="text-third mt-6">123 cover Street homie Land,</p>
          <p className="text-third mt-4"> Sector62, Mohali, Punjab, India</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
