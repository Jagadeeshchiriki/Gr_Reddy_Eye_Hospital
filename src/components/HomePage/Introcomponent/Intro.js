import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import eye1 from "../../../assets/images/HomePage/eye1.avif";
import { DESKTOP_MQ } from "../../../utils/breakpoints";
import "./Intro.css";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mm = gsap.matchMedia();

    // Desktop only, matching every other scroll animation on the site.
    mm.add(DESKTOP_MQ, () => {
      // One timeline scrubbed across the hero: the eye zooms in while the
      // headline drifts up and fades, so the next section rises out of it.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        imgRef.current,
        { scale: 1 },
        { scale: 1.28, ease: "none" },
        0
      );

      tl.fromTo(
        titleRef.current,
        { y: 0, opacity: 1 },
        { y: -90, opacity: 0, ease: "none" },
        0
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="intro-container" ref={containerRef}>
      <div className="intro-wrapper">
        <img
          src={eye1}
          alt="Eye Iris"
          className="intro-eye-img"
          ref={imgRef}
        />
        <div className="intro-text-overlay">
          <h1 className="intro-title" ref={titleRef}>
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
