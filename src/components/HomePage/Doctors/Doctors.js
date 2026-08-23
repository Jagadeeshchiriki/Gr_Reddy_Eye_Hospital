import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Doctors.css";
import doctor1 from "../../../assets/images/HomePage/doctor1.jpg";
import doctor2 from "../../../assets/images/HomePage/doctor2.jpg";

gsap.registerPlugin(ScrollTrigger);

const doctors = [
  {
    name: "Dr. Ramachandra Reddy",
    role: "Senior Consultant Ophthalmologist",
    image: doctor1,
    description:
      "Delivering Trusted, Compassionate, and advanced eye care for over four decades while shaping the future of ophthalmology through education, research, and clinical excellence.",
    num: "01",
  },
  {
    name: "Dr. Sandeep Reddy",
    role: "Senior Cataract & Retina Specialist",
    image: doctor2,
    description:
      "Delivering Trusted, Compassionate, and advanced eye care with a focus on cataract and retinal surgery, combining clinical expertise with compassionate patient care.",
    num: "02",
  },
];

const Doctors = () => {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".doctor-card");

      // Ensure track starts at x=0 — no premature movement
      gsap.set(track, { x: 0 });

      // Slide distance = card width + gap between cards
      const getSlideDistance = () => {
        const card = cards[0];
        if (!card) return 0;
        const gap = parseFloat(getComputedStyle(track).gap) || 32;
        return card.offsetWidth + gap;
      };

      // ─────────────────────────────────────────────────────────
      // ONLY moves when user scrolls — no snap, no anticipatePin
      // Both of those cause movement before/outside scroll intent
      // ─────────────────────────────────────────────────────────
      gsap.to(track, {
        x: () => -getSlideDistance() * (cards.length - 1),
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

    }, section);

    return () => ctx.revert();
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
                  <span className="doctor-num">{doc.num}</span>
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