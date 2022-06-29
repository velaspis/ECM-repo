import { useState, useEffect } from "react";
import Profile from "./profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
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
  generations-
  <br>übergreifende Projekte zu realisieren.
  <br />
  Die Entwicklung deiner Innovations- und Führungskraft steht im
  Mittelpunkt.<br/>
  Wir setzen der Vision einen Rahmen und gehen gemeinsam in die<br/>
  Verwirklichungsphase. Dein Potenzial ist das kostbarste Gut.`,

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

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  function handleScroll() {
    setScrollPosition(
      (100 * window.scrollY) /
        (document.body.scrollsHeight - window.innerHeight)
    );
  }
  AOS.init();

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
    offset: 300, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
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
        <h3 className="mid-top">MONIKA SZPIECH</h3>
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
            <h1 data-aos="fade-right">
              Tell me your dream
              <br /> and let`s see if they can be real
            </h1>
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
              Mentale Begleitung - Erkenntnisse der Bewusst-
              <br />
              werdung
            </li>

            <li data-aos="fade-left">
              Systema- <br />
              tische Konzept-
              <br />
              entwicklung und Begleitung
              <br />
              in der Verwirklich-
              <br />
              ungsphase.
            </li>
            <li data-aos="fade-left">
              Repräsenta-
              <br />
              tion im Netzwerk und Erschließung neuer Human Resources
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
          <img data-aos="zoom-in" src={Profile} />
        </div>
        <div className="right1">
          <ul>
            <li>
              <h3 className="right-h3" data-aos="fade-left">
                Geschäftsführerin 2015 -2020
              </h3>
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
      <div className="mid-page">
        <h3 className="circletop">highlight</h3>
        <h2>
          Es geht um dein Projekt <br />&<br /> die beste VERSION deiner selbst
        </h2>
      </div>
      <div className="doublepage1">
        <div className="left2">
          <section>
            <h2 data-aos="fade-right">
              Führung
              <br /> &<br />
              Organisation
            </h2>
            <h2>
              mit Herz <br />&<br />
              Verstand
            </h2>
          </section>
        </div>
        <div className="right2">
          <div className="top-right">
            <div className="cont">
              <div className="dot"></div>
              <h1 className="main-tp-r" data-aos="fade-in">
                ICH
              </h1>
            </div>
          </div>
          <div className="bottom-right">
            <div className="cont">
              <div className="dot"></div>
              <h1 className="main-btm-r" data-aos="fade-in">
                <h>I</h>
                <h>C</h>
                <h>H</h>
              </h1>
              <p data-aos="fade-left">
                Zukunftsorientiertes - ganzheitliches,
                <br /> analytisches Denken aller
                <br />
                Zusammenhänge
                <br /> &<br /> starke Visualisierungs- und
                <br /> Verwirklichungsgabe von Konzepten & Projekten
              </p>
            </div>
          </div>
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
  );
}

export default App;
