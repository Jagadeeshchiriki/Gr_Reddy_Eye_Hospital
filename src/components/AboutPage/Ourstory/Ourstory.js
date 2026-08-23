import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import "./Ourstory.css";

const sections = [
  {
    id: "expert-eye-care",
    title: "Expert eye care",
    description:
      "For over five decades, we've delivered trusted, compassionate eye care with modern expertise.",
    bullets: [
      { title: "Experienced Doctors", text: "Decades of expertise in advanced ophthalmic care" },
      { title: "Advanced Technology", text: "Modern technology for diagnosis and treatment" },
      { title: "Complete Care", text: "Comprehensive services for every stage of vision care" },
    ],
  },
  {
    id: "care-that-connects",
    title: "Care that connects every step",
    description:
      "From your first consultation to follow-up care, we make your eye-care journey simple, comfortable, and well coordinated. Our team works together to deliver the right care at every stage.",
    bullets: [
      { title: "Digital Records", text: "Secure medical records for seamless and connected care" },
      { title: "Modern Facilities", text: "Comfortable spaces designed around patient needs" },
      { title: "Patient First", text: "Clear guidance, personal attention, and dedicated support" },
    ],
  },
  {
    id: "advanced-technology",
    title: "Advanced technology. Better vision.",
    description:
      "We combine decades of ophthalmic expertise with modern equipment and proven treatment methods to provide safe, precise, and personalized eye care.",
    bullets: [
      { title: "Specialized Treatments", text: "Expert care across a wide range of eye conditions" },
      { title: "Precision Diagnosis", text: "Advanced tools for accurate eye examinations" },
      { title: "Continuous Excellence", text: "Modern practices guided by experience and innovation" },
    ],
  },
];

export function OurStory() {
  const sectionRef   = useRef(null); // the whole .our-story wrapper
  const sidebarRef   = useRef(null); // the inner sidebar content
  const [sidebarStyle, setSidebarStyle] = useState({});

  useEffect(() => {
    const HEADER_HEIGHT = 100; // px — clear the fixed header

    function onScroll() {
      const section  = sectionRef.current;
      const sidebar  = sidebarRef.current;
      if (!section || !sidebar) return;

      const sectionRect  = section.getBoundingClientRect();
      const sidebarHeight = sidebar.offsetHeight;
      const sectionHeight = section.offsetHeight;

      // How far the top of the section is from the viewport top
      const sectionTop = sectionRect.top;

      if (sectionTop > HEADER_HEIGHT) {
        // Section hasn't reached sticky point yet — normal flow
        setSidebarStyle({ position: "relative", top: "auto" });
      } else if (sectionTop <= HEADER_HEIGHT && sectionRect.bottom > sidebarHeight + HEADER_HEIGHT) {
        // Section is in range — fix the sidebar
        setSidebarStyle({
          position: "fixed",
          top: `${HEADER_HEIGHT}px`,
          width: sidebarRef.current?.parentElement?.offsetWidth + "px",
        });
      } else {
        // Section is ending — release the sidebar so it scrolls naturally
        setSidebarStyle({
          position: "absolute",
          top: `${sectionHeight - sidebarHeight-200}px`,
        });
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="our-story" ref={sectionRef}>
      <div className="our-story-container">

        {/* ── Left Sidebar ── */}
        <div className="our-story-sidebar">
          {/* This inner div gets the dynamic position style */}
          <div className="our-story-sticky" ref={sidebarRef} style={sidebarStyle}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="our-story-heading">Our Story</h2>
              <p className="our-story-tagline">
                Focused on your vision.
                <br />
                Committed to your care.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Right Scrollable Content ── */}
        <div className="our-story-content">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.85,
                delay: index === 0 ? 0.25 : 0,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="our-story-section"
            >
              <h3 className="our-story-section-title">{section.title}</h3>
              <p className="our-story-description">{section.description}</p>
              <ul className="our-story-bullets">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="our-story-bullet">
                    <span className="our-story-dot" />
                    <span className="our-story-bullet-text">
                      <strong>{bullet.title}:</strong> {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default OurStory;