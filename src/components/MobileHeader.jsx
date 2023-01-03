import Offcanvas from 'react-bootstrap/Offcanvas';
import brandName from './assets/text_logo.png';
import React from 'react';
import './MobileHeader.css';

function NavMobile() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="nav-mobile"
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={handleShow}
      >
        <span class="material-symbols-outlined">menu</span>
        <img src={brandName} alt="brandName" />
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={brandName} alt="brandName" height={30} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="mobile-list">
          <ul>
            <a href="#product-section">
              <li>Tjänster</li>
            </a>
            <a href="#about-section">
              <li>Om mig</li>
            </a>
            <a href="#contact-section">
              <li>Kontakt</li>
            </a>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavMobile;
