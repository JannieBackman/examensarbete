import outdoorTraining from "./assets/outdoorTraining.png";
import pt_online from "./assets/pt_online.png";
import "./Products.css";

function Products() {
  return (
    <div className='products-container' id='product-section'>
      <h1>Tjänster</h1>
      <div className='outdoor'>
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
          stort plus. <br /> Klicka här för se{" "}
          <strong>Kommande träningspass</strong>
        </p>
        <img src={outdoorTraining} alt='outdoorworkout' />
      </div>
      <div className='pt'>
        <p>
          <strong>Personlig träning / Online träning </strong>
          <br />
          Personlig träning för dig som önskar få hjälp med att nå nya mål med
          din träning och utveckla din fysiska förmåga eller för dig som vill
          komma igång med träningen på ett hållbart och säkert sätt. Vi bygger
          upp ett tränings-program som passar just dig, antingen på gym, hemma
          eller ute eller online så du kan utföra träningen själv med hjälp utav
          ett träningsprogram som du kan ha i en app i telefonen. Hör av dig
          till mig på <a href='mailto: email@email.se'>Email</a> så hittar vi
          ett upplägg som passar dig.
        </p>
        <img src={pt_online} alt='ptonline' />
      </div>

      <div className='b2b'>
        <p>
          <strong>Företagsträning </strong> <br />
          Är du sugen på att utmana & träna tillsammans med dina kollegor? Vill
          du som arbetsgivare hjälpa dina medarbetare till att bli piggare,
          starkare och må bättre? Jag erbjuder företagsträning både inomhus och
          utomhus. Att utmanas tillsammans med sina arbetskamrater är väldogt
          roligt och utvecklade samt skapar en bättre sammanhållning och dynamik
          i gruppen. Vill du ha en offert? <br /> Maila mig på
          <a href='mailto:'>Email</a>
        </p>
      </div>
    </div>
  );
}

export default Products;
