import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="main-container py-[50px]">
      <h2>Checkout</h2>
      <p>Total:</p>
      <p>To Pay:</p>
      <p>Delivery Charges:</p>
      <p>Grand total</p>
      <Link
        className="bg-primary px-4 py-2 text-white rounded mt-4 inline-block"
        to="/payment"
      >
        Payment
      </Link>
    </div>
  );
};

export default Checkout;
