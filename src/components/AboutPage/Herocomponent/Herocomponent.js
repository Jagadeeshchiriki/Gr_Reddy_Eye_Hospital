import React from "react";
import "./Herocomponent.css";
import HospitalImg from "../../../assets/images/AboutUsPage/hospital1.png";

const Herocomponent = () => {
  return (
    <section className="hero-section">
      <img
        src={HospitalImg}
        alt="Clear vision today for a brighter tomorrow"
        className="hero-img"
      />
    </section>
  );
};

export default Herocomponent;
