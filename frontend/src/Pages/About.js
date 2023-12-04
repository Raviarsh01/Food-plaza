import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <section className="aboutSec-section">
      <div>
        <img className="img6767" src="Images\home-1.jpg"></img>
      </div>
      <div className="div6565y">
        <p className="info-para">
          Welcome To<span> Fresh Box Restaurant</span>{" "}
        </p>
        <p className="center">Little Story</p>
        <p className="center">
          Lorem placeat a soluta nemo debitis repellat possimus minima nulla,
          sunt quaerat quibusdam! Quos ipsa quam dignissimos, quaerat expedita
          fugiat doloribus itaque, sit molestiae a distinctio modi? Officiis
          iure eligendi porro qui praesentium recusandae, nisi minima voluptatem
          voluptatibus fuga expedita totam quas alias quidem reprehenderit
          laudantium nihil quam. Maxime corporis provident asperiores molestias
          accusantium tempora. Aliquam ea esse ad a enim tempora rerum
          laboriosam quae eligendi!
        </p>

        <p className="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut soluta
          harum consequuntur nam sed impedit dolore corrupti iste incidunt eius
          perspiciatis deserunt nemo vitae qui illo numquam, corporis excepturi
          voluptatum.
        </p>
      </div>
    </section>
  );
};

export default About;
