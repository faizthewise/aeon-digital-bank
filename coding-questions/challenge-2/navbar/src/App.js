import "./App.css";
import { useState } from "react";

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="topBar">
      <div className="mobileHeader">
        <a href="/">AEON</a>
        <div className="iconGroup">
          <div className="icon">&#128269;</div>
          <div className="icon" onClick={toggleMenu}>
            {isMenuActive ? "✕" : "☰"}
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div className="innerContainer">
        <nav className={isMenuActive ? "active" : ""}>
          <a href="/">Showcase</a>
          <a href="/">Docs</a>
          <a href="/">Analytics</a>
          <a href="/">Templates</a>
          <a href="/">Enterprise</a>
        </nav>
        <input placeholder="Search documentation" id="search" />
      </div>
    </div>
  );
}

export default App;
