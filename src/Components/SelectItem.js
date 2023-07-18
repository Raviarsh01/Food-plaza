import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart , quantityInc, quantityDec } from "../Redux/Actions/CartAction";

const SelectItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.root1);
  const { user2 } = useSelector((state) => state.root2);
  const cartData = useSelector((state) =>state.root3);

  const [userData, setUserData] = useState([]);
  const [quantity ,setquantity] = useState(0);
  useEffect(() => {
    if (id < 10) {
      let data = user.filter((item) => item.id === parseInt(id));
      setUserData(data);
    } else {
      let data = user2.filter((item) => item.id === parseInt(id));
      setUserData(data);
    }
  }, []);

  const handleadd = (item) =>{
    dispatch(addCart(item))
  }
  const handleInc = (event,id) =>{
    event.preventDefault();
    dispatch(quantityInc(id))
  }
  const handleDec = (event,id,quantity) =>{
    event.preventDefault();
    console.log(quantity)
    if(quantity>1){
      dispatch(quantityDec(id))
    }
  }
  useEffect(()=>{
    const quan=cartData.find(item => item.id === parseInt(id))
    if(quan){
      setquantity(quan.quantity)
    }    
  },[handleInc,handleInc])

  return (
    <div className="detail-container">
      {userData
        ? userData.map((item) => (
            <>
              <div>
                <img src={item.image} alt="img"></img>
              </div>
              <div className="detail-flex2">
                <h2 className="detail-heading">{item.name}</h2>
                <p>{item.price}</p>
                <p>Item detail</p>
                <div style={{display:'flex'}}>Quantity: 
                  <button onClick={(event)=>handleDec(event,item.id,quantity)}> - </button>
                  <p> {quantity} </p>
                  <button onClick={(event)=>handleInc(event,item.id)}> + </button>
                </div>
                <button className="button-1" onClick={()=>handleadd(item)}>Add to cart</button>
              </div>
            </>
          ))
        : "Loading"}
    </div>
  );
};

export default SelectItem;
