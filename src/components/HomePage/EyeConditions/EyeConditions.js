import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DESKTOP_MQ } from "../../../utils/breakpoints";
import "./EyeConditions.css";
import cataractcondtion from "../../../assets/images/HomePage/cataractcondition.png";
import glaucomacondition from "../../../assets/images/HomePage/glaucomacondition.png";
import retinacondition from "../../../assets/images/HomePage/retinacondition.png";
import dryeyecondition from "../../../assets/images/HomePage/dryeyecondition.png";
import astigmatismcondition from "../../../assets/images/HomePage/astigmatismcondition.png";


gsap.registerPlugin(ScrollTrigger);

const EyeConditions = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const conditions = [
    {
      name: "Cataract",
      image:
        cataractcondtion,
      bg: "#28559c",
      color: "#fff",
    },
    {
      name: "Astigmatism",
      image:astigmatismcondition||
        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1800&q=90",
      bg: "#fee5a7",
      color: "#000",
    },
    {
      name: "Glaucoma",
      image:glaucomacondition||
        "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1800&q=90",
      bg: "#fff",
      color: "#28559c",
    },
    {
      name: "Dry Eye",
      image: dryeyecondition||
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1800&q=90",
      bg: "#28559c",
      color: "#fff",
    },
    {
      name: "Retina",
      image: retinacondition||
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1800&q=90",
      bg: "#eadfd5",
      color: "#111",
    },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const mm = gsap.matchMedia();

    // Desktop only. At <=1024px the track is a plain vertical column
    // (see EyeConditions.css) with every card already expanded, and no
    // scroll-jacking happens. matchMedia reverts the inline widths,
    // heights and opacities set below when the query stops matching.
    mm.add(DESKTOP_MQ, () => {
      const cards = gsap.utils.toArray(".ec-card");
      const intro = section.querySelector(".ec-intro");

      const vw = () => window.innerWidth;
      const vh = () => window.innerHeight;

      // ---------------------------------------------
      // CARD WIDTH
      // ---------------------------------------------

      const SMALL_WIDTH = () => vw() * 0.10;
      const FULL_WIDTH = () => vw() * 0.58;

      // ---------------------------------------------
      // IMAGE
      // ---------------------------------------------

      const SMALL_IMAGE_HEIGHT = () => vh() * 0.20;
      const MAX_IMAGE_HEIGHT = () => vh() * 0.65;

      // ---------------------------------------------
      // INITIAL STATE
      //
      // Re-applied on every ScrollTrigger refresh so the width of the
      // first card tracks the viewport instead of freezing at its
      // mount-time value (onUpdate deliberately skips index 0).
      // ---------------------------------------------

      const setInitial = () => {
        cards.forEach((card, index) => {
          const imageWrap = card.querySelector(".ec-image-wrap");
          const title = card.querySelector(".ec-name");

          if (index === 0) {
            // First card starts already half expanded

            gsap.set(card, {
              width: FULL_WIDTH(),
            });

            gsap.set(imageWrap, {
              height: MAX_IMAGE_HEIGHT(),
            });

            // First title hidden initially
            gsap.set(title, {
              opacity: 0,
            });
          } else {
            // Remaining cards start small

            gsap.set(card, {
              width: SMALL_WIDTH(),
            });

            gsap.set(imageWrap, {
              height: SMALL_IMAGE_HEIGHT(),
            });

            gsap.set(title, {
              opacity: 0,
            });
          }
        });
      };

      setInitial();

      ScrollTrigger.addEventListener("refreshInit", setInitial);

      // ---------------------------------------------
      // SCROLL TRIGGER
      // ---------------------------------------------

      const scrollTrigger = {
        trigger: section,

        start: "top top",

        end: () =>
          `+=${vh() * (conditions.length + 0.8)}`,

        pin: true,

        scrub: 1,

        anticipatePin: 1,

        invalidateOnRefresh: true,

        onUpdate: (self) => {
          const totalCards = conditions.length - 1;

          const overall =
            self.progress * totalCards;

          cards.forEach((card, index) => {
            // First card is initially active
            if (index === 0) return;

            const imageWrap =
              card.querySelector(".ec-image-wrap");

            const title =
              card.querySelector(".ec-name");

            // -----------------------------------------
            // LOCAL CARD PROGRESS
            // -----------------------------------------

            let progress =
              overall - (index - 1);

            progress = gsap.utils.clamp(
              0,
              1,
              progress
            );

            // -----------------------------------------
            // CARD WIDTH
            // -----------------------------------------

            const widthProgress =
              gsap.utils.clamp(
                0,
                1,
                progress / 0.85
              );

            const cardWidth =
              SMALL_WIDTH() +
              (FULL_WIDTH() - SMALL_WIDTH()) *
                widthProgress;

            gsap.set(card, {
              width: cardWidth,
            });

            // -----------------------------------------
            // IMAGE HEIGHT
            // -----------------------------------------

            const imageProgress =
              gsap.utils.clamp(
                0,
                1,
                progress / 0.85
              );

            const imageHeight =
              SMALL_IMAGE_HEIGHT() +
              (MAX_IMAGE_HEIGHT() -
                SMALL_IMAGE_HEIGHT()) *
                imageProgress;

            gsap.set(imageWrap, {
              height: imageHeight,
            });

            // -----------------------------------------
            // TITLE
            // -----------------------------------------

            // No slide
            // No scale
            // No transition
            // Just appears after halfway

            if (progress >= 0.50) {
              gsap.set(title, {
                opacity: 1,
              });
            } else {
              gsap.set(title, {
                opacity: 0,
              });
            }
          });

          // -----------------------------------------
          // FIRST CARD TITLE
          // -----------------------------------------

          const firstTitle =
            cards[0]?.querySelector(".ec-name");

          if (firstTitle) {
            if (self.progress > 0.035) {
              gsap.set(firstTitle, {
                opacity: 1,
              });
            } else {
              gsap.set(firstTitle, {
                opacity: 0,
              });
            }
          }
        },
      };

      // ---------------------------------------------
      // TRACK MOVEMENT
      //
      // Measured from real geometry rather than a fixed multiplier, so
      // the last card lands flush at the right edge at any desktop width
      // or zoom level. At the end of the scroll every card is FULL_WIDTH.
      // ---------------------------------------------

      gsap.to(track, {
        x: () => {
          const introWidth = intro ? intro.offsetWidth : 0;
          const endWidth = introWidth + cards.length * FULL_WIDTH();

          return -Math.max(0, endWidth - vw());
        },

        ease: "none",

        scrollTrigger,
      });

      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", setInitial);
      };
    });

    return () => mm.revert();
  }, [conditions.length]);

  return (
    <section
      ref={sectionRef}
      className="ec-section"
    >
      <div
        ref={trackRef}
        className="ec-track"
      >
        {/* HEADING */}

        <div className="ec-intro">
          <h1 className="ec-intro-title">
            Eye Problems
            <br />
            You Should
            <br />
            Know About
          </h1>
        </div>

        {/* CARDS */}

        {conditions.map((condition) => (
          <article
            key={condition.name}
            className="ec-card"
            style={{
              backgroundColor: condition.bg,
              color: condition.color,
            }}
          >
            {/* IMAGE */}

            <div className="ec-image-wrap">
              <img
                src={condition.image}
                alt={condition.name}
                className="ec-image"
                loading="lazy"
              />
            </div>

            {/* TEXT */}

            <div className="ec-bottom">
              <h2 className="ec-name">
                {condition.name}
              </h2>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EyeConditions;
