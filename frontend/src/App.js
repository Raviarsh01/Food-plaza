import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./Routing/ProtectedRoutes";

import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import ForgetPassword from "./Pages/Auth/ForgetPassword";

import Layout from "./Components/Layout";
import ItemDetail from "./Pages/Home/ItemDetail";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Home/Profile";
import Menu from "./Pages/Home/Menu";
import About from "./Pages/Home/About";
import Contact from "./Pages/Home/Contact";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Cart/Checkout";
import Payment from "./Pages/Cart/Payment";
import Orders from "./Pages/Cart/OrderHistory";
import PageNotFound from "./Components/PageNotFound";
import OrderHistory from "./Pages/Cart/OrderHistory";


export const url = process.env.REACT_APP_BACKEND_URL;

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/item-detail/:Itemid" element={<ItemDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <ProtectedRoutes>
                <Payment />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
