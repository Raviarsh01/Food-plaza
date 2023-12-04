import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MenuDataAction, addCart } from "../Redux/Actions/CartAction";

const Menu = () => {
  const dispatch = useDispatch();
  const { MenuData } = useSelector((state) => state.MenuReducer);
  useEffect(() => {
    dispatch(MenuDataAction());
    window.scroll(0, 0);
  }, []);
  const handleadd = (item) => {
    dispatch(addCart(item));
  };

  return (
    <div className="menu">
      <div className="section">
        <h2 className="heading">Pizza</h2>
        <div className="row">
          {MenuData?.map(
            (item, i) =>
              item.category === "pizza" && (
                <div className="item" key={i}>
                  <img src={item.image} alt="pizza" />
                  <div className="menu-flex">
                    <h3>{item.name}</h3>
                    <p>Rs.{item.price}</p>
                  </div>
                  <div className="menu-flex">
                    <Link to={`/menu/item-detail/${item.itemId}`}>
                      <button className="button-1">View Detail</button>
                    </Link>
                    <button
                      className="button-1"
                      onClick={() => handleadd(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="section">
        <h2 className="heading">Burger</h2>
        <div className="row">
          {MenuData?.map(
            (item, i) =>
              item.category === "burger" && (
                <div className="item" key={i}>
                  <img src={item.image} alt="burger" />
                  <div className="menu-flex">
                    <h3>{item.name}</h3>
                    <p>Rs.{item.price}</p>
                  </div>
                  <div className="menu-flex">
                    <Link to={`/menu/item-detail/${item.itemId}`}>
                      <button className="button-1">View Detail</button>
                    </Link>
                    <button
                      className="button-1"
                      onClick={() => handleadd(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
export default Menu;
