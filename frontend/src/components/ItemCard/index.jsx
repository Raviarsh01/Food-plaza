import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  quantityDec,
  quantityInc,
  removeCart,
} from "../../redux/actions/cart-actions";
import { toast } from "react-toastify";

const ItemCard = ({ item, handleadd }) => {
  const dispatch = useDispatch();
  const { image, price, name, toping, itemId } = item;

  const { cartData } = useSelector((state) => state.cart);

  const handleInc = (event, id) => {
    event.preventDefault();
    dispatch(quantityInc(id));
  };
  const handleDec = (event, id, quantity) => {
    event.preventDefault();
    if (quantity === 1) {
      dispatch(removeCart(id));
      toast.success("Item removed from cart")
      return;
    }
    dispatch(quantityDec(id));
  };
  const value = cartData.find((item) => item.itemId === itemId);
  return (
    <div className="rounded-xl shadow">
      <img src={image} alt="menu" className="w-full h-[230px]" />
      <div className="px-4 py-6 rounded-b-xl">
        <div className="flex justify-between">
          <p className="font-medium text-third leading-7 ">${price}</p>
          <p className="font-medium text-third">{name}</p>
        </div>
        <p className="mb-4 mt-2 text-sm text-third">{toping}</p>

        {value ? (
          <div className="flex gap-2 justify-center items-center text-base transition font-medium w-[140px] mx-auto h-[40px] border rounded rounded-tl-2xl rounded-br-2xl text-primary bg-white group hover:text-white hover:bg-primary ">
            <button
              className="rounded p-1 text-primary group-hover:text-white"
              onClick={(event) => handleDec(event, itemId, value?.quantity)}
            >
              <FaMinus />
            </button>
            <p className="min-w-[20px] flex justify-center">
              {value?.quantity}
            </p>
            <button
              className="rounded p-1 text-primary group-hover:text-white"
              onClick={(event) => handleInc(event, itemId)}
            >
              <FaPlus />
            </button>
          </div>
        ) : (
          <button
            className="flex gap-2 justify-center items-center text-base transition font-medium w-[140px] mx-auto h-[40px] border rounded rounded-tl-2xl rounded-br-2xl text-primary bg-white hover:text-white hover:bg-primary"
            onClick={() => handleadd(item)}
          >
            Add{""} <FaCartPlus className="text-lg" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
