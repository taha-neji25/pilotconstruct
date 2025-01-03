// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductDetail from "../components/Products/ProductDetail";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/pilotconstruct" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* Dynamic route for individual product pages */}
      <Route path="/products/:productName" element={<ProductDetail />} />
    </Routes>
  );
}

export default AppRoutes;
