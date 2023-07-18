import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart ,quantityInc, quantityDec } from "../Redux/Actions/CartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) =>state.root3);
  const [data ,SetData] = useState(0)
  useEffect(() => {
    window.scroll(0, 0);
  },[]);
  console.log('data...',data)
  const handleRemove = (id) => {
    dispatch(removeCart(id));
  };
  const handleInc = (event,id) =>{
    event.preventDefault();
    dispatch(quantityInc(id))
  }
  const handleDec = (event,id,quantity) =>{
    event.preventDefault();
    if(quantity>1){
      dispatch(quantityDec(id))
    }
  }
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartData.length === 0 ? (
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
            {cartData.map((i) => (
              <tbody>
                <tr>
                  <td>{i.name}</td>
                  <td>{i.price}</td>
                  <td><div style={{display:'flex'}}>Quantity: 
                  <button onClick={(event)=>handleDec(event,i.id,i.quantity)}> - </button>
                  <p> {i.quantity} </p>
                  <button onClick={(event)=>handleInc(event,i.id)}> + </button>
                </div></td>
                  <td>...</td>
                  <td>
                    <button onClick={() => handleRemove(i.id)}>Remove</button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>

          <div className="cart-total">
            <p>....</p>
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
