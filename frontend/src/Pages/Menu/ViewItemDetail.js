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
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

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
    <div className="pt-[50px] py-[100px] main-container">
      <h2 className="text-6xl font-bold text-center text-secondary leading-tight">
        {userData[0]?.category} Detail
      </h2>
      <p className="max-w-[560px] mx-auto text-base text-center text-third leading-7 mt-[30px]">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>
      <div className="mt-[40px] grid grid-cols-2">
        {userData.length != 0 ? (
          userData.map((item) => (
            <>
              <div className="flex justify-center">
                <img
                  className="h-[600px] w-[500px] rounded-xl"
                  src={item.image}
                  alt="detail"
                ></img>
              </div>
              <div className="flex flex-col justify-center gap-6">
                <p className="text-lg text-secondary font-semibold">
                  Name:
                  <span className="font-normal"> {item.name}</span>
                </p>
                <p className="text-lg text-secondary font-semibold">
                  Price:
                  <span className="font-normal"> {item.price}</span>
                </p>
                <p className="text-lg text-secondary font-semibold">
                  Toping:
                  <span className="font-normal"> {item.toping}</span>
                </p>
                <p className="text-lg text-secondary font-semibold">
                  Description:
                  <span className="font-normal"> {item.description}</span>
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-black font-semibold">Quantity: </span>
                  <button
                    className="rounded p-1 border border-primary text-primary"
                    onClick={(event) => handleDec(event, item.itemId, quantity)}
                  >
                    <FaMinus />
                  </button>
                  <p className="min-w-[20px] flex justify-center">{quantity}</p>
                  <button
                    className="rounded p-1 border border-primary text-primary"
                    onClick={(event) => handleInc(event, item.itemId)}
                  >
                    <FaPlus />
                  </button>
                </div>
                <button
                  className="transition w-[200px] font-medium px-[38px] py-[14px] border rounded rounded-tl-2xl rounded-br-2xl text-primary bg-white hover:text-white hover:bg-primary"
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
    </div>
  );
};

export default ViewItemDetail;
