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
        

<div class="icon-container">
  <FaEnvelope></FaEnvelope>
  <p>example@example.com</p>
</div>

<div class="icon-container">
  <FaPhone></FaPhone>
  <p>example@example.com</p>
</div>

<div class="icon-container">
  <FaLocationArrow></FaLocationArrow>
  <p>example@example.com</p>
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
