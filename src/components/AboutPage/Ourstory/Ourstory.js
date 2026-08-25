import React from "react";
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
  
];

export function OurStory() {
  return (
    <div className="our-story">
      <div className="our-story-container">

        {/* ── Left Sidebar (Sticky) ── */}
        <div className="our-story-sidebar">
          <div className="our-story-sticky">
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
              viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
              transition={{
                duration: 0.85,
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