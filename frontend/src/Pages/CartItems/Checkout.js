import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="m-5">
      <h2>Checkout</h2>
      <p>Total:</p>
      <p>To Pay:</p>
      <p>Delivery Charges:</p>
      <p>Grand total</p>
      <Link
        className="bg-[#e11d48] px-4 py-2 text-white rounded "
        to="/payment"
      >
        Payment
      </Link>
    </div>
  );
};

export default Checkout;
