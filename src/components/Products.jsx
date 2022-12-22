import outdoor from './assets/outdoor.png';
import pt_online from './assets/pt_online.png';
import './Products.css';

function Products() {
  return (
    <div className="products-container">
      <h1>Tjänster</h1>
      <div className="outdoor">
        <p>
          <strong>Utomhusträning</strong> <br />
          Jag startade utomhusträningen hösten 2020 då det fanns utmaningar till
          att vara inomhus på ett gym, sedan dess har vi kört på i alla väder
          med träning ca 2 ggr/v året om. Träningen hos mig är varierande då ett
          pass är aldrig det andra likt. Träningen sker med kroppsvikt,
          gummiband, kettlebells, bollar, hantlar m.m. <br /> Det är viktigt för
          mig att alla ska känna sig inkluderade och att jag hjälper just dig
          till att anpassa träningen efter din nivå samt hjälper till ifall man
          har skada eller liknande. <br /> <strong> ALLA </strong>kan vara med
          och mår bra utav rörelse & att vi har väldigt kul tillsammans är ett
          stort plus. <br /> Klicka här för se{' '}
          <a href="https://www.facebook.com/boost.by.jossan/events">
            Kommande träningspass
          </a>
        </p>
        <img src={outdoor} alt="outdoorworkout" width={500} />
      </div>
      <div className="pt">
        <p>
          <strong>Personlig träning / Online träning </strong>
          <br />
          Personlig träning för dig som önskar få hjälp med att nå nya mål med
          din träning och utveckla din fysiska förmåga eller för dig som vill
          komma igång med träningen på ett hållbart och säkert sätt. Vi bygger
          upp ett tränings-program som passar just dig, antingen på gym, hemma
          eller ute eller online så du kan utföra träningen själv med hjälp utav
          ett träningsprogram som du kan ha i en app i telefonen. Hör av dig
          till mig på{' '}
          <a href="mailto:boostbyjossan@outlook.com">
            boostbyjossan@outlook.com
          </a>{' '}
          så hittar vi ett upplägg som passar dig.
        </p>
        <img src={pt_online} alt="ptonline" width={400} />
      </div>
    </div>
  );
}

export default Products;
