import React from 'react';
import '../App.css';
import { FaFacebookF, FaPinterestP, FaInstagram, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container-glass">
        <div className="footer-grid">
          <div className="footer-logo">
            <h2><span className="logo-icon">🔥</span>Sondix</h2>
          </div>

          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>About us</li>
              <li>Meet out team</li>
              <li>What we offer</li>
              <li>Latest news</li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Explore</h3>
            <ul>
              <li>Our faqs</li>
              <li>Contact us</li>
              <li>Pricing plans</li>
              <li>Recent work</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <p>+92 (666) 888 - 6800</p>
            <p>needhelp@company.com</p>
          </div>

          <div className="footer-subscribe">
            <h2>Sondix creative web<br />design agency</h2>
            <p>Subscribe to get latest updates on daily basis</p>
            <div className="subscribe-box">
              <input type="email" placeholder="Email address" />
              <button>Subscribe</button>
            </div>
            <div className="social-icons">
              <FaTimes />
              <FaFacebookF />
              <FaPinterestP />
              <FaInstagram />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Company.com</p>
          <div className="scroll-top">↑</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
