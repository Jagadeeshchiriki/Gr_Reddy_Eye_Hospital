import React from "react";
import eye1 from "../../../assets/images/HomePage/eye1.png";
import "./Intro.css";

function Intro() {
  return (
    <section className="intro-container">
      <div className="intro-wrapper">
        <img src={eye1} alt="Eye Iris" className="intro-eye-img" />
        <div className="intro-text-overlay">
          <h1 className="intro-title">
            See the world as clearly
            <br />
            as you remember it
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Intro;
