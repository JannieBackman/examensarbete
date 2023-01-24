import heroImage from './assets/hero_bw.jpg';
import boostLogo from './assets/logo.png';

function Hero() {
  return (
    <div
      style={{
        position: ' relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 800,
      }}
    >
      <img
        src={heroImage}
        alt="outdoorworkout"
        style={{ height: '100%', width: '100%' }}
      />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justtifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <img
            src={boostLogo}
            alt="logotype"
            style={{ width: '40%', height: '40%' }}
          />
          <div style={{ textAlign: 'center' }}>
            <h1
              style={{
                color: '#778A77',
                fontFamily: 'Righteous',
                fontWeight: '600',
                fontSize: '4rem',
                letterSpacing: '2rem',
              }}
            >
              Josefin
            </h1>
            <h1
              style={{
                color: '#fff',
                fontFamily: 'Righteous',
                fontWeight: '600',
                fontSize: '4rem',
                letterSpacing: '2rem',
              }}
            >
              Lundqvist
            </h1>

            <span
              style={{
                color: '#fff',
              }}
            >
              Fitness Coach
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
