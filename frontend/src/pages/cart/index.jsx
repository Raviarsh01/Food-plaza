import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/slices/cart";
import Button from "../../components/button";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cart);

  const [bill, setBill] = useState(0);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Item removed from cart");
  };
  const handleInc = (event, id) => {
    event.preventDefault();
    dispatch(increaseQuantity(id));
  };
  const handleDec = (event, id, quantity) => {
    event.preventDefault();
    if (quantity > 1) {
      dispatch(decreaseQuantity(id));
    }
  };
  useEffect(() => {
    const total = cartData?.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    setBill(total);
  }, [cartData]);

  return (
    <div className="pt-[50px] py-[90px] main-container">
      <h2 className="text-3xl font-semibold text-center text-secondary leading-tight mb-6">
        Your Cart
      </h2>
      {cartData?.length === 0 ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-secondary text-lg font-medium">
            Your cart is empty.
          </p>
          <Button
            href="/menu"
            text="Return to Menu"
            variant="outlined"
            background="primary"
          />
        </div>
      ) : (
        <>
          <div className="overflow-auto table-scrollbar">
            <table className="w-[800px]  md:w-full text-secondary">
              <thead>
                <tr className="border-b-[1px] border-[#DBDFD0]">
                  <th className="py-[16px] text-left">
                    Items ({cartData?.length})
                  </th>
                  <th className="py-[16px] text-left">Price</th>
                  <th className="py-[16px] text-left">Quantity</th>
                  <th className="py-[16px] text-left">Total</th>
                  <th className="py-[16px] text-left">Remove</th>
                </tr>
              </thead>
              {cartData?.map((i) => (
                <tbody className="second-color">
                  <tr className="border-b-[1px] border-[#DBDFD0]">
                    <td className="py-[16px]">{i.name}</td>
                    <td>{i.price}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <button
                          className="rounded p-1 text-primary"
                          onClick={(event) =>
                            handleDec(event, i._id, i.quantity)
                          }
                        >
                          <FaMinus />
                        </button>
                        <p className="min-w-[20px] flex justify-center">
                          {i.quantity}
                        </p>
                        <button
                          className="rounded p-1  text-primary"
                          onClick={(event) => handleInc(event, i._id)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td>{i.price * i.quantity}</td>
                    <td className="pl-6">
                      <button onClick={() => handleRemove(i._id)}>
                        <IoMdRemoveCircleOutline />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          <div className="mt-8 flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
            <div className="flex mt-6 md:mt-0 flex-wrap justify-between items-center gap-[20px]">
              <Button
                href="/menu"
                text="Return to Menu"
                variant="outlined"
                background="primary"
              />
              <Button
                href="/checkout"
                text="Proceed to Checkout"
                variant="outlined"
                background="secondary"
              />
            </div>
            <p className="text-secondary text-lg font-semibold">
              Your Bill: {bill}{" "}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
