import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
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
          <div>
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
      <div className="homee-section paddingLeftRight">
        <div className="home-sec1">
          <h2>
            "Explore delicious dishes, add your favorites to the cart, and enjoy
            a seamless ordering experience!"
          </h2>
          <div className="home-sec1-flex">
            <div className="home-sec1-flex-child">
              <p style={{ color: "#515462" }}>Happy Cutomers </p>
              <p className="sec1-para">1500+</p>
            </div>
            <div className="home-sec1-flex-child">
              <p style={{ color: "#515462" }}>Our outlets</p>
              <p className="sec1-para">10+</p>
            </div>
            <div className="home-sec1-flex-child">
              <p style={{ color: "#515462" }}>Countries</p>
              <p className="sec1-para">3</p>
            </div>
          </div>
        </div>
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
          <h2 className="text-2xl font-semibold">All Time Favourites</h2>
          <p>Who are in extremely love with eco friendly system</p>
          <div className="section-menu">
            <div className="menu-1">
              <img
                src="https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Pizza photo"
              />
              <div className="pizza">
                <h2 className="pcolor text-xl">Pizza</h2>
                <Link to="/menu">
                  <button className="explore">Explore..</button>
                </Link>
              </div>
            </div>
            <div className="menu-1">
              <img
                src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="burger photo"
              />
              <div className="pizza">
                <h2 className="pcolor text-xl">Burger</h2>
                <Link to="/menu">
                  <button className="explore">Explore..</button>
                </Link>
              </div>
            </div>
            <div className="menu-1">
              <img
                src="https://images.unsplash.com/photo-1591192038778-64bac0ba7531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Shakes photo"
              />
              <div className="pizza">
                <h2 className="pcolor text-xl">Shakes</h2>
                <Link to="/menu">
                  <button className="explore">Explore..</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
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
