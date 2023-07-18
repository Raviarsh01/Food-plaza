import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SelectItem from "./Components/SelectItem";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";

import "./App.css";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/menu/item/:id" element={<SelectItem/>} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
        <Footer />
      </Router>

    
  );
}

export default App;
