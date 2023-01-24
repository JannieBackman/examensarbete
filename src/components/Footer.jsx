import logo from './assets/logo.png';
import './Footer.css';
import dumbell1 from './assets/dumbell1.jpg';
import Form from './form';

function Footer() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            width: '50%',
          }}
        >
          <img
            src={dumbell1}
            style={{
              position: 'relative',
              width: '100%',
              objectFit: 'fill',
            }}
          />
        </div>
        <div style={{ background: '#778a77', width: '50%' }}>
          <Form />
        </div>
      </div>
      <div className="copyright">
        <span>Copyright © 2023 boostbyjossan</span>
      </div>
    </div>
  );
}

export default Footer;
