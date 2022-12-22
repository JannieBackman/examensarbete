import aboutMe from './assets/AboutMe.png';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <img src={aboutMe} alt="aboutme" width={300} />
      <h2 className="about-title">Om mig</h2>
      <p className="about-text">
        Jag heter Josefin Lundqvist och är 34 år, bor i Kungsbacka, björkris
        sedan 4 år tillbaka med sambo och två barn som är 8 och 4 år. Jag har
        coachat gruppträningspass de senaste två åren och jag ÄLSKAR det! Jag
        brinner för att peppa, inspirera och älskar att se hur individen
        utvecklas och vågar ta sig utanför sin comfortzone och framförallt
        hjälpa till att skapa starka & hållbara kroppar.
      </p>
      <p className="about-text">
        Själv hittade jag Crossfit efter min första förlossning och "resa
        tillbaka" och älskar fortfarande träningen lika mycket idag, skillnaden
        idag är att jag har under resans gång lärt mig otroligt mycket om
        kroppen och vikten utav att "träna rätt" framförallt efter att jag slet
        av mitt korsband på en tävling 2021 som resulterande i operation och
        rehab.
      </p>
      <p className="about-text">
        Jag kör blandad träning så som löpning, crossfit och styrka och min
        favvo övning är nog burpees. Träningen är även viktig för mig i mitt
        yrke som kräver en hel del fysiskt. Men också för att undvika skador och
        hålla kroppen frisk länge.
      </p>
    </div>
  );
}

export default About;
