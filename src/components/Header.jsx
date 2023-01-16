import { useEffect, useState } from "react";
import brandName from "./assets/text_logo.png";
import "./Header.css";
import NavMobile from "./MobileHeader";

function Header() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 790px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 790px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);

  return (
    <div className='header-container'>
      <nav>
        {!isMobile ? (
          <div className='navbar'>
            <img src={brandName} alt='brandName' />
            <div className='nav-menu'>
              <a href='#product-section'>
                <p>Tjänster</p>
              </a>
              <a href='#about-section'>
                <p>Om mig</p>
              </a>
              <a href='#contact-section'>
                <p>Kontakt</p>
              </a>
            </div>
          </div>
        ) : (
          <NavMobile />
        )}
      </nav>
    </div>
  );
}

export default Header;
