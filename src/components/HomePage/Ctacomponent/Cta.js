import React from "react";
import "./Cta.css";
import ctaImage from "../../../assets/images/HomePage/CTA.avif";

const Cta = () => {
  return (
    <section className="cta-section">
      <img
        src={ctaImage}
        alt="Clear vision today for a brighter tomorrow"
        className="cta-img"
      />
    </section>
  );
};

export default Cta;
