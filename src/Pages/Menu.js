import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../Redux/Actions/CartAction";

const Menu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scroll(0,0)
    dispatch(fetchUser());
  }, []);
  const { loading, user, error } = useSelector((state) => state.root1);
  console.log("loading...", loading, "user", user, "error", error);
  const handleAdd = (id) => {};
  return (
    <div className="menu">
      <div className="section">
        <h2 className="heading">Pizzas</h2>
       {user ? <div className="row">
       {user.map((item) => (
         <div className="item"  style={{width:'30%',border:'1px solid black',padding:'0px 30px'}}>
           <p>{item.userId}</p>
           <p>{item.id}</p>
           <p>{item.title}</p>
           <p>{item.body}</p>
         </div>
       ))}
       </div> : <div>Loading...</div>}
       
          <div>
          {/* {Pizza.map((item) => (
            <div className="item">
              <img src={item.image} alt="pizza" />
              <div className="menu-flex">
              <h3>{item.name}</h3>
              <p>Rs.{item.price}</p>
              </div>
              <button className="button-1"  onClick={()=>handleAdd(item.id)}>Select</button>
            </div>
          ))} */}
        </div>
      </div>
      <div className="section">
        <h2 className="heading">Burger</h2>
        <div className="row">
          {/* {Burger.map(item=> (
            <div className="item">
              <img src={item.image} alt="burger" />
              <div className="menu-flex">
              <h3>{item.name}</h3>
              <p>Rs.{item.price}</p>
              </div>
              <button className="button-1"  onClick={()=>handleAdd(item.id)}>Select</button>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};
export default Menu;
