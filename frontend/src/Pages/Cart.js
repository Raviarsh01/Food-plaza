import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  removeCart,
  quantityInc,
  quantityDec,
} from "../Redux/Actions/CartAction";

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

  const handleProceed = () => {
    const token = localStorage.getItem("Token");
    if (token) {
      navigate("/payment-page");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartData?.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/menu">
            <button className="button-232">Return to Menu</button>
          </Link>
        </div>
      ) : (
        <div className="cart-items">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            {cartData?.map((i) => (
              <tbody>
                <tr>
                  <td>{i.name}</td>
                  <td>{i.price}</td>
                  <td>
                    <div style={{ display: "flex" }}>
                      Quantity:
                      <button
                        className="button-4"
                        onClick={(event) =>
                          handleDec(event, i.itemId, i.quantity)
                        }
                      >
                        {" "}
                        -{" "}
                      </button>
                      <p className="text333"> {i.quantity} </p>
                      <button
                        className="button-4"
                        onClick={(event) => handleInc(event, i.itemId)}
                      >
                        {" "}
                        +{" "}
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

          <div className="cart-total">
            <div>
              <Link to="/menu">
                <button className="button-232">Return to Menu</button>
              </Link>
              <button className="button-232" onClick={handleProceed}>
                Proceed to Checkout
              </button>
            </div>
            <p>Your Bill : {grandTotal} </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
