import wave from './assets/wave.png';

function WaveBg() {
  return (
    <div
      style={{
        width: '100%',
        height: '20rem',
      }}
    >
      <img src={wave} alt="wavebackground" width="100%" height="100%" />
    </div>
  );
}

export default WaveBg;
