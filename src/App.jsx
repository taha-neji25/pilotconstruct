// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router/Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
