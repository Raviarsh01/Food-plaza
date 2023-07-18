import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { fetchdata,fetchdata2,addCart} from "../Redux/Actions/CartAction";

const Menu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdata())
    dispatch(fetchdata2())
    window.scroll(0, 0);
  }, []);
  const { loading, user, error } = useSelector((state) => state.root1);
  const { user2} = useSelector((state) => state.root2);
  const handleadd = (item) =>{
    dispatch(addCart(item))
  }
  return (
    <div className="menu">
      <div className="section">
        <h2 className="heading">Pizzas</h2>
        <div className="row">
          {user?user.map((item) => (
            <div className="item">
              <img src={item.image} alt="pizza" />
              <div className="menu-flex">
              <h3>{item.name}</h3>
              <p>Rs.{item.price}</p>
              </div>
              <div className="menu-flex">
              <Link to={`/menu/item/${item.id}`}>
                <button className="button-1">View Detail</button>
              </Link>
              <button className="button-1" onClick={()=>handleadd(item)}>Add to Cart</button>
              </div>              
            </div>
          )): "Loading"}
        </div>
      </div>
      <div className="section">
        <h2 className="heading">Burger</h2>
        <div className="row">
          {user2 ? user2.map(item=> (
            <div className="item">
              <img src={item.image} alt="burger" />
              <div className="menu-flex">
              <h3>{item.name}</h3>
              <p>Rs.{item.price}</p>
              </div>
              <div className="menu-flex">
              <Link to={`/menu/item/${item.id}`}>
                <button className="button-1">View Detail</button>
              </Link>
              <button className="button-1" onClick={()=>handleadd(item)}>Add to Cart</button>
              </div>  
            </div>
          )) : "Loading"}
        </div>
      </div>
    </div>
  );  
};
export default Menu;
