import React, { useState } from "react";
import "./Herocomponent.css";
import HospitalImg from "../../../assets/images/AboutUsPage/hospital1.png";

const Herocomponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="hero-section">
      <img
        src={HospitalImg}
        alt="Clear vision today for a brighter tomorrow"
        className={`hero-img ${isLoaded ? "loaded" : ""}`}
        onLoad={() => setIsLoaded(true)}
      />
    </section>
  );
};

export default Herocomponent;
