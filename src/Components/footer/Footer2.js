import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer2 = () => {
  return (
    <footer className="footer2-container">
      <div className="footer2-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms and Conditions</a>
        <p>&copy; 2023 All Rights Reserved</p>
        <a href="/sitemap">Sitemap</a>
      </div>
      
      <div className="footer2-social-icons">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer2;
