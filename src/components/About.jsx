import aboutMeSquare from "./assets/DSC05500Kopia.JPG";
import aboutMeDesktop from "./assets/DSC05487.JPG";
import "./About.css";
import { React, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function About() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1020px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 1020px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);
  return (
    <div className='about-container' id='about-section'>
      <div className='about-img'>
        {!isMobile ? (
          <img src={aboutMeDesktop} alt='aboutme' height={600} />
        ) : (
          <img
            src={aboutMeSquare}
            className='aboutMeSquare-img'
            alt='aboutme'
          />
        )}

        <div className='about-content'>
          <div className='about-title'>
            <h4>Om mig</h4>{" "}
            <div className='about-text'>
              <p>
                Mitt namn är Josefin Lundqvist och är 34 år, bor i Kungsbacka,
                Björkris sedan 4 år tillbaka med sambo och två barn som är 8 och
                4 år. Jag har coachat gruppträningspass de senaste två åren och
                jag ÄLSKAR det!
              </p>
              {!isMobile ? (
                <div>
                  <p>
                    Själv hittade jag Crossfit efter min första förlossning och
                    "resa tillbaka" och älskar fortfarande träningen lika mycket
                    idag, skillnaden idag är att jag har under resans gång lärt
                    mig otroligt mycket om kroppen och vikten utav att "träna
                    rätt" framförallt efter att jag slet av mitt korsband på en
                    tävling 2021 som resulterande i operation och rehab.
                  </p>
                  <p>
                    Jag kör blandad träning så som löpning, crossfit och styrka
                    och min favvo övning är nog burpees. Träningen är även
                    viktig för mig i mitt yrke som kräver en hel del fysiskt.
                    Men också för att undvika skador och hålla kroppen frisk
                    länge.
                  </p>
                </div>
              ) : (
                <div className='collapse-section'>
                  <Button
                    style={{
                      backgroundColor: "#9eb89e",
                      border: "none",
                      marginBottom: "1rem",
                    }}
                    onClick={() => setOpen(!open)}
                    aria-controls='example-collapse-text'
                    aria-expanded={open}
                  >
                    Läs mer
                  </Button>
                  <Collapse in={open}>
                    <div id='example-collapse-text'>
                      <p>
                        Själv hittade jag Crossfit efter min första förlossning
                        och "resa tillbaka" och älskar fortfarande träningen
                        lika mycket idag, skillnaden idag är att jag har under
                        resans gång lärt mig otroligt mycket om kroppen och
                        vikten utav att "träna rätt" framförallt efter att jag
                        slet av mitt korsband på en tävling 2021 som
                        resulterande i operation och rehab.
                      </p>
                      <p>
                        Jag kör blandad träning så som löpning, crossfit och
                        styrka och min favvo övning är nog burpees. Träningen är
                        även viktig för mig i mitt yrke som kräver en hel del
                        fysiskt. Men också för att undvika skador och hålla
                        kroppen frisk länge.
                      </p>
                    </div>
                  </Collapse>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
