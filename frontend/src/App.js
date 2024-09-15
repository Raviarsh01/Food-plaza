import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./routing/protected-routes";

import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import ForgetPassword from "./pages/auth/forget-password";

import Layout from "./components/layout";
import ItemDetail from "./pages/home/item-detail";
import Home from "./pages/home/home";
import Profile from "./pages/home/profile";
import Menu from "./pages/home/menu";
import About from "./pages/home/about";
import Contact from "./pages/home/contact";
import Cart from "./pages/cart/cart";
import Checkout from "./pages/cart/checkout";
import Payment from "./pages/cart/payment";
import Orders from "./pages/cart/order-history";
import PageNotFound from "./components/page-not-found";

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
