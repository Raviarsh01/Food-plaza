import React from 'react'
import ButtonsDuo from "../duo-btns";
import chef from "../../assets/images/chef.png";

const ExpertChef = () => {
  return (
    <section className="py-[90px] main-container flex gap-8 md:gap-4 flex-col-reverse md:flex-row">
    <div className="flex flex-col justify-center w-full md:w-1/2">
      <h2 className="text-5xl  text-center md:text-left font-bold text-secondary">
        Our Expects Chef
      </h2>
      <p className="max-w-full md:max-w-[460px]  text-center md:text-left text-base text-third leading-7 my-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 text-third mb-[34px]">
        <div>
          {[
            "Lorem ipsum dolor sit amet, consectetur",
            "Lorem ipsum dolor sit amet, consectetur",
            "Lorem ipsum dolor sit amet, consectetur",
          ]?.map((value, i) => (
            <div
              key={i}
              className="flex gap-2.5 items-center justify-center md:justify-start mb-[24px] md:last:mb-0"
            >
              <div className="w-6 h-6 rounded-full bg-primary flex justify-center items-center ">
                <img src="/Images/tick.svg" alt="home" />
              </div>
              <p>{value} </p>
            </div>
          ))}
        </div>
        <div>
          {[
            "Lorem ipsum dolor sit amet, consectetur",
            "Lorem ipsum dolor sit amet, consectetur",
            "Lorem ipsum dolor sit amet, consectetur",
          ]?.map((value, i) => (
            <div
              key={i}
              className="flex gap-2.5 items-center justify-center md:justify-start mb-[24px] last:mb-0"
            >
              <div className="w-6 h-6 rounded-full bg-primary flex justify-center items-center ">
                <img src="/Images/tick.svg" alt="home" />
              </div>
              <p>{value} </p>
            </div>
          ))}
        </div>
      </div>
      <ButtonsDuo />
    </div>
    <div className="flex justify-center  w-full md:w-1/2">
      <img className="w-[300px] md:w-[540px]" src={chef} alt="home" />
    </div>
  </section>
  )
}

export default ExpertChef