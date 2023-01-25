import "./Footer.css";
import dumbell1 from "./assets/dumbell1.jpg";
import Form from "./form";
import Socials from "./socials";

function Footer() {
  return (
    <div className='footer-container' id='contact-section'>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "50%",
            position: "relative",
          }}
        >
          <img
            src={dumbell1}
            alt='dumbell'
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
            }}
          />

          <Socials />
        </div>
        <div style={{ background: "#778a77", width: "50%" }}>
          <Form />
        </div>
      </div>
      <div className='copyright'>
        <span>Copyright © 2023 boostbyjossan</span>
      </div>
    </div>
  );
}

export default Footer;
