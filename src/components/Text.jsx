import Typewriter from "typewriter-effect";
import "./Text.css";

function Text() {
  return (
    <div className='textblock'>
      <span className='writer'>
        <Typewriter
          options={{
            strings: [
              "Rörelseglädje - Träna tillsammans - Må bra - Funktionell träning ",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
}

export default Text;
