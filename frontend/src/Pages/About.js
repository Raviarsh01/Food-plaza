import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll(0, 0);
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="about-container">
      <section className="aboutSec-section">
        <div className="div6565y w-[55%]">
          <p className="info-para">
            Welcome To<span> Fresh Box Restaurant</span>{" "}
          </p>
          <p className="center">Little Story</p>
          <p className="center">
            Lorem placeat a soluta nemo debitis repellat possimus minima nulla,
            sunt quaerat quibusdam! Quos ipsa quam dignissimos, quaerat expedita
            fugiat doloribus itaque, sit molestiae a distinctio modi? Officiis
            iure eligendi porro qui praesentium recusandae, nisi minima
            voluptatem voluptatibus fuga expedita totam quas alias quidem
            reprehenderit laudantium nihil quam. Maxime corporis provident
            asperiores molestias accusantium tempora. Aliquam ea esse ad a enim
            tempora rerum laboriosam quae eligendi!
          </p>

          <p className="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut soluta
            harum consequuntur nam sed impedit dolore corrupti iste incidunt
            eius perspiciatis deserunt nemo vitae qui illo numquam, corporis
            excepturi voluptatum.
          </p>
        </div>
        <div className="w-[45%]">
          <img className="img6767" src="Images\home-1.jpg"></img>
        </div>
      </section>
      <section className="my-10">
        <h2 className="scolor text-3xl font-semibold text-center">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="my-5">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="my-5">
            <label>Phone Number</label>
            <input type="text" />
          </div>
          <div className="my-5">
            <label>Message</label>
            <input type="text" />
          </div>
          <button className="border p-2">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default About;
