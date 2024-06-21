import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./Routing/ProtectedRoutes";

import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import ForgetPassword from "./Pages/Auth/ForgetPassword";

import Layout from "./Components/Layout";
import ViewItemDetail from "./Pages/Cart/ViewItemDetail";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Home/Menu";
import About from "./Pages/Home/About";
import Contact from "./Pages/Home/Contact";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Cart/Checkout";
import Payment from "./Pages/Cart/Payment";
import PageNotFound from "./Components/PageNotFound";

export const url = process.env.REACT_APP_BACKEND_URL;

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/menu/item-detail/:Itemid"
            element={<ViewItemDetail />}
          />

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
