import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./routing/protected-routes";
import { paths } from "./utils/paths";

import Layout from "./components/layout";
import PageNotFound from "./components/page-not-found";

import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import ForgetPassword from "./pages/auth/forget-password";
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
import "./App.css";

export const url = process.env.REACT_APP_BACKEND_URL;

function App() {
  return (
    <Router>
      <Routes>
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.signup} element={<Signup />} />
        <Route path={paths.forgetPassword} element={<ForgetPassword />} />

        <Route element={<Layout />}>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.about} element={<About />} />
          <Route path={paths.contact} element={<Contact />} />
          <Route path={paths.menu} element={<Menu />} />
          <Route path={paths.itemDetailParam} element={<ItemDetail />} />
          <Route path={paths.profile} element={<Profile />} />
          <Route path={paths.orders} element={<Orders />} />
          <Route path={paths.cart} element={<Cart />} />
          <Route path={paths.checkout} element={<Checkout />} />
          <Route
            path={paths.payment}
            element={
              <ProtectedRoutes>
                <Payment />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path={paths.notFound} element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
