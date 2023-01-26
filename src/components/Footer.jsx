import './Footer.css';
import dumbell1 from './assets/dumbell1.jpg';
import Form from './form';
import Socials from './socials';
import { React, useEffect, useState } from 'react';
import fb from './assets/fb.png';
import ig from './assets/ig.png';

function Footer() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 1020px)').matches
  );
  useEffect(() => {
    window
      .matchMedia('(max-width: 1020px)')
      .addEventListener('change', (e) => setIsMobile(e.matches));
  }, []);
  return (
    <div className="footer-container" id="contact-section">
      {!isMobile ? (
        <div style={{ display: 'flex' }}>
          <div
            style={{
              width: '50%',
              position: 'relative',
            }}
          >
            <img
              src={dumbell1}
              alt="dumbell"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'fill',
              }}
            />

            <Socials />
          </div>
          <div style={{ background: '#778a77', width: '50%' }}>
            <Form />
          </div>
        </div>
      ) : (
        <div>
          <div style={{ background: '#778a77', padding: '2rem' }}>
            <Form />
          </div>
          <div className="footer-sm">
            <div>
              <a href="/instagram">
                <img src={ig} alt="instagram" width={50} />
              </a>
              <a href="facebook">
                <img src={fb} alt="facebook" width={48} />
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="footer-bottom">
        <div className="copyright">
          <span>Copyright © 2023 boostbyjossan</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
