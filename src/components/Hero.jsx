import heroImage from './assets/heroImage.png';
import boostLogo from './assets/logo.png';
import Header from './Header';

function Hero() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        position: ' relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Header />
      <img src={heroImage} alt="" style={{ height: '80%', width: '80%' }} />

      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '40%',
        }}
      >
        <img src={boostLogo} alt="" style={{ width: '70%', height: 'auto' }} />
      </div>
      <div>
        <h1
          style={{
            color: '#fff',
            position: 'absolute',
            top: '75%',
            right: '25%',
          }}
        >
          Utomhusträning i Kungsbacka
        </h1>
      </div>
    </div>
  );
}

export default Hero;
