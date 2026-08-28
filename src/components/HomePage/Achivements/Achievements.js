import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DESKTOP_MQ } from "../../../utils/breakpoints";
import "./Achievements.css";
import awward1 from "../../../assets/images/HomePage/awward1.png";
import awward2 from "../../../assets/images/HomePage/awward2.png";
import awward3 from "../../../assets/images/HomePage/awward3.png";
import awward4 from "../../../assets/images/HomePage/awward4.png";
import awward5 from "../../../assets/images/HomePage/awward51.jpeg";
import awward6 from "../../../assets/images/HomePage/awward6.png";

gsap.registerPlugin(ScrollTrigger);

const awards = [
  {
    id: 1,
    image: awward1,
    title: "EyeCon 2025 – Guntur",
    desc: "Participation at the EyeCon 2025 conference organized by the Guntur Ophthalmological Society.",
  },
  {
    id: 2,
    image: awward2,
    title: "Glaucoma Society of India – 2022",
    desc: "Participation at the 31st Annual Conference of the Glaucoma Society of India.",
  },
  {
    id: 3,
    image: awward3,
    title: "GSI Book Launch – 2024",
    desc: "Book launch of OCT & Visual Fields in Glaucoma at the GSI inaugural function.",
  },
  {
    id: 4,
    image: awward4,
    title: "ZEISS China Visit – 2024",
    desc: "Visit to ZEISS China for professional exchange and collaboration.",
  },
  {
    id: 5,
    image: awward5,
    title: "International Heroes – AIOC 2018",
    desc: "International recognition at the Asia-Pacific Academy of Ophthalmology Congress.",
  },
  {
    id: 6,
    image: awward6,
    title: "APAO 2018 – Hong Kong",
    desc: "International recognition at the Asia-Pacific Academy of Ophthalmology Congress.",
  },
];

const Achievements = () => {
  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const cardsRef    = useRef([]);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop only. The +/-120vw entrance is the biggest source of
    // jank on phones, so at <=1024px the cards simply render in place.
    mm.add(DESKTOP_MQ, () => {

      // ── Heading slides up on enter ──
      gsap.set(headingRef.current, { opacity: 0, y: 50 });

      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // ── Cards: left col slides from far left, right col from far right ──
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const isLeft = index % 2 === 0;

        // Start position: completely outside the viewport
        gsap.set(card, {
          x: isLeft ? "-120vw" : "120vw",
          opacity: 0,
        });

        gsap.to(card, {
          x: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          delay: Math.floor(index / 2) * 0.15, // row stagger
        });
      });

    });

    return () => mm.revert();
  }, []);

  return (
    <section className="ach-section" ref={sectionRef}>
      <div className="ach-container">

        {/* Heading */}
        <div className="ach-heading" ref={headingRef}>
          <h2 className="ach-title">
            Our Achievements &amp;<br />
            Recognitions
          </h2>
        </div>

        {/* 2-column grid */}
        <div className="ach-grid">
          {awards.map((award, index) => (
            <div
              key={award.id}
              className="ach-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              {/* Image — grayscale by default, color on hover */}
              <img
                src={award.image}
                alt={award.title}
                className="ach-img"
              />

              {/* Dark gradient overlay at bottom */}
              <div className="ach-overlay" />

              {/* Text on top of image */}
              <div className="ach-text">
                <h3 className="ach-card-title">{award.title}</h3>
                <p className="ach-card-desc">{award.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;