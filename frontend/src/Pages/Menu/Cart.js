import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  removeCart,
  quantityInc,
  quantityDec,
} from "../../Redux/Actions/CartActions";
import Button from "../../Components/Button";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cartReducer);
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleRemove = (id) => {
    dispatch(removeCart(id));
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
    const total = cartData?.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    setGrandTotal(total);
  }, [handleInc, handleDec]);

  return (
    <div className="pt-[50px] py-[90px] main-container">
      <h2 className="text-6xl font-bold text-center text-secondary leading-tight mb-8">
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
          <table className="text-secondary w-full">
            <thead>
              <tr className="border-b-[1px] border-[#DBDFD0]">
                <th className="py-[16px] text-left">
                  Items ({cartData?.length})
                </th>
                <th className="py-[16px] text-left">Price</th>
                <th className="py-[16px] text-left">Quantity</th>
                <th className="py-[16px] text-left">Total</th>
                <th className="py-[16px] text-left">Action</th>
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
                        className="rounded p-1 border border-primary text-primary"
                        onClick={(event) =>
                          handleDec(event, i.itemId, i.quantity)
                        }
                      >
                        <FaMinus />
                      </button>
                      <p className="min-w-[20px] flex justify-center">
                        {i.quantity}
                      </p>
                      <button
                        className="rounded p-1 border border-primary text-primary"
                        onClick={(event) => handleInc(event, i.itemId)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td>{i.price * i.quantity}</td>
                  <td>
                    <button onClick={() => handleRemove(i.itemId)}>
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>

          <div className="mt-8 flex justify-between items-center">
            <div className="flex justify-between items-center gap-[20px]">
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
              Your Bill: {grandTotal}{" "}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
