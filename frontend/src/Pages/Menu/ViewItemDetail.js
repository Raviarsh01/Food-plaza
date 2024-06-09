import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addCart,
  quantityInc,
  quantityDec,
  GetSingleItemAction,
} from "../../Redux/Actions/CartActions";
import Loader from "../../Components/Loader";

const ViewItemDetail = () => {
  const dispatch = useDispatch();
  const { Itemid } = useParams();
  const { cartData } = useSelector((state) => state.cartReducer);
  const { ItemData } = useSelector((state) => state.SingleItemReducer);
  const [userData, setUserData] = useState([]);
  const [quantity, setquantity] = useState(0);

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(GetSingleItemAction(Itemid));
  }, []);
  useEffect(() => {
    if (ItemData) {
      setUserData(ItemData);
    }
    return () => {
      setUserData([]);
    };
  }, [ItemData]);

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
    const quan = cartData.find((item) => item.itemId === parseInt(Itemid));
    if (quan) {
      setquantity(quan.quantity);
    }
  }, [handleInc, handleInc]);

  return (
    <div className="detail-container">
      {userData.length != 0 ? (
        userData.map((item) => (
          <>
            <div className="w-[60%]">
              <img src={item.image} alt="img"></img>
            </div>
            <div className="detail-flex2 w-[40%]">
              <h2 className="detail-heading"></h2>
              <p>
                <span className="text-black font-semibold">Name: </span>
                {item.name}
              </p>
              <p>
                <span className="text-black font-semibold">Price: </span>
                {item.price}
              </p>
              <p>
                <span className="text-black font-semibold">Toping: </span>
                {item.toping}
              </p>
              <p>
                <span className="text-black font-semibold">Description: </span>
                {item.description}
              </p>
              <div className="flex items-center">
                <span className="text-black font-semibold">Quantity: </span>
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ViewItemDetail;
