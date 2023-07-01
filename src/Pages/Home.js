import React from 'react'
import { Link } from 'react-router-dom';
import {FaHotjar,FaSquarespace} from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbFriends } from "react-icons/tb";

import '../Styles/Home.css'

const Home = () => {
  return (
    <div className="home">
    <section className="hero">
      <h1>Welcome to Fresh Box</h1>
      <p>Experience the Best Flavors in Town</p>
      <Link to='/menu'><button className="btn">Explore Our Menu</button></Link>
    </section>
    <section className="section-2">
          <div className="section-2-1">
            <FaHotjar className="img121"/>
            <h2>Quality Cuisine</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque magni, velit suscipit obcaecati tempore asperiores. Iusto nisi expedita ut.</p>
          </div>
          <div className="section-2-1">
            <IoFastFoodOutline className="img121"/>
            <h2>Fresh Food</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem nisi delectus eveniet! Voluptatem nostrum corporis ea voluptatibus adipisci iure!</p>

          </div>
          <div className="section-2-1">
            <TbFriends className="img121"/>
            <h2>Friendly Staff</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate tempore voluptates sequi, laudantium ratione omnis quaerat natus autem sint?</p>

          </div>
          <div className="section-2-1">
            <FaSquarespace className="img121"/>
            <h2>Easy Reservation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nisi. Quidem, voluptate dignissimos officia laudantium fuga iusto nemo iste vitae!</p>
          </div>
        </section>
        <section className="section-3">
          <h2>What kind of Services we offer</h2>
          <p>Who are in extremely love with eco friendly system</p>
          <div className="section-menu">
            <div className="menu-1">
              <img src="https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Pizza photo" />
              <div className="pizza">
                <h2>Pizza</h2>
                <Link to="/menu">
                 <button className="explore">Explore..</button>
                </Link>
              </div>
            </div>
            <div className="menu-1">
              <img src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="burger photo"/>
              <div className="pizza">
                <h2>Burger</h2>
                <Link to="/menu">
                 <button className="explore">Explore..</button>
                </Link>
              </div>
            </div>
            <div  className="menu-1">
              <img src="https://images.unsplash.com/photo-1591192038778-64bac0ba7531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Shakes photo" />
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
);   
}

export default Home