import './b2b.css';
import astaff from './assets/boost-astaff.png';
import kiwiLogo from './assets/KiWiLogo.png';

function B2b() {
  return (
    <div className="b2b-container">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: ' 5rem',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1>Företagsträning </h1>
          <p>
            Är du sugen på att utmana & träna tillsammans med dina kollegor?
            Vill du som arbetsgivare hjälpa dina medarbetare till att bli
            piggare, starkare och må bättre? Jag erbjuder företagsträning både
            inomhus och utomhus. Att utmanas tillsammans med sina arbetskamrater
            är väldogt roligt och utvecklade samt skapar en bättre
            sammanhållning och dynamik i gruppen. <br />
            Vill du ha en offert?
            <a href="#contact-section">Kontakta mig</a>
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              width: '50%',
              padding: '3rem',
              background: ' #8B5B5B',
              color: '#fff',
            }}
          >
            <p>
              ”Jossan var med och drev KiWis hälsosatsning under 2022, ett
              roligt inslag i vår vardag. Jossan höll i våra träningspass på
              jobbet, alla belagda utomhus runt om i Göteborg. Jossan var
              flexibel med både tider och platser så det passade vår
              organisation. I sin coachroll är hon duktig på att ta fram rätt
              övningar och anpassa till individen, oavsett tidigare träningsnivå
              kunde alla vara med. Bra variation på träningspass och alltid
              engagerad. Hejade på och utmanade alla deltagare. En kompetent
              tjej med stort hjärta för träning och hälsa. Rekommenderar henne
              varmt”
            </p>
            <div style={{ width: '50%' }}>
              <img src={kiwiLogo} alt="ptonline" width={400} />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              padding: '3rem',
              background: ' #8B5B5B',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            <p>
              ”Vi på A-Staffing anlitade Jossan för gruppträning som
              företagsaktivitet under några månader, våren 2022. Jossan var
              proffsig och peppade oss med sin sprudlande energi. Hon
              individanpassade också övningarna vid behov. Vi kan absolut
              rekommendera Jossan för liknande upplägg och kan tänka oss att
              anlita Jossan igen vid framtida behov – Jenny Gundersen VD,
              A-Staffing Construction”{' '}
            </p>
            <div style={{ width: '50%' }}>
              <img src={astaff} alt="ptonline" width={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default B2b;
