import outdoorTraining from './assets/39.png';
import pt_online from './assets/40.png';
import './Products.css';
import Button from 'react-bootstrap/Button';

function Products() {
  return (
    <div className="products-container" id="product-section">
      <h1>Tjänster</h1>
      <p className="intro">
        Jag startade utomhusträningen hösten 2020 då det fanns utmaningar till
        att vara inomhus på ett gym, sedan dess har vi kört på i alla väder med
        träning ca 2 ggr/v året om. Träningen hos mig är varierande då ett pass
        är aldrig det andra likt.
      </p>

      <div className="outdoor">
        <div>
          <h3>Utomhusträning</h3> <br />
          <p>
            Träningen sker med kroppsvikt, gummiband, kettlebells, bollar,
            hantlar m.m. <br /> Det är viktigt för mig att alla ska känna sig
            inkluderade och att jag hjälper just dig till att anpassa träningen
            efter din nivå samt hjälper till ifall man har skada eller liknande.{' '}
            <br /> <strong> ALLA </strong>kan vara med och mår bra utav rörelse
            & att vi har väldigt kul tillsammans är ett stort plus. <br />{' '}
            <Button
              variant="dark"
              href="https://fb.me/e/3RmOhc2SH"
              style={{ marginTop: '1rem' }}
            >
              Kommande pass
            </Button>
          </p>
        </div>

        <div>
          <img src={outdoorTraining} alt="outdoorworkout" />
        </div>
      </div>

      <div className="pt">
        <div>
          <h3>Personlig träning / Online träning </h3>
          <p>
            <br />
            Personlig träning för dig som önskar få hjälp med att nå nya mål med
            din träning och utveckla din fysiska förmåga eller för dig som vill
            komma igång med träningen på ett hållbart och säkert sätt. Vi bygger
            upp ett tränings-program som passar just dig, antingen på gym, hemma
            eller ute eller online så du kan utföra träningen själv med hjälp
            utav ett träningsprogram som du kan ha i en app i telefonen. Hör av
            dig till mig på så hittar vi ett upplägg som passar dig.
          </p>
        </div>

        <div>
          <img src={pt_online} alt="ptonline" />
        </div>
      </div>
    </div>
  );
}

export default Products;
