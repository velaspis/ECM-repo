import { useState } from "react";

import { useEffect } from "react";
import "./App.scss";
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
    <div className="container">
      <div className="top-page">
        <div className="text">
          <p>I</p>
          <p>C</p>
          <p>H</p>
        </div>
        <div className="foot">IMAGINATION CREATOR HEAD</div>
      </div>
      <div className="2nd-page">
        <p>
          IMAGINATION CREATOR HEAD Alles ist MÖGLICH !<br></br>
          Man muss nur wissen wie !
          <br />
          Fang an, GROSS zu denken und
          <br />
          gewöhn dich dran !
        </p>
      </div>
    </div>
  );
}

export default App;
