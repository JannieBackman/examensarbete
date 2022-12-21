import Typewriter from 'typewriter-effect';
import './Text.css';

function Text() {
  return (
    <div className="textblock">
      <Typewriter
        options={{
          strings: [
            'Rörelseglädje - Träna tillsammans - Må bra - Funktionell träning ',
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default Text;
