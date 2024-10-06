import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../utils/paths";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { cartData } = useSelector((state) => state.cart);

  const bill = cartData?.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);
  const charges = Math.floor((18 * bill) / 100);
  const total = bill + charges;
  return (
    <div className="main-container py-[50px]">
      <h2 className="text-3xl font-semibold text-center">
        Verify order details
      </h2>
      <div className="flex justify-between max-w-[700px] mx-auto mt-6">
        <div>
          <h3 className="font-semibold text-xl mb-1">Order detail</h3>
          <p className="font-semibold">
            Your Bill: <span className="font-normal">{bill}</span>
          </p>
          <p className="font-semibold">
            Delivery Charges: <span className="font-normal">{charges}</span>
          </p>
          <p className="font-semibold">Grand total: {total}</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-1">Delivery address</h3>
          <p className="font-semibold">
            Street: <span className="font-normal">customer address</span>
          </p>
          <p className="font-semibold">
            City: <span className="font-normal">customer address</span>
          </p>
          <p className="font-semibold">
            State: <span className="font-normal">customer address</span>
          </p>

          <Link
            className="bg-primary px-4 py-2 text-white rounded mt-4 inline-block"
            to={paths.payment}
          >
            Payment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
