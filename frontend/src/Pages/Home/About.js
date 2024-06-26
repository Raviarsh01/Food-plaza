import React from "react";
import Image1 from "../../Assets/Images/Image.webp";
import Image2 from "../../Assets/Images/homeBgImage.webp";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { GrOrderedList } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";

const About = () => {
  const data = {
    cardsData: [
      {
        heading: "30+",
        content: "Staff Members",
      },
      {
        heading: "2015",
        content: "Founded",
      },
      {
        heading: "100%",
        content: "Satisfied Customers",
      },
      {
        heading: "6",
        content: "Locations",
      },
    ],
    gridData: [
      {
        icon: <RiCheckboxMultipleLine className="text-7xl text-primary" />,
        heading: "Multi Cuisine",
        content:
          " In the new era of technology we look in the future with certainty life.",
      },
      {
        icon: <GrOrderedList className="text-7xl text-primary" />,
        heading: "Easy To Order",
        content:
          " In the new era of technology we look in the future with certainty life.",
      },
      {
        icon: <CiDeliveryTruck className="text-7xl text-primary" />,
        heading: " Fast Delivery",
        content:
          " In the new era of technology we look in the future with certainty life.",
      },
    ],
  };
  return (
    <>
      <h2 className="text-5xl font-bold text-center text-secondary leading-tight pt-[50px]">
        About Us
      </h2>
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
      <div className="bg-[#e9e9e947] ">
        <div className="main-container py-[90px] grid grid-cols-1 md:grid-cols-3 gap-24">
          {data?.gridData?.map(({ icon, heading, content }, i) => (
            <div key={i} className="flex gap-6 items-start">
              {icon}
              <div>
                <h3 className="text-xl text-secondary font-semibold">
                  {heading}
                </h3>
                <p className="mt-[1rem] text-base font-medium text-third">
                  {content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-[90px] main-container flex flex-col-reverse md:flex-row  gap-10 md:gap-4">
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl text-center md:text-left font-bold text-secondary leading-tight">
            A little information for our valuable guest
          </h2>
          <p className="text-base text-center md:text-left text-third leading-7 mt-[30px]">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-6">
            {data?.cardsData?.map(({ heading, content }, i) => (
              <div
                key={i}
                className="h-[180px] border border-[#DBDFD0] rounded-lg flex flex-col justify-center items-center"
              >
                <p className="text-4xl font-semibold text-secondary">
                  {heading}
                </p>
                <p className="text-lg font-medium text-third mt-[1rem]">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full md:w-1/2">
          <img className="rounded-xl" src={Image2} alt="about" />
        </div>
      </div>
    </>
  );
};

export default About;
