import workout from '../components/assets/DSC05312.JPG';
import workout2 from '../components/assets/DSC05584.JPG';

import './Products.css';

function Products() {
  return (
    <div className="products-container" id="product-section">
      <h1> Tjänster</h1>
      <div
        style={{
          display: 'flex',
          margin: '5rem',
          border: 'solid #778a77 5px',
        }}
      >
        <p
          style={{
            fontSize: '1.5rem',
            padding: '4rem',
            textAlign: 'center',
          }}
        >
          <h2> Utomhusträning</h2>
          Jag startade utomhusträningen hösten 2020 då det fanns utmaningar till
          att vara inomhus på ett gym, sedan dess har vi kört på i alla väder
          med träning ca 2 ggr/v året om. Träningen hos mig är varierande då ett
          pass är aldrig det andra likt. Träningen sker med kroppsvikt,
          gummiband, kettlebells, bollar, hantlar m.m. <br /> Det är viktigt för
          mig att alla ska känna sig inkluderade och att jag hjälper just dig
          till att anpassa träningen efter din nivå samt hjälper till ifall man
          har skada eller liknande. <br /> <strong> ALLA </strong>kan vara med
          och mår bra utav rörelse & att vi har väldigt kul tillsammans är ett
          stort plus.
        </p>
        <img src={workout} alt="workout" height={600} />
      </div>
      <div
        style={{
          display: 'flex',
          margin: '5rem',
          border: 'solid #778a77 5px',
          flexDirection: 'row-reverse',
        }}
      >
        <p
          style={{
            fontSize: '1.5rem',
            padding: '4rem',
            textAlign: 'center',
          }}
        >
          <h2> Personlig träning</h2>
          Personlig träning för dig som önskar få hjälp med att nå nya mål med
          din träning och utveckla din fysiska förmåga eller för dig som vill
          komma igång med träningen på ett hållbart och säkert sätt. Vi bygger
          upp ett tränings-program som passar just dig, antingen på gym, hemma
          eller ute eller online så du kan utföra träningen själv med hjälp utav
          ett träningsprogram som du kan ha i en app i telefonen. Hör av dig
          till mig på så hittar vi ett upplägg som passar dig.
        </p>
        <img src={workout2} alt="workout" height={600} />
      </div>
      <div className="quote">
        <p className="about-intro">
          <strong>
            <span class="material-symbols-outlined">format_quote</span>
            Jag brinner för att peppa, inspirera och älskar att se hur individen
            utvecklas och vågar ta sig utanför sin comfortzone och framförallt
            hjälpa till att skapa starka & hållbara kroppar.{' '}
            <span class="material-symbols-outlined">format_quote</span>
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Products;
