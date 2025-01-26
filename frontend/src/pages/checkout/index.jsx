import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../utils/paths";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const [addressModal, setAddressModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formValues, setFormValues] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    state: "",
  });
  const [userAddress, setUserAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const { cartData } = useSelector((state) => state.cart);

  function handleForm(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    async function getData() {
      const token = localStorage.getItem("token");
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}address/get-address`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLoading(false);
        setSelectedAddress(data?.response[0]?._id);
        setUserAddress(data?.response);
      } catch (error) {
        //no code
      }
    }

    if (loading) {
      getData();
    }
  }, [loading]);

  async function handleSubmitForm() {
    const token = localStorage.getItem("token");

    const checkValues = Object.values(formValues).some(
      (value) => value === "" || value == null
    );

    if (checkValues) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}address/add-address`,
        formValues,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data?.success) {
        setLoading(true);
        setAddressModal(false);
        setFormValues({
          addressLine1: "",
          addressLine2: "",
          city: "",
          postalCode: "",
          state: "",
        });
        toast.success("Address added");
      }
    } catch (error) {
      //no code
    }
  }

  const bill = cartData?.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);
  const charges = Math.floor((12 * bill) / 100);
  const total = bill + charges;

  function handleCartData() {
    const cartData = {
      total,
      address: selectedAddress,
    };
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }
  return (
    <>
      <div className="main-container py-[50px]">
        <h2 className="text-3xl font-semibold text-center">
          Verify order details
        </h2>
        <div className="flex justify-between mx-auto mt-12">
          <div className="w-[60%]">
            <h3 className="font-semibold text-xl mb-1">Order detail</h3>
            <p className="font-semibold">
              Your Bill: <span className="font-normal">{bill}</span>
            </p>
            <p className="font-semibold">
              Delivery Charges: <span className="font-normal">{charges}</span>
            </p>
            <p className="font-semibold">Grand total: {total}</p>
          </div>
          <div className="w-[40%]">
            <div className="flex justify-between mb-1">
              <h3 className="font-semibold text-xl">Delivery address</h3>
              <button
                className="text-primary font-semibold underline"
                onClick={() => setAddressModal(true)}
              >
                Add Address
              </button>
            </div>
            {userAddress.length === 0 ? (
              <p className="font-normal">Please add your address</p>
            ) : null}
            {userAddress.map((value, i) => (
              <div
                key={i}
                className="s border-primary rounded mt-4 cursor-pointer flex gap-3 items-center"
                onClick={() => setSelectedAddress(value._id)}
              >
                <div className="w-[16px] h-[16px] border border-primary rounded-full flex justify-center items-center">
                  {value?._id === selectedAddress ? (
                    <div className="w-[8px] h-[8px] bg-primary rounded-full"></div>
                  ) : null}
                </div>

                <p className="">
                  {value.addressLine1}, {value.addressLine2}, {value.city},{" "}
                  {value.postalCode}, {value.state}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-16">
          {userAddress.length !== 0 ? (
            <Link
              to={paths.payment}
              className="transition font-medium px-[38px] py-[12px] border rounded rounded-tl-2xl rounded-br-2xl text-primary bg-white hover:text-white hover:bg-primary"
              onClick={handleCartData}
            >
              Payment
            </Link>
          ) : (
            <span className="bg-[#cccccc] px-16 py-3 text-secondary rounded inline-block font-medium">
              Payment
            </span>
          )}
        </div>
      </div>

      {addressModal ? (
        <>
          <div class="fixed inset-0 z-10 w-screen h-screen bg-[#00000024] backdrop-blur-[4px]">
            <div class="flex min-h-full justify-center p-4 items-center">
              <div class="w-[600px] rounded-lg bg-white transition-all overflow-hidden">
                <div class="bg-white p-8">
                  <div class="mt-3 text-center sm:text-left">
                    <h3 class="font-semibold text-xl text-center">
                      Add Address
                    </h3>
                    <form className="mt-6 mb-8 flex flex-col gap-5">
                      <input
                        type="text"
                        className="w-full ring-1 ring-primary rounded focus-visible:ring-2 outline-none px-4 py-2"
                        placeholder="Address line 1"
                        name="addressLine1"
                        value={formValues.addressLine1}
                        onChange={handleForm}
                      />

                      <input
                        type="text"
                        className="w-full ring-1 ring-primary rounded focus-visible:ring-2 outline-none px-4 py-2"
                        placeholder="Address line 2"
                        name="addressLine2"
                        value={formValues.addressLine2}
                        onChange={handleForm}
                      />
                      <input
                        type="text"
                        className="w-full ring-1 ring-primary rounded focus-visible:ring-2 outline-none px-4 py-2"
                        placeholder="City"
                        name="city"
                        value={formValues.city}
                        onChange={handleForm}
                      />
                      <input
                        type="text"
                        className="w-full ring-1 ring-primary rounded focus-visible:ring-2 outline-none px-4 py-2"
                        placeholder="Postal Code"
                        name="postalCode"
                        value={formValues.postalCode}
                        onChange={handleForm}
                      />
                      <input
                        type="text"
                        className="w-full ring-1 ring-primary rounded focus-visible:ring-2 outline-none px-4 py-2"
                        placeholder="State"
                        name="state"
                        value={formValues.state}
                        onChange={handleForm}
                      />
                    </form>
                    <div className="flex gap-6 justify-end">
                      <button
                        className="transition font-medium px-[20px] py-[8px] border rounded rounded-tl-xl rounded-br-xl text-secondary bg-white hover:text-white hover:bg-secondary"
                        onClick={() => setAddressModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="transition font-medium px-[20px] py-[8px] border rounded rounded-tl-xl rounded-br-xl text-primary bg-white hover:text-white hover:bg-primary"
                        onClick={handleSubmitForm}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Checkout;
