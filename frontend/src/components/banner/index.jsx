import React from "react";
import Image1 from "../../assets/images/Group1.png";
import Image2 from "../../assets/images/home-bg-image.webp";
import Image3 from "../../assets/images/dish-2.webp";
import ButtonsDuo from "../duo-btns";

const Banner = () => {
  return (
    <section className="pt-[70px] pb-[100px] main-container flex gap-16 md:0 flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2">
        <img className="w-[100px] h-[100px]" src={Image1} alt="home" />
        <h1 className="text-6xl text-center md:text-left font-bold text-secondary mt-[30px] leading-tight">
          We provide the best food for you
        </h1>
        <p className=" max-w-full md:max-w-[410px] text-base text-center md:text-left text-third leading-7 mt-[40px] mb-[50px]">
          Savor exquisite flavors and create lasting memories in our inviting
          culinary sanctuary, where every bite is a delight and every moment is
          cherished. Welcome to our gastronomic paradise.
        </p>
        <ButtonsDuo />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative">
          <img
            className="w-[280px] md:w-[450px] h-[360px] md:h-[600px] curved-twoSides"
            src={Image2}
            alt="home"
          />
          <img
            className="w-[170px] md:w-[364px] h-[170px] md:h-[364px] absolute bottom-[30px] left-[-60px] md:left-[-140px]"
            src={Image3}
            alt="home"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
