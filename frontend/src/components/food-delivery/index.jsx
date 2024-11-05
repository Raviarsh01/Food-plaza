import React from "react";
import fastImage from "../../assets/images/fast-image.webp";
import fastDelivery from "../../assets/images/fast-delivery.png";
import image from "../../assets/images/image-12.png";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";

const FoodDelivery = () => {
  const iconData = [
    { icon: <IoTimerOutline />, content: "Delivery within 30 minutes" },
    { icon: <MdOutlineLocalOffer />, content: " Best Offer & Prices" },
    { icon: <CiShoppingCart />, content: " Online Services Available" },
  ];
  return (
    <section className="py-[90px] main-container grid grid-cols-1 md:grid-cols-2 gap-24">
      <div className="grid grid-cols-2 gap-4">
        <img src={fastImage} className="row-span-2 w-full h-[95%]" alt="home" />
        <img src={fastDelivery} className="w-full h-[220px] mt-8" alt="home" />
        <img src={image} className="w-full h-[270px]" alt="home" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-5xl text-center md:text-left font-bold text-secondary leading-tight">
          Fastest Food Delivery
        </h2>
        <p className="max-w-full md:max-w-[460px] text-center md:text-left text-base text-third leading-7  my-[30px]">
          Our visual designer lets you quickly and of drag a down your way to
          customapps for both keep desktop.
        </p>
        <div className="min-w-[200px] mx-auto md:mx-0">
          {iconData?.map(({ icon, content }, i) => (
            <div key={i} className="flex gap-3 items-center mb-[20px]">
              <div className="w-6 h-6 text-sm rounded-full bg-primary flex justify-center items-center text-white">
                {icon}
              </div>
              <p className="text-third font-medium text-base">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodDelivery;
