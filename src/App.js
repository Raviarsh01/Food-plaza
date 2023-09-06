import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import SelectItem from "./Components/SelectItem";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import Admin from "./Pages/Admin";

import "./App.css";

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    // <Route path="/" element={<Home />} />
    // <Route path="/menu" element={<Menu/>} />
    // <Route path="/menu/item/:id" element={<SelectItem/>} />
    // <Route path="/about" element={<About />} />
    // <Route path="/cart" element={<Cart />} />
    //     <Route path='/login' element={<Login/>}></Route>
    //   </Routes>
    //   <Footer />
    // </Router>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/item/:id" element={<SelectItem />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
