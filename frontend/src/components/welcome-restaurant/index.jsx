import React from "react";
import ButtonsDuo from "../duo-btns";
import dish from "../../assets/images/dish-2.webp";

const WelcomeRestauramt = () => {
  return (
    <section className="bg-[#e9e9e947] pt-[45px] pb-[90px] px-1rem">
      <div className="main-container">
        <div className="grid gap-8 md:gap-4 grid-cols-1 md:grid-cols-2">
          <div className="">
            <img
              className=" w-full max-w-[320px] mx-auto md:mx-0 md:max-w-[560px]"
              src={dish}
              alt="home"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl text-center md:text-left font-bold text-secondary leading-tight">
              Welcome to Our Restaurant
            </h2>
            <p className="max-w-full md:max-w-[460px] text-center md:text-left text-base text-third leading-7 mt-[30px] mb-[38px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ButtonsDuo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeRestauramt;
