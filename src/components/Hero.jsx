import heroImage from './assets/heroImage.png';
import boostLogo from './assets/logo.png';
import Header from './Header';

function Hero() {
  return (
    <div
      style={{
        position: ' relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Header />
      <img src={heroImage} alt="" style={{ height: '100%', width: '100%' }} />

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
          <img src={boostLogo} alt="" style={{ width: '40%', height: '40%' }} />

          <h1
            style={{
              color: '#fff',
              display: 'flex',
              textAlign: 'center',
              width: '100%',
              height: 'auto',
            }}
          >
            Utomhusträning i Kungsbacka
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
