import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Payment = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    cardNumber: "",
    holderName: "",
    cvv: "",
    expiryDate: new Date().toISOString().split("T")[0],
  });

  function handleForm(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  async function handleSubmitForm() {
    const token = localStorage.getItem("token");
    const cartData = localStorage.getItem("cartData");
    const parsedData = JSON.parse(cartData);

    const formValue = {
      ...parsedData,
      ...formValues,
    };
    console.log("formValue", formValue);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}address/add-address`,
        formValue,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data?.success) {
        setFormValues({
          cardNumber: "",
          holderName: "",
          cvv: "",
          expiryDate: "",
        });
        navigate("/orders");
        toast.success("Order Placed");
      }
    } catch (error) {
      //no code
    }
  }

  return (
    <div className="main-container py-[50px] ">
      <div class="mt-3 text-center sm:text-left">
        <h2 className="text-3xl font-semibold text-center">
          Enter Card Detail
        </h2>
        <form className="max-w-[500px] mx-auto mt-8 mb-10 flex flex-col gap-5">
          <input
            type="number"
            className="w-full ring-1 ring-primary rounded focus-visible:ring-2 outline-none px-4 py-2"
            placeholder="Enter card number"
            name="cardNumber"
            value={formValues.cardNumber}
            onChange={handleForm}
          />

          <input
            type="text"
            className="w-full ring-1 ring-primary rounded focus-visible:ring-2 outline-none px-4 py-2"
            placeholder="Enter card holder name"
            name="holderName"
            value={formValues.holderName}
            onChange={handleForm}
          />

          <input
            type="number"
            className="w-full ring-1 ring-primary rounded focus-visible:ring-2 outline-none px-4 py-2"
            placeholder="Enter cvv"
            name="cvv"
            value={formValues.cvv}
            onChange={handleForm}
          />
          <input
            type="date"
            className="w-full ring-1 ring-primary rounded focus-visible:ring-2 outline-none px-4 py-2"
            placeholder="Enter expiry date"
            name="expiryDate"
            value={formValues.expiryDate}
            onChange={handleForm}
          />
        </form>
        <div className="flex gap-6 justify-center">
          <button
            className="transition font-medium px-[38px] py-[12px] border rounded rounded-tl-2xl rounded-br-2xl text-primary bg-white hover:text-white hover:bg-primary"
            onClick={handleSubmitForm}
          >
            Place Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
