import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { IoStarSharp } from "react-icons/io5";

const ReviewSlider = () => {
  return (
    <section className="bg-[#e9e9e947] py-[90px]">
      <h2 className="text-5xl font-bold text-secondary text-center">
        Our Happy Customers
      </h2>
      <p className="max-w-[460px] text-base text-third leading-7 mx-auto mt-[30px] mb-[50px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>

      <div className="max-w-[700px] mx-auto">
        <Swiper
          id="review-swiper"
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 5000, 
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
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
                Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam
                sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in
                cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                eu aliquam quis. Ornare tincidunt.
              </p>
              <h4 className="font-bold text-secondary">Ama Ampomah</h4>
              <p className="text-base text-third leading-7">
                CEO & Founder Inc
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                <IoStarSharp className="text-primary" />
                <IoStarSharp className="text-primary" />
              </div>
              <p className="text-base text-third leading-7 pt-[1rem] pb-[2rem]">
                Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam
                sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in
                cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                eu aliquam quis. Ornare tincidunt.
              </p>
              <h4 className="font-bold text-secondary">Nancy</h4>
              <p className="text-base text-third leading-7">CTO Officer</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewSlider;
