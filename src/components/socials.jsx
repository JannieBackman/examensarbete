import boostLogo from './assets/logo.png';
import fb from './assets/fb.png';
import ig from './assets/ig.png';
import './socials.css';

function Socials() {
  return (
    <div className="socials-bg">
      <div>
        <img src={boostLogo} alt="logotype" width={200} />
      </div>
      <div className="socials-icons">
        <a href="/instagram">
          <img src={ig} alt="instagram" width={50} />
        </a>
        <a href="facebook">
          <img src={fb} alt="facebook" width={48} />
        </a>
      </div>
    </div>
  );
}

export default Socials;
