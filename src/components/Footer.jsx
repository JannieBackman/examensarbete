import logo from './assets/logo.png';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div>
        <h2>BOOST BY JOSSAN</h2>
        <ul className="footer-links">
          <a href="#Services">
            <li>Tjänster</li>
          </a>
          <a href="#About">
            <li>Om mig</li>
          </a>
        </ul>
        <ul className="contact-info">
          <li>Josefin Lundqvist </li> <li> boostbyjossan@outlook.com</li>
        </ul>
        <span>© boostbyjossan</span>
      </div>
      <div>
        <img src={logo} alt="logo" width={200} />
      </div>
    </div>
  );
}

export default Footer;
