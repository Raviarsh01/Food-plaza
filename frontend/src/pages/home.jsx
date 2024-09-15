import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../utils/paths";
import Button from "../components/button";
import { IoStarSharp } from "react-icons/io5";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import Image1 from "../assets/images/Group1.png";
import Image2 from "../assets/images/home-bg-image.webp";
import Image3 from "../assets/images/dish-2.webp";
import Image5 from "../assets/images/chef.png";
import Image6 from "../assets/images/fast-image.webp";
import Image7 from "../assets/images/fast-delivery.png";
import Image8 from "../assets/images/image-12.png";

const Home = () => {
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

  const ButtonsDuo = () => {
    return (
      <div className="flex gap-[25px] justify-center md:justify-start">
        <Button
          href="/menu"
          text="Menu"
          variant="contained"
          background="secondary"
        />
        <Button
          href="/about"
          text="About"
          variant="contained"
          background="primary"
        />
      </div>
    );
  };

  const iconData = [
    { icon: <IoTimerOutline />, content: "Delivery within 30 minutes" },
    { icon: <MdOutlineLocalOffer />, content: " Best Offer & Prices" },
    { icon: <CiShoppingCart />, content: " Online Services Available" },
  ];
  return (
    <div className="">
      <div className="pt-[70px] pb-[100px] main-container flex gap-16 md:0 flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <img className="w-[100px] h-[100px]" src={Image1} alt="home" />
          <h1 className="text-6xl text-center md:text-left font-bold text-secondary mt-[30px] leading-tight">
            We provide the best food for you
          </h1>
          <p className=" max-w-full md:max-w-[410px] text-base text-center md:text-left text-third leading-7 mt-[40px] mb-[50px]">
            Savor exquisite flavors and create lasting memories in our inviting
            culinary sanctuary, where every bite is a delight and every moment
            is cherished. Welcome to our gastronomic paradise.
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
      </div>

      <div className="mt-[160p bg-[#e9e9e947] py-[90px] px-1rem">
        <div className="main-container">
          <h2 className="text-5xl font-bold text-secondary text-center">
            Browse Our Menu
          </h2>
          <p className="max-w-[760px] text-base text-third leading-7 mx-auto mt-[30px] mb-[160px] text-center">
            From tantalizing appetizers to mouthwatering entrees and decadent
            desserts, each dish is thoughtfully prepared to delight your senses.
            Explore a world of flavors and embark on a gastronomic adventure
            with us.
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

          <div className="mt-[100px] grid gap-8 md:gap-4 grid-cols-1 md:grid-cols-2">
            <div className="">
              <img
                className=" w-full max-w-[320px] mx-auto md:mx-0 md:max-w-[560px]"
                src={Image3}
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
      </div>

      <div className="py-[90px] main-container flex gap-8 md:gap-4 flex-col-reverse md:flex-row">
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
          <img className="w-[300px] md:w-[540px]" src={Image5} alt="home" />
        </div>
      </div>

      <div className="py-[90px] main-container grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="grid grid-cols-2 gap-4">
          <img src={Image6} className="row-span-2 w-full h-[95%]" alt="home" />
          <img src={Image7} className="w-full h-[220px] mt-8" alt="home" />
          <img src={Image8} className="w-full h-[270px]" alt="home" />
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
      </div>

      <div className="bg-[#e9e9e947] py-[90px]">
        <h2 className="text-5xl font-bold text-secondary text-center">
          Our Happy Customers
        </h2>
        <p className="max-w-[460px] text-base text-third leading-7 mx-auto mt-[30px] mb-[100px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>

        <div className="curved-twoSides relative flex flex-col items-center bg-white w-[400px] md:w-[640px] mx-auto px-[40px] md:px-[70px] pt-[80px] pb-[40px]">
          <img
            className="w-[110px] h-[110px] rounded-full absolute top-[-50px]"
            src="/Images/person-1.png"
            alt="home"
          />
          <div className="text-lg flex gap-2">
            <IoStarSharp className="text-primary" />
            <IoStarSharp className="text-primary" />
            <IoStarSharp className="text-primary" />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <p className="text-base text-third leading-7 pt-[1rem] pb-[2rem]">
            Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit.
            Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus
            enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam
            quis. Ornare tincidunt.
          </p>
          <h4 className="font-bold text-secondary">Ama Ampomah</h4>
          <p className="text-base text-third leading-7">CEO & Founder Inc</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
