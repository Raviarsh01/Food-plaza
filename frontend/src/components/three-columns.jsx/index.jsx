import React from "react";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { GrOrderedList } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";

const ThreeColumns = () => {
  const gridData = [
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
  ];
  return (
    <div className="bg-[#e9e9e947] ">
      <div className="main-container py-[90px] grid grid-cols-1 md:grid-cols-3 gap-24">
        {gridData?.map(({ icon, heading, content }, i) => (
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
  );
};

export default ThreeColumns;
