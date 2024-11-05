import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../utils/paths";

const BrowseMenu = () => {
  const data = [
    {
      img: "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Pizza",
      content:
        "In the new era of technology we look in the future with certainty and pride for our life.",
    },
    {
      img: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
      heading: "Burger",
      content:
        "In the new era of technology we look in the future with certainty and pride for our life.",
    },
    {
      img: "https://images.pexels.com/photos/1169004/pexels-photo-1169004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Shakes",
      content:
        "In the new era of technology we look in the future with certainty and pride for our life.",
    },
    {
      img: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Drinks",
      content:
        "In the new era of technology we look in the future with certainty and pride for our life.",
    },
  ];
  return (
    <section className="bg-[#e9e9e947] pb-[45px] pt-[90px] px-1rem">
      <div className="main-container">
        <h2 className="text-5xl font-bold text-secondary text-center">
          Browse Our Menu
        </h2>
        <p className="max-w-[760px] text-base text-third leading-7 mx-auto mt-[30px] mb-[160px] text-center">
          From tantalizing appetizers to mouthwatering entrees and decadent
          desserts, each dish is thoughtfully prepared to delight your senses.
          Explore a world of flavors and embark on a gastronomic adventure with
          us.
        </p>
        <div className="text-center flex gap-44 md:gap-[30px] flex-wrap md:flex-nowrap">
          {data?.map(({ img, heading, content }, i) => (
            <div
              key={i}
              className="rounded-xl px-[20px] pt-[100px] pb-[40px] border-white border-2 hover:bg-white relative flex flex-col items-center"
            >
              <img
                className="w-[160px] h-[160px] absolute top-[-100px] rounded-full object-cover"
                src={img}
                alt="home"
              />
              <h3 className="mt-[36px] font-semibold text-xl text-secondary">
                {heading}
              </h3>
              <p className="text-base text-third leading-7 text-center my-[22px]">
                {content}
              </p>
              <Link
                to={paths.menu}
                className=" text-base text-primary font-bold hover:underline"
                onClick={() => localStorage.setItem("menuTab", `${heading}`)}
              >
                Explore Menu
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseMenu;
