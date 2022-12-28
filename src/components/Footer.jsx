import logo from "./assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer-container'>
      <div>
        <h2>BOOST BY JOSSAN</h2>
        <div className='footer-links'>
          <a href='#Services'>
            <p>Tjänster</p>
          </a>
          <a href='#About'>
            <p>Om mig</p>
          </a>
        </div>
        <div className='contact-info'>
          <li>Josefin Lundqvist </li> <li> boostbyjossan@outlook.com</li>
        </div>
        <span>© boostbyjossan</span>
      </div>
      <div>
        <img src={logo} alt='logo' width={200} />
      </div>
    </div>
  );
}

export default Footer;
