import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { emptyCart } from "../../redux/slices/cart";
import { useCreateOrderMutation } from "../../redux/redux-toolkit-query/orders";

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    cardNumber: "",
    holderName: "",
    cvv: "",
    expiryDate: "",
  });

  const { cartData } = useSelector((state) => state.cart);
  const [createOrder, { data }] = useCreateOrderMutation();

  useEffect(() => {
    if (data?.message) {
      setFormValues({
        cardNumber: "",
        holderName: "",
        cvv: "",
        expiryDate: "",
      });
      dispatch(emptyCart());
      toast.success(data?.message);
      navigate("/orders");
    }
  }, [data, dispatch, navigate]);

  function handleForm(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  const value = cartData.map((item) => ({
    itemID: item?._id,
    quantity: item?.quantity,
  }));

  async function handleSubmitForm() {
    const d1 = localStorage.getItem("cartData");
    const parseData = JSON.parse(d1);

    const checkValues = Object.values(formValues).some(
      (value) => value === "" || value == null
    );

    if (checkValues) {
      toast.error("Please fill all fields");
      return;
    }

    const formDatas = {
      deliveryAddress: parseData?.address,
      cartData: value,
      totalAmount: parseData?.total,
    };
    createOrder(formDatas);
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
            type="text"
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
