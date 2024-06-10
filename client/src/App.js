import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import ItemDetails from "../src/Components/Work/ItemDetails";
import CheckOut from "../src/CheckOut/CheckOut";
import Confirmation from "../src/CheckOut/Confirmation";
import Navbar from "./Components/Global/Navbar";
import CartMenu from "./Components/Global/CartMenu";
import Commission from "./Components/Pages/Commission/Commission";
import Aboutme from "./Components/Pages/About/About";
import PortFolio from "./Components/Pages/Portfolio/Portfolio";
import Contact from "./Components/Pages/Contact/Contact";
import Footer from "./Components/Global/Footer";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="/checkout/success" element={<Confirmation />} />
          <Route path="/commission" element={<Commission />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
