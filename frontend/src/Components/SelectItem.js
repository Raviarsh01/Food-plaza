import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart, quantityInc, quantityDec } from "../Redux/Actions/CartAction";

const SelectItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { MenuData } = useSelector((state) => state.MenuReducer);
  const { cartData } = useSelector((state) => state.cartReducer);

  const [userData, setUserData] = useState([]);
  const [quantity, setquantity] = useState(0);

  useEffect(() => {
    window.scroll(0, 0);
    const SelectItem = MenuData?.filter((item) => item.itemId == id);
    setUserData(SelectItem);

    return () => {
      setUserData([]);
    };
  }, [MenuData]);

  const handleadd = (item) => {
    dispatch(addCart(item));
  };
  const handleInc = (event, id) => {
    event.preventDefault();
    dispatch(quantityInc(id));
  };
  const handleDec = (event, id, quantity) => {
    event.preventDefault();
    if (quantity > 1) {
      dispatch(quantityDec(id));
    }
  };
  useEffect(() => {
    const quan = cartData.find((item) => item.itemId === parseInt(id));
    if (quan) {
      setquantity(quan.quantity);
    }
  }, [handleInc, handleInc]);

  return (
    <div className="detail-container">
      {userData
        ? userData.map((item) => (
            <>
              <div className="w-[60%]">
                <img src={item.image} alt="img"></img>
              </div>
              <div className="detail-flex2 w-[40%]">
                <h2 className="detail-heading">{item.name}</h2>
                <p>{item.price}</p>
                <p>{item.toping}</p>
                <p>{item.description}</p>
                <div style={{ display: "flex" }}>
                  Quantity:
                  <button
                    className="button-4"
                    onClick={(event) => handleDec(event, item.itemId, quantity)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <p className="text333"> {quantity} </p>
                  <button
                    className="button-4"
                    onClick={(event) => handleInc(event, item.itemId)}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
                <button
                  className="button-1 btn-margin"
                  onClick={() => handleadd(item)}
                >
                  Add to cart
                </button>
              </div>
            </>
          ))
        : "Loading"}
    </div>
  );
};

export default SelectItem;
