import { useState, useEffect } from "react";
import Profile from "./profile.jpg";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import "./App.scss";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const data = {
  leadertext: `Beraterin für Initiatoren & Förderer um nachhaltige und<br/>       
  generationsübergreifende Projekte zu realisieren.
  <br />
  Die Entwicklung deiner Innovations- und Führungskraft steht im
  Mittelpunkt.<br/>
  Wir setzen der Vision einen Rahmen und gehen gemeinsam in die<br/>
  Verwirklichungsphase. Dein Potenzial ist das kostbarste Gut.`,

  leadertext2: `Projekte können nicht groß genug sein, besonders wenn es um Kinder<br/>
  und Junge Menschen geht, das berührt mein Herz.<br/>
  Zu mir gehören drei große Gaben:<br/>
  Vorstellungskraft, Übersetzung in ein darstellbaren Projektrahmen,<br/>
  Realisierung & Durchhalten, alles erprobt in meinem Leben. `,
  leadertextS: `Deine Tatenkraft wird dich leiten und ich darf dich begleiten.<br/>
  Vielen Dank dafür.  `,
};

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  function handleScroll() {
    setScrollPosition(
      (100 * window.scrollY) / (document.body.scrollHeight - window.innerHeight)
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  return (
    <ScrollContainer className="container">
      <ScrollPage page={0}>
        <div className="top-page">
          <Animator animation={Zoom(1, 1.2)}>
            <div className="text">
              <p>I</p>
              <p>C</p>
              <p>H</p>
            </div>
          </Animator>
        </div>
        <div className="foot">IMAGINATION CREATOR HEAD</div>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={batch(Zoom(1, 1.24))}>
          <div className="mid-page">
            <h2>
              IMAGINATION CREATOR HEAD Alles ist MÖGLICH !<br></br>
              Man muss nur wissen wie !
              <br />
              Fang an, GROSS zu denken und
              <br />
              gewöhn dich dran !
            </h2>
            <h3>MONIKA SZPIECH</h3>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeIn(0, 1)}>
          <div className="doublepage">
            <div className="left">
              <section>
                <h2>
                  Gemeinsam gestallten wir alles was du dir vorgenom men hast.
                </h2>
                <h2>
                  Ich werde dich kitzeln und ungeahntes aus dir rausholen.
                </h2>
              </section>
              <div className="bottom">
                <h1>Tell me your dream and let`s see if they can be real</h1>
              </div>
            </div>
            <div className="right">
              <h1>Leader</h1>
              <p dangerouslySetInnerHTML={{ __html: data.leadertext }} />
              <ul>
                <li>Mentale Begleitung - Erkenntnisse der Bewusstwerdung</li>

                <li>
                  Systematische Konzeptentwicklung und Begleitung
                  <br />
                  in der Verwirklichungsphase.
                </li>
                <li>
                  Repräsentation im Netzwerk und Erschließung neuer Human
                  Resources
                </li>
                <li>
                  Beratung bei Realisierung und Anpassung der Prozesse bis zu 6
                  Monaten.
                </li>
              </ul>
              <div className="bottom-right">
                <h1>“Imagination Creator Head"</h1>
                <p dangerouslySetInnerHTML={{ __html: data.leadertext2 }} />
                <p dangerouslySetInnerHTML={{ __html: data.leadertextS }} />
              </div>
            </div>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeIn(0, 1)}>
          <div className="Meine-Projekte">
            <div className="left">
              <h1>Meine Projekte</h1>
              <h2>10 Jahres Rückblick</h2>
            </div>
            <div className="middle">
              <div>
                <img src={Profile} />
              </div>
            </div>
            <div className="right1">
              <ul>
                <li>
                  <h3>Geschäftsführerin 2015 -2020</h3>
                  <p>
                    “Eco Food Makers UG” Braunschweig / Germany Hochwertige
                    Lebensmittel Herstellung für gesundheitsbewusste
                    Großstadtmenschen. Geschäftsstellen Innenstadt Braunschweig
                    "Bellybuttonfood" & "Hauskaffee" im Landgericht
                    Braunschweig.
                  </p>
                </li>
                <li>
                  <h3>Inhaberin 2012 -2015</h3>
                  <p>
                    Einzelunternehmen “LorVel” Salat & Suppenbar im
                    Gesundheitszentrum
                    <br />
                    Schlosscarree
                    <br />
                    Braunschweig. Fast Casual Food. Basische Vollwert Ernährung.
                    Coaching für Prävention & Bewusstsein.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeIn(0, 1)}>
          <div className="kontakt">
            <span className="h2">
              <h2>TEILE MIR MIT WAS DU MÖCHTEST</h2>
            </span>
            <span className="p">
              <p>Stell mir dein Projekt direkt vor</p>
              <p>Kennenlernen 15 Min. Call</p>
            </span>
            <span className="h1">
              <h1>Kontakt</h1>
            </span>
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
