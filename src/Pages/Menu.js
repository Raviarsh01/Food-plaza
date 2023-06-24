import React from "react";
import Pizza from "../Data/Pizza.json";
import Burger from "../Data/Burger.json";
import { useDispatch } from 'react-redux';
import { addToCart } from "../Redux/Actions/CartAction";

import '../Styles/Menu.css'

const Menu = () => {
  const dispatch = useDispatch();

  const  handleAdd = (id) =>{
    dispatch(addToCart(id))
  }
  return (
    <div className="menu">
      <div className="section">
        <h2  className="heading">Pizzas</h2>
        <div className="row">
          {Pizza.map((item) => (
            <div className="item">
              <img src={item.image} alt="pizza" />
              <div className="menu-flex">
              <h3>{item.name}</h3>
              <p>Rs.{item.price}</p>
              </div>
              <button className="button-1"  onClick={()=>handleAdd(item.id)}>Select</button>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h2 className="heading">Burger</h2>
        <div className="row">
        {Burger.map(item=> (
            <div className="item">
              <img src={item.image} alt="burger" />
              <div className="menu-flex">
              <h3>{item.name}</h3>
              <p>Rs.{item.price}</p>
              </div>
              <button className="button-1"  onClick={()=>handleAdd(item.id)}>Select</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
