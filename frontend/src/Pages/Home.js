import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { HomepageGetData } from "../Redux/Actions/CartAction";

const Home = () => {
  const dispatch = useDispatch();
  const { data: homeData } = useSelector((state) => state.HomePageGetReducer);
  console.log(homeData?.sectionFourimgs?.img1?.url);
  useEffect(() => {
    window.scroll(0, 0);
    dispatch(HomepageGetData());
  }, []);
  const data = [
    {
      img: <i class="fa-light fa-fire img121"></i>,
      heading: "Quality Cuisine",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit eaque magni, velit suscipit obcaecati tempore  asperiores. Iusto nisi expedita",
    },
    {
      img: <i class="fa-light fa-plate-utensils img121"></i>,
      heading: "Fresh Food",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit eaque magni, velit suscipit obcaecati tempore  asperiores. Iusto nisi expedita",
    },
    {
      img: <i className="fa-light fa-people-group img121"></i>,
      heading: "Friendly Staff",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit eaque magni, velit suscipit obcaecati tempore  asperiores. Iusto nisi expedita",
    },
    {
      img: <i className="fa-light fa-truck-utensils img121"></i>,
      heading: "Doorstep Delivery",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit eaque magni, velit suscipit obcaecati tempore  asperiores. Iusto nisi expedita",
    },
  ];
  const Testimontial = [
    {
      review:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary Internet tend to repeat predefined",
      img: "/Images/dummy.jpg",
      name: "Ravi",
    },
    {
      review:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary Internet tend to repeat predefined",
      img: "/Images/dummy.jpg",
      name: "Akash",
    },
    {
      review:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary Internet tend to repeat predefined",
      img: "/Images/dummy.jpg",
      name: "Amit",
    },
    {
      review:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary Internet tend to repeat predefined",
      img: "/Images/dummy.jpg",
      name: "Tarun",
    },
  ];
  return (
    <>
      <div className="home-topsec">
        <div className="div-backg">
          <h2>TryDo's online ordering</h2>
          <p>Yummy fresh food delivered fast</p>
          <div className="mt-6">
            <Link className="home-button" to="">
              Buy Now
            </Link>
            <Link className="home-button home-button-white" to="">
              Best offers
            </Link>
          </div>
        </div>
      </div>
      <div className="empty-div"></div>
      <div className="homee-section">
        <div className="home-sec1">
          <h2>
            "Explore delicious dishes, add your favorites to the cart, and enjoy
            a seamless ordering experience!"
          </h2>
          <div className="home-sec1-flex">
            <div className="home-sec1-flex-child">
              <p style={{ color: "#515462" }}>Happy Cutomers </p>
              <p className="sec1-para">{homeData?.happycutomers}+</p>
            </div>
            <div className="home-sec1-flex-child">
              <p style={{ color: "#515462" }}>Our outlets</p>
              <p className="sec1-para">{homeData?.outlets}+</p>
            </div>
            <div className="home-sec1-flex-child">
              <p style={{ color: "#515462" }}>Countries</p>
              <p className="sec1-para">{homeData?.countries}</p>
            </div>
          </div>
        </div>
        <section>
          <div className="flex">
            <img
              className="img12"
              src={homeData?.sectionFourimgs?.img1?.url}
              alt="image"
            />
            <img
              className="img12"
              src={homeData?.sectionFourimgs?.img2?.url}
              alt="image"
            />
          </div>
          <div className="flex">
            <img
              className="img12"
              src={homeData?.sectionFourimgs?.img3?.url}
              alt="image"
            />
            <img
              className="img12"
              src={homeData?.sectionFourimgs?.img4?.url}
              alt="image"
            />
          </div>
        </section>
        <section className="section-2">
          {data?.map((item, i) => (
            <div className="section-2-1" key={i}>
              {item.img}
              <h2 className="text-xl font-semibold"> {item.heading}</h2>
              <p> {item.desc}</p>
            </div>
          ))}
        </section>
        <section className="section-3">
          <div className="div33">Everyday Brunch</div>
          <div>
            <img src={homeData?.section2Menu?.url} alt="img" />
          </div>
        </section>
        <section className="mt-[80px] mx-[40px]">
          <h2 className="pcolor text-center text-2xl font-semibold">
            Our Testimontial
          </h2>
          <div className="flex justify-center gap-10">
            {Testimontial?.map((item, i) => (
              <div className="testimonDivflexchild my-8">
                <p>{item.review}</p>
                <div className="flex items-center mt-8">
                  <i class="fa-light fa-user img555"></i>
                  <div className="ms-4">
                    <p className="font-semibold">{item.name}</p>
                    <p>Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
