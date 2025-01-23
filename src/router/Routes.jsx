// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductDetail from "../components/Products/ProductDetail";
import NotFound from "../pages/NotFound";

function AppRoutes() {

  const navigate = useNavigate();

  function extractFullPath(url) {
    // Remove the domain and any leading/trailing slashes
    // eslint-disable-next-line no-useless-escape
    const path = url.replace(/^https?:\/\/[^\/]+/, '').replace(/^\/|\/$/g, '');
    return path;
  }

  useEffect(() => {
    const currentPath = extractFullPath(window.location.href);
    
    // Define valid routes
    const validRoutes = ['', 'about', 'products', 'contact', 'products/dao', 'products/menuiserie-metallique', 'products/construction-modulaire', 'products/structure-metallique', 'products/maintenance', 'products/construction-fabrication-serie', 'products/traitement-de-peinture']; // Add all valid routes here
    // Check if the current path is valid
    if (!validRoutes.includes(currentPath)) {
      // Redirect to a 404 page or home page
        navigate(`/`); // Or navigate('/') to redirect to home
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* Dynamic route for individual product pages */}
      <Route path="/products/:productName" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
}

export default AppRoutes;
