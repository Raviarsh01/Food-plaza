import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/slices/cart";
import { toast } from "react-toastify";
import { RiStarSFill } from "react-icons/ri";

const ItemCard = ({ item, handleadd }) => {
  const dispatch = useDispatch();
  const { image, price, name, toping, _id, rating } = item;

  const { cartData } = useSelector((state) => state.cart);

  const handleInc = (event, id) => {
    event.preventDefault();
    dispatch(increaseQuantity(id));
  };
  const handleDec = (event, id, quantity) => {
    event.preventDefault();
    if (quantity === 1) {
      dispatch(removeFromCart(id));
      toast.success("Item removed from cart");
      return;
    }
    dispatch(decreaseQuantity(id));
  };
  const value = cartData.find((item) => item._id === _id);
  return (
    <div className="rounded-xl shadow overflow-hidden flex flex-col">
      <img src={image} alt="menu" className="w-full h-[230px]" />
      <div className="px-4 py-6 rounded-b-xl flex-1 flex flex-col">
        <div className="flex justify-between">
          <p className="font-medium text-third">{name}</p>
          <p className="font-medium text-third">${price}</p>
        </div>
        <p className="mb-4 mt-2 text-sm text-third flex-1">{toping}</p>
        <div className="flex justify-between items-center">
          <p className="text-third font-medium flex gap-1 items-center">
            <RiStarSFill className="text-2xl text-primary" /> {rating}
          </p>
          {value ? (
            <div className="flex gap-2 justify-center items-center text-base transition font-medium border border-primary w-[110px] h-[32px]  rounded-tl-2xl rounded-br-2xl text-primary bg-white group hover:text-white hover:bg-primary ">
              <button
                className="rounded p-1 text-primary group-hover:text-white"
                onClick={(event) => handleDec(event, _id, value?.quantity)}
              >
                <FaMinus />
              </button>
              <p className="min-w-[20px] flex justify-center">
                {value?.quantity}
              </p>
              <button
                className="rounded p-1 text-primary group-hover:text-white"
                onClick={(event) => handleInc(event, _id)}
              >
                <FaPlus />
              </button>
            </div>
          ) : (
            <button
              className="flex gap-2 justify-center items-center text-base transition font-medium border border-primary w-[110px]  h-[32px] rounded-tl-2xl rounded-br-2xl text-primary bg-white hover:text-white hover:bg-primary"
              onClick={() => handleadd(item)}
            >
              Add{""} <FaCartPlus className="text-lg" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
