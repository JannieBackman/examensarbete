import logo from './assets/logo.png';
import './Footer.css';

function Footer() {
  return (
    <div id="contact-section">
      <div className="footer-container">
        <div>
          <h2>BOOST BY JOSSAN</h2>
          <div className="footer-links">
            <a href="#product-section">
              <p>Tjänster</p>
            </a>
            <a href="#about-section">
              <p>Om mig</p>
            </a>
          </div>
          <div className="contact-info">
            <li>Josefin Lundqvist </li> <li> boostbyjossan@outlook.com</li>
          </div>
        </div>
        <div className="img-container">
          <img src={logo} alt="logo" className="footer-img" />
        </div>
      </div>
      <div className="copyright">
        <span>Copyright © 2023 boostbyjossan</span>
      </div>
    </div>
  );
}

export default Footer;
