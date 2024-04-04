import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./Components/Layout";
import SelectItem from "./Components/SelectItem";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Admin from "./Pages/Admin";
import PaymentPage from "./Pages/PaymentPage";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/item-detail/:id" element={<SelectItem />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/payment-page" element={<PaymentPage />} />
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
