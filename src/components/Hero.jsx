import heroImage from './assets/hero_bw.jpg';
import boostLogo from './assets/logo.png';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="outdoorworkout" className="hero-image" />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="hero-content">
          <img
            src={boostLogo}
            alt="logotype"
            style={{ width: '40%', height: '40%' }}
          />
          <div className="hero-text">
            <h1>Josefin Lundqvist</h1>
            <span>Fitness Coach</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
