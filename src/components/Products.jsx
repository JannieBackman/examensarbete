import workout from "../components/assets/DSC05312.JPG";
import workout2 from "../components/assets/DSC05584.JPG";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "./Products.css";
import { React, useEffect, useState } from "react";
import Review from "./Review";

export function ProductHeader() {
  return (
    <div className='product-header'>
      <h1> Tjänster</h1>
    </div>
  );
}

export function ProductTop() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 790px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 790px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);
  return (
    <div className='products-container' id='product-section'>
      <div className='outdoor-content'>
        <div className='outdoor-text'>
          <h2> Utomhusträning</h2>
          <p>
            Jag startade utomhusträningen hösten 2020 då det fanns utmaningar
            till att vara inomhus på ett gym, sedan dess har vi kört på i alla
            väder med träning ca 2 ggr/v året om.
          </p>
          {!isMobile ? (
            <p>
              Träningen hos mig är varierande då ett pass är aldrig det andra
              likt. Träningen sker med kroppsvikt, gummiband, kettlebells,
              bollar, hantlar m.m. <br /> Det är viktigt för mig att alla ska
              känna sig inkluderade och att jag hjälper just dig till att
              anpassa träningen efter din nivå samt hjälper till ifall man har
              skada eller liknande. <br /> <strong> ALLA </strong>kan vara med
              och mår bra utav rörelse & att vi har väldigt kul tillsammans är
              ett stort plus.
            </p>
          ) : (
            <div className='collapse-section'>
              <Button
                style={{
                  backgroundColor: "#9eb89e",
                  border: "none",
                  marginBottom: "1rem",
                }}
                onClick={() => setOpen(!open)}
                aria-controls='textOne'
                aria-expanded={open}
              >
                Läs mer
              </Button>
              <Collapse in={open}>
                <div id='textOne'>
                  <p className='outdoor-text'>
                    Träningen hos mig är varierande då ett pass är aldrig det
                    andra likt. Träningen sker med kroppsvikt, gummiband,
                    kettlebells, bollar, hantlar m.m. <br /> Det är viktigt för
                    mig att alla ska känna sig inkluderade och att jag hjälper
                    just dig till att anpassa träningen efter din nivå samt
                    hjälper till ifall man har skada eller liknande. <br />{" "}
                    <strong> ALLA </strong>kan vara med och mår bra utav rörelse
                    & att vi har väldigt kul tillsammans är ett stort plus.
                  </p>
                </div>
              </Collapse>
            </div>
          )}
        </div>

        <img src={workout} alt='workout' height={600} />
      </div>
      <Review />
    </div>
  );
}
export function ProductBottom() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 790px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 790px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);
  return (
    <div className='products-container' id='product-section'>
      <div className='pt-content'>
        <div className='pt-text'>
          <h2> Personlig träning</h2>
          <p>
            Personlig träning för dig som önskar få hjälp med att nå nya mål med
            din träning och utveckla din fysiska förmåga eller för dig som vill
            komma igång med träningen på ett hållbart och säkert sätt.
          </p>
          {!isMobile ? (
            <p>
              Vi bygger upp ett tränings-program som passar just dig, antingen
              på gym, hemma eller ute eller online så du kan utföra träningen
              själv med hjälp utav ett träningsprogram som du kan ha i en app i
              telefonen. Hör av dig till mig på så hittar vi ett upplägg som
              passar dig.
            </p>
          ) : (
            <div>
              <div className='collapse-section'>
                <Button
                  style={{
                    backgroundColor: "#9eb89e",
                    border: "none",
                    marginBottom: "1rem",
                  }}
                  onClick={() => setOpen(!open)}
                  aria-controls='textTwo'
                  aria-expanded={open}
                >
                  Läs mer
                </Button>
                <Collapse in={open}>
                  <div id='textTwo'>
                    <p>
                      Vi bygger upp ett tränings-program som passar just dig,
                      antingen på gym, hemma eller ute eller online så du kan
                      utföra träningen själv med hjälp utav ett träningsprogram
                      som du kan ha i en app i telefonen. Hör av dig till mig på
                      så hittar vi ett upplägg som passar dig.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
          )}
        </div>
        <img src={workout2} alt='workout' height={600} />
      </div>
      <div className='quote-content'>
        <p className='quote-text'>
          <strong>
            <span class='material-symbols-outlined'>format_quote</span>
            Jag brinner för att peppa, inspirera och älskar att se hur individen
            utvecklas och vågar ta sig utanför sin comfortzone och framförallt
            hjälpa till att skapa starka & hållbara kroppar.{" "}
            <span class='material-symbols-outlined'>format_quote</span>
            <p>-Josefin</p>
          </strong>
        </p>
      </div>
    </div>
  );
}
