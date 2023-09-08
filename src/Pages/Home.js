import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHotjar, FaSquarespace } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbFriends } from "react-icons/tb";


const Home = () => {
 
  useEffect(() => {
    window.scroll(0, 0);
  });

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
              View Demo
            </Link>
          </div>
        </div>
      </div>
      <div className="empty-div"></div>
      <div className="homee-section">
        <div className="home-sec1">
          <h2>
            Creative Agency, Corporate and Portfolio React JS Template + RTL
          </h2>
          <div className="home-sec1-flex">
            <div className="home-sec1-flex-child">
              <p style={{ color: "#515462" }}>Demo Website (More Coming)</p>
              <p className="sec1-para">15+</p>
            </div>
            <div className="home-sec1-flex-child">
              <p style={{ color: "#515462" }}>Inner Page</p>
              <p className="sec1-para">30+</p>
            </div>
            <div className="home-sec1-flex-child">
              <p style={{ color: "#515462" }}>Elements</p>
              <p className="sec1-para">10+</p>
            </div>
          </div>
        </div>
        <div className="cards-4">
          <div>4 cards </div>
        </div>
        <section className="section-2">
          <div className="section-2-1">
            <FaHotjar className="img121" />
            <h2>Quality Cuisine</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eaque magni, velit suscipit obcaecati tempore
              asperiores. Iusto nisi expedita ut.
            </p>
          </div>
          <div className="section-2-1">
            <IoFastFoodOutline className="img121" />
            <h2>Fresh Food</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              dolorem nisi delectus eveniet! Voluptatem nostrum corporis ea
              voluptatibus adipisci iure!
            </p>
          </div>
          <div className="section-2-1">
            <TbFriends className="img121" />
            <h2>Friendly Staff</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              cupiditate tempore voluptates sequi, laudantium ratione omnis
              quaerat natus autem sint?
            </p>
          </div>
          <div className="section-2-1">
            <FaSquarespace className="img121" />
            <h2>Easy Reservation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              nisi. Quidem, voluptate dignissimos officia laudantium fuga iusto
              nemo iste vitae!
            </p>
          </div>
        </section>
        <section className="section-3">
          <h2>What kind of Services we offer</h2>
          <p>Who are in extremely love with eco friendly system</p>
          <div className="section-menu">
            <div className="menu-1">
              <img
                src="https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Pizza photo"
              />
              <div className="pizza">
                <h2>Pizza</h2>
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
                <h2>Burger</h2>
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
                <h2>Shakes</h2>
                <Link to="/menu">
                  <button className="explore">Explore..</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
