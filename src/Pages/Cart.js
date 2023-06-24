import React, { useState,useRef,useEffect  } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeToCart } from "../Redux/Actions/CartAction";
import '../Styles/Cart.css'

const Cart = () => {
  const item = useSelector((state) => state.add.data);
  const dispatch = useDispatch();
 
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(1);

  const handleRemove = (id) =>{
    dispatch(removeToCart(id));
  }

  const QuantityHandler = (e) =>{
    QuantityHandler(e.target.value)
  }
 console.log("QUANTITY",quantity)
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {item.length === 0 ? (
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
            {item.map((i) => (
              <tbody>
                <tr>
                  <td>{i.name}</td>
                  <td>{i.price}</td>
                  <td>
                    <input type="number" onMouseMove={QuantityHandler} />
                  </td>
                  <td>{i.price}</td>
                  <td>
                    <button onClick={()=>handleRemove(i.id)}>Remove</button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>

          <div className="cart-total">
            <p>Total: $31.97</p>
            <div>
              <Link to="/menu">
                <button className="button-232">Return to Menu</button>
              </Link>
              <Link to="">
                <button className="button-232">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
