// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Contact Information</h4>
        <p>pilot constract</p>
        <p>Rue Hedi Chaker, Sakiet Ezzit, Sfax 3021</p>
        <p>Safx, Tunisie, 3021</p>
        <p>Phone: +216 21 262 771</p>
        <p>Phone: +216 25 778 739</p>
        <p>Email: <a href="mailto:pilotconstract@gmail.com">pilotconstract@gmail.com</a></p>
        <p>Business Hours: Mon-Fri, 9am-5pm</p>
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
        <p>&copy; {new Date().getFullYear()} pilot constract. All Rights Reserved.</p>
        <p>Legal disclaimers if necessary.</p>
      </div>
    </footer>
  );
};

export default Footer;
