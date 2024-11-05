import React from "react";
import bgImage from "../../assets/images/home-bg-image.webp";

const FourCards = () => {
  const cardsData = [
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
  ];
  return (
    <div className="py-[90px] main-container flex flex-col-reverse md:flex-row  gap-10 md:gap-4">
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl text-center md:text-left font-bold text-secondary leading-tight">
          A little information for our valuable guest
        </h2>
        <p className="text-base text-center md:text-left text-third leading-7 mt-[30px]">
          At place, we believe that dining is not just about food, but also
          about the overall experience. Our staff, renowned for their warmth and
          dedication, strives to make every visit an unforgettable event.
        </p>
        <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardsData?.map(({ heading, content }, i) => (
            <div
              key={i}
              className="h-[180px] border border-[#DBDFD0] rounded-lg flex flex-col justify-center items-center"
            >
              <p className="text-4xl font-semibold text-secondary">{heading}</p>
              <p className="text-lg font-medium text-third mt-[1rem]">
                {content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full md:w-1/2">
        <img className="rounded-xl" src={bgImage} alt="about" />
      </div>
    </div>
  );
};

export default FourCards;
