import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./routing/protected-routes";

import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import ForgetPassword from "./pages/auth/forget-password";

import Layout from "./components/layout";
import ItemDetail from "./pages/menu/item-detail";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Payment from "./pages/payment";
import Profile from "./pages/user/profile";
import Orders from "./pages/user/order-history";
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
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/forget-password" element={<ForgetPassword />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
