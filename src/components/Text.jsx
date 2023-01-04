import Typewriter from 'typewriter-effect';
import './Text.css';
import { useEffect, useState } from 'react';

function Text() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 790px)').matches
  );
  useEffect(() => {
    window
      .matchMedia('(max-width: 790px)')
      .addEventListener('change', (e) => setIsMobile(e.matches));
  }, []);
  return (
    <div className="textblock">
      {!isMobile ? (
        <span className="writer">
          <Typewriter
            options={{
              strings: [
                'Rörelseglädje - Träna tillsammans - Må bra - Funktionell träning ',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      ) : (
        <span style={{ textAlign: 'center', padding: '1rem' }}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Rörelseglädje')
                .pauseFor(500)
                .deleteAll()
                .typeString('Träna tillsammans')
                .pauseFor(500)
                .deleteAll()
                .typeString('Må bra')
                .pauseFor(500)
                .deleteAll()
                .typeString('Funktionell träning')
                .start();
            }}
          />
        </span>
      )}
    </div>
  );
}

export default Text;
