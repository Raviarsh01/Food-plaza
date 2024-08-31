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

const ItemDetail = () => {
  const dispatch = useDispatch();
  const { Itemid } = useParams();
  const { cartData } = useSelector((state) => state.cart);
  const { ItemData, loading } = useSelector((state) => state.SingleItemReducer);
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

  return loading ? (
    <Loader />
  ) : (
    <div className="pt-[50px] py-[100px] main-container">

      <p className="max-w-[560px] mx-auto text-base text-center text-third leading-7">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>
      <div
        className="mt-[40px] gap-10 md:gap-4 grid grid-cols-1 md:grid-cols-2"
      >
        <div className="flex justify-center">
          <img
            className=" h-[360px] md:h-[600px] w-[360px] md:w-[500px] rounded-xl"
            src={userData.image}
            alt="detail"
          ></img>
        </div>
        <div className="flex flex-col justify-center gap-6">
          <p className="text-lg text-secondary font-semibold">
            Name:
            <span className="font-normal"> {userData.name}</span>
          </p>
          <p className="text-lg text-secondary font-semibold">
            Price:
            <span className="font-normal"> {userData.price}</span>
          </p>
          <p className="text-lg text-secondary font-semibold">
            Toping:
            <span className="font-normal"> {userData.toping}</span>
          </p>
          <p className="text-lg text-secondary font-semibold">
            Description:
            <span className="font-normal"> {userData.description}</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="text-black font-semibold">Quantity: </span>
            <button
              className="rounded p-1 text-primary"
              onClick={(event) => handleDec(event, userData.itemId, quantity)}
            >
              <FaMinus />
            </button>
            <p className="min-w-[20px] flex justify-center">{quantity}</p>
            <button
              className="rounded p-1 text-primary"
              onClick={(event) => handleInc(event, userData.itemId)}
            >
              <FaPlus />
            </button>
          </div>
          <button
            className="transition w-[200px] font-medium px-[38px] py-[14px] border rounded rounded-tl-2xl rounded-br-2xl text-primary bg-white hover:text-white hover:bg-primary"
            onClick={() => handleadd(userData)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
