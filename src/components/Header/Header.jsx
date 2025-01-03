/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  // Language change handler
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        {/* Branding */}
        <Navbar.Brand as={Link} to="/pilotconstruct" className="custom-brand">
          <img src={logo} alt="Neji Group Logo" className="logo bigger-logo" /> {t("menu.brand")}
        </Navbar.Brand>

        {/* Toggle button for small screens */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggle" />

        {/* Navigation links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products" className="custom-nav-link">
              {t("menu.products")}
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="custom-nav-link">
              {t("menu.about")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="custom-nav-link">
              {t("menu.contact")}
            </Nav.Link>
          </Nav>

          {/* Language Dropdown */}
          <Nav>
            <NavDropdown 
              title={t("menu.language.language")}
              id="language-dropdown"
              className="custom-nav-link"
            >
              {["en", "fr", "ar"].map((lang) => (
                <NavDropdown.Item
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className="language-option"
                >
                  {t(`menu.language.${lang}`)}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
