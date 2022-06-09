// Importing necessary modules and files
import { useState, useEffect } from "react";
import Profile from "./profile.jpg"; // image file
import AOS from "aos"; // animation library
import "aos/dist/aos.css"; // CSS file for AOS
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
} from "react-scroll-motion"; // library for scroll-based animations
import "./App.scss"; // SCSS file for styling the web page
// Creating animation constants
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const data = {
  leadertext: `Beraterin für Initiatoren & Förderer um nachhaltige und<br/>       
  generations
  übergreifende Projekte zu realisieren.
  <br />
  Die Entwicklung deiner Innovations- und Führungskraft steht im
  Mittelpunkt.<br/>
  Wir setzen der Vision einen Rahmen und gehen gemeinsam in die<br/>
  Verwirklichu
  ngsphase. Dein Potenzial ist das kostbarste Gut.`,

  leadertext2: `Projekte können nicht groß genug sein, besonders wenn es um Kinder<br/>
  und Junge Menschen geht, das berührt mein Herz.<br/>
  Zu mir gehören drei große Gaben:<br/>
  Vorstellungskraft, Übersetzung in ein darstellbaren Projektrahmen,<br/>
  Realisierung & Durchhalten, alles erprobt in meinem Leben. <br/>   
  <br/> 
  <br/> 
Deine Tatenkraft wird dich leiten und ich darf dich begleiten.<br/>
  Vielen Dank dafür.  `,
};

// Main component function
function App() {
  const [scrollPosition, setScrollPosition] = useState(0); // State variable to track scroll position
  function handleScroll() { // Function to handle scroll event and update the scroll position state variable
  setScrollPosition(
  (100 * window.scrollY) / (document.body.scrollHeight - window.innerHeight)
  );
  }
  AOS.init(); // Initializing the AOS library

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
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
    <body>
      <div className="container">
        <div className="top-page">
          <div data-aos="zoom-out-down" className="text">
            <p>I</p>
            <p>C</p>
            <p>H</p>
          </div>
          <div className="foot">IMAGINATION CREATOR HEAD</div>
        </div>

        <div className="mid-page">
          <h2 data-aos="new-animation">
            Alles ist MÖGLICH !<br></br>
            Man muss nur wissen wie !
            <br />
            Fang an, GROSS zu denken und
            <br />
            gewöhn dich dran !
          </h2>
          <h3>MONIKA SZPIECH</h3>
        </div>

        <div className="doublepage">
          <div data-aos="fade-right" className="left">
            <section>
              <h2 data-aos="fade-right">
                Gemeinsam gestallten wir alles was du dir vorgenom men hast.
              </h2>
              <h2 data-aos="fade-right">
                Ich werde dich kitzeln und ungeahntes aus dir rausholen.
              </h2>
            </section>
            <div data-aos="fade-right" className="bottom">
              <h1>Tell me your dream and let`s see if they can be real</h1>
            </div>
          </div>
          <div className="right">
            <h1 data-aos="fade-in">Leader</h1>
            <p
              data-aos="fade-left"
              dangerouslySetInnerHTML={{ __html: data.leadertext }}
            />
            <ul>
              <li data-aos="fade-left">
                Mentale Begleitung - Erkenntnisse der Bewusstwe rdung
              </li>

              <li data-aos="fade-left">
                Systemat ische Konzepten twicklung und Begleitung
                <br />
                in der Verwirklich ungsphase.
              </li>
              <li data-aos="fade-left">
                Repräsenta tion im Netzwerk und Erschließung neuer Human
                Resources
              </li>
              <li data-aos="fade-left">
                Beratung bei Realisierung und Anpassung der Prozesse bis zu 6
                Monaten.
              </li>
            </ul>
            <div className="bottom-right">
              <h1 data-aos="fade">“Imagination Creator Head"</h1>

              <p
                data-aos="fade-left"
                dangerouslySetInnerHTML={{ __html: data.leadertext2 }}
              />
            </div>
          </div>
        </div>

        <div className="Meine-Projekte">
          <div className="left">
            <h1 data-aos="fade-down">Meine Projekte</h1>
            <h2 data-aos="fade-up">10 Jahres Rückblick</h2>
          </div>
          <div className="middle">
            <div>
              <img data-aos="zoom-in" src={Profile} />
            </div>
          </div>
          <div className="right1">
            <ul>
              <li>
                <h3 className="right-h3">Geschäftsführerin 2015 -2020</h3>
                <p data-aos="fade-left">
                  “Eco Food Makers UG” Braunschweig / Germany Hochwertige
                  Lebensmittel Herstellung für gesundheitsbewusste
                  Großstadtmenschen. Geschäftsstellen Innenstadt Braunschweig
                  "Bellybuttonfood" & "Hauskaffee" im Landgericht Braunschweig.
                </p>
              </li>
              <li>
                <h3 className="right-h3">Inhaberin 2012 -2015</h3>
                <p data-aos="fade-left">
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
      </div>
    </body>
  );
}

export default App;
