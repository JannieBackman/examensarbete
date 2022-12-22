import outdoor from './assets/outdoor.png';
import pt_online from './assets/pt_online.png';

function Products() {
  return (
    <div>
      <h1>Tjänster</h1>
      <div>
        <p>
          <strong>Utomhusträning</strong> <br />
          Jag startade utomhusträningen hösten 2020 då det fanns utmaningar till
          att vara inomhus på ett gym, sedan dess har vi kört på i alla väder
          med träning ca 2 ggr/v året om. Träningen hos mig är varierande då ett
          pass är aldrig det andra likt. Träningen sker med kroppsvikt,
          gummiband, kettlebells, bollar, hantlar m.m. Det är viktigt för mig
          att alla ska känna sig inkluderade och att jag hjälper just dig till
          att anpassa träningen efter din nivå samt hjälper till ifall man har
          skada eller liknande. ALLA kan vara med och mår bra utav rörelse & att
          vi har väldigt kul tillsammans är ett stort plus. klicka här för se
          kommande träningspass <a>Kommande träningspass</a>
        </p>
        <img src={outdoor} alt="outdoorworkout" />
      </div>
      <div>
        <p>
          <strong>Personlig träning / Online träning </strong>
          <br />
          Personlig träning för dig som önskar få hjälp med att nå nya mål med
          din träning och utveckla din fysiska förmåga eller för dig som vill
          komma igång med träningen på ett hållbart och säkert sätt. Vi bygger
          upp ett tränings-program som passar just dig, antingen på gym, hemma
          eller ute eller online så du kan utföra träningen själv med hjälp utav
          ett träningsprogram som du kan ha i en app i telefonen. Hör av dig
          till mig på boostbyjossan@outlook.com så hittar vi ett upplägg som
          passar dig.
        </p>
        <img src={pt_online} alt="ptonline" />
      </div>
    </div>
  );
}

export default Products;
