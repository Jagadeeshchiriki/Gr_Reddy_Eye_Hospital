import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Doctors.css";
import doctor1 from "../../../assets/images/HomePage/doctor1.avif";
import doctor2 from "../../../assets/images/HomePage/doctor21.avif";

gsap.registerPlugin(ScrollTrigger);

const doctors = [
  {
    name: "Dr. Ramachandra Reddy",
    role: "Senior Consultant Ophthalmologist",
    image: doctor1,
    description:
      "One of the most respected names in ophthalmology with over 40 years of clinical experience and a legacy of academic trust excellence.",
    description2:
      "His dedication to patient care and deep understanding of advanced ocular procedures have consistently set a high standard for eye care across the region."
  },
  {
    name: "Dr. Sandeep Reddy",
    role: "Senior Cataract & Retina Specialist",
    image: doctor2,
    description:
      "A specialist in both Cataract and Retina Surgery, a rare combination of expertise enabling the management of complex eye conditions.",
    description2:
      "With extensive training in modern surgical techniques, he brings a high level of precision and compassionate care to every patient he treats."
  },
];

const Doctors = () => {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    // Apply animation to all screen sizes
    mm.add("(min-width: 0px)", () => {
      const cards = gsap.utils.toArray(".doctor-card");

      // Ensure track starts at x=0 — no premature movement
      gsap.set(track, { x: 0 });

      // ─────────────────────────────────────────────────────────
      // ONLY moves when user scrolls — no snap, no anticipatePin
      // Both of those cause movement before/outside scroll intent
      //
      // offsetLeft of the last card IS the exact translate that lands
      // it flush at the left edge, whatever the card width or gap —
      // no width + gap arithmetic to overshoot on narrow viewports.
      // ─────────────────────────────────────────────────────────
      gsap.to(track, {
        x: () => {
          const last = cards[cards.length - 1];
          return last ? -last.offsetLeft : 0;
        },
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * (cards.length - 1)}`,
          pin: true,
          scrub: 1.5,           // smooth 1:1 scroll coupling
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="doctors-section" ref={sectionRef}>
      <div className="doctors-wrapper">

        {/* Header */}
        <div className="doctors-header">
          <h2 className="doctors-heading">Meet Our Eye Care Experts</h2>
        </div>

        {/* Card Track */}
        <div className="doctors-viewport">
          <div className="doctors-track" ref={trackRef}>
            {doctors.map((doc) => (
              <article className="doctor-card" key={doc.name}>

                {/* Photo — large, rounded inside */}
                <div className="doctor-photo-wrap">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="doctor-img"
                  />
                </div>

                {/* Content */}
                <div className="doctor-content">
                  <div className="doctor-text-top">
                    <h3 className="doctor-name">{doc.name}</h3>
                    <p className="doctor-role">{doc.role}</p>
                  </div>
                  <p className="doctor-desc">{doc.description}</p>
                  {doc.description2 && (
                    <p className="doctor-desc doctor-desc-extra" style={{ marginTop: "1rem" }}>
                      {doc.description2}
                    </p>
                  )}
                </div>

              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Doctors;
