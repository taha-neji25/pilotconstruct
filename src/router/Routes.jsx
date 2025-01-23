// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No need for HashRouter here
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductDetail from "../components/Products/ProductDetail";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes basename={"/"}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:productName" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;