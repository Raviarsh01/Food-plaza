import React from "react";
import Image1 from "../../assets/images/image-1o2.webp";

const AboutBanner = () => {
  return (
    <div className="main-container pt-[70px] pb-[90px] gap-10 md:gap-4 grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center">
        <img className="rounded-xl" src={Image1} alt="about" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-5xl text-center md:text-left font-bold text-secondary leading-tight">
          We provide healthy food for your family.
        </h2>
        {[
          " Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.",
          "At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.",
        ].map((value, i) => (
          <p
            key={i}
            className="text-center md:text-left text-base text-third leading-7 mt-[30px]"
          >
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutBanner;
