import React from 'react';
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h4>About Us</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
          velit, vulputate eu pharetra nec, mattis ac neque.
        </p>
        <div className="contact-info-container">
      <div className="contact-info">
        <FaEnvelope />
        <p>example@example.com</p>
      </div>
      <div className="contact-info">
        <FaPhone />
        <p>123-456-7890</p>
      </div>
      <div className="contact-info">
        <FaLocationArrow />
        <p>123 Street, City, Country</p>
      </div>
    </div>

    
      </div>

      <div className="footer-column">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/">Text 01</a>
          </li>
          <li>
            <a href="/about">Text 01</a>
          </li>
          <li>
            <a href="/services">Text 01</a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Useful Links</h4>
        <ul>
          <li>
            <a href="/terms">Text 01</a>
          </li>
          <li>
            <a href="/privacy">Text 01</a>
          </li>
          <li>
            <a href="/faq">Text 01</a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Newsletter</h4>
        <p>Subscribe to our newsletter for updates and promotions.</p>
        <form>
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
