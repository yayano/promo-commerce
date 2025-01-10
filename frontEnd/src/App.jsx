import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import { ToastContainer, toast } from "react-toastify";
import { ThemeProvider } from "./context/theme";

import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-white dark:bg-[#121212]">
        <ToastContainer />
        <Navbar />
        <Searchbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
