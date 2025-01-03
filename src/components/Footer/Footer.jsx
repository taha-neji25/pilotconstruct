// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Contact Information</h4>
        <p>Neji Group</p>
        <p>1234 Neji Street, Suite 100</p>
        <p>City, State, ZIP</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: <a href="mailto:contact@nejigroup.com">contact@nejigroup.com</a></p>
        <p>Business Hours: Mon-Fri, 9am-5pm</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/accessibility">Accessibility Statement</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <p>
          <a href="https://www.facebook.com/nejigroup" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://www.twitter.com/nejigroup" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://www.instagram.com/nejigroup" target="_blank" rel="noopener noreferrer">Instagram</a> | 
          <a href="https://www.linkedin.com/company/nejigroup" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
      <div className="footer-section">
        <h4>Language/Region</h4>
        <select>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>
      <div className="footer-section">
        <p>&copy; {new Date().getFullYear()} Neji Group. All Rights Reserved.</p>
        <p>Legal disclaimers if necessary.</p>
      </div>
    </footer>
  );
};

export default Footer;
