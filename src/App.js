import "./App.css";
import React, { useEffect } from "react";
import Portimage from "./flowerimg.png";

function App() {
  useEffect(() => {
    const logocircle = document.querySelector(".portcircle");
    const overlay = document.querySelector(".overlay");
    const portimage = document.querySelector(".portimage img");
    logocircle.addEventListener("mouseover", () => {
      overlay.style.opacity = 1;
      logocircle.style.backgroundColor = "white";
      portimage.style.opacity = 1;
    });
    logocircle.addEventListener("mouseleave", () => {
      overlay.style.opacity = 0;
      logocircle.style.backgroundColor = "transparent";
      portimage.style.opacity = 0;
    });
  });

  return (
    <div className="App">
      <div className="overlay"></div>
      <div className="Portlogo">
        <div className="portimage">
          <img src={Portimage} alt="" />
          <div className="portcircle">
            <div>E</div>
            <div className="logoSecondLetter">P</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
