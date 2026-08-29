import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import facility1 from "../../../assets/images/AboutUsPage/opticalstore.jpg";
import facility2 from "../../../assets/images/AboutUsPage/machine.jpg";
import facility3 from "../../../assets/images/AboutUsPage/operatoinT.jpg";
import facility4 from "../../../assets/images/AboutUsPage/waitingarea.jpg";
import facility5 from "../../../assets/images/AboutUsPage/parking.jpg";


import "./Facilities.css";

gsap.registerPlugin(ScrollTrigger);

const facilities = [
  {
    id: 1,
    image: facility1,
    title: "Vision Care & Eyewear",
    description:
      "Quality eyewear and vision solutions for clear, comfortable vision.",
  },
  {
    id: 2,
    image: facility2,
    title: "Advanced Diagnostics",
    description:
      "Modern technology for accurate eye diagnosis and evaluation.",
  },
  {
    id: 3,
    image: facility3,
    title: "Modern Operation Theatre",
    description:
      "Advanced surgical facilities designed for safe and precise eye care.",
  },
  {
    id: 4,
    image: facility4,
    title: "Comfortable Waiting Hall",
    description:
      "A calm, welcoming environment designed around comfort, safety and better care.",
  },
  {
    id: 5,
    image: facility5,
    title: "Convenient Parking",
    description:
      "Easy and accessible parking for patients and visitors.",
  },

];

export default function Facilities() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".facility-slide");
      const totalSlides = slides.length;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * (totalSlides * 1.5)}`,
          pin: true,
          scrub: 2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Reset initial setup for all screens
      slides.forEach((slide, index) => {
        const imageWrap = slide.querySelector(".facility-image-wrap");
        const image = slide.querySelector(".facility-image");
        const content = slide.querySelector(".facility-content");

        gsap.set(slide, {
          zIndex: totalSlides - index,
          opacity: 1,
        });

        gsap.set(imageWrap, {
          width: "100%",
          height: "100%",
          top: "0%",
          left: "0%",
          borderRadius: "0px",
          opacity: 1,
        });

        gsap.set(image, {
          scale: index === 0 ? 1 : 1.25,
        });

        gsap.set(content, {
          opacity: index === 0 ? 1 : 0,
          y: index === 0 ? 0 : 30,
        });
      });

      timeline.to(".facilities-heading", {
        opacity: 1,
        y: 0,
        duration: 0.2,
      });

      // 2. Animation step loop
      slides.forEach((slide, index) => {
        if (index < totalSlides - 1) {
          const currentWrap = slide.querySelector(".facility-image-wrap");
          const currentContent = slide.querySelector(".facility-content");

          const nextSlide = slides[index + 1];
          const nextImage = nextSlide.querySelector(".facility-image");
          const nextContent = nextSlide.querySelector(".facility-content");

          const stepTime = index * 1;

          // Fade active text out
          timeline.to(
            currentContent,
            {
              opacity: 0,
              y: -20,
              duration: 0.3,
              ease: "power2.in",
            },
            stepTime
          );

          // Shrink current frame
          timeline.to(
            currentWrap,
            {
              width: "15%",
              height: "15%",
              top: "42%",
              left: "42%",
              borderRadius: "8px",
              duration: 1,
              ease: "power2.inOut",
            },
            stepTime
          );

          // Scale next image in background
          timeline.to(
            nextImage,
            {
              scale: 1,
              duration: 1,
              ease: "power2.inOut",
            },
            stepTime
          );

          // Fade shrunk card out
          timeline.to(
            currentWrap,
            {
              opacity: 0,
              scale: 0.85,
              duration: 0.4,
              ease: "power2.out",
            },
            stepTime + 0.8
          );

          // Fade next text in
          timeline.to(
            nextContent,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            stepTime + 0.9
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="facilities-section">
      <div className="facilities-stage">
        <div className="facilities-heading">
          <span>Our Facilities</span>
        </div>

        {facilities.map((facility) => (
          <article className="facility-slide" key={facility.id}>
            <div className="facility-image-wrap">
              <img
                src={facility.image}
                alt={facility.title}
                className="facility-image"
              />
              <div className="facility-overlay" />
            </div>

            <div className="facility-content">
              
              <div className="facility-text">
                <h2>{facility.title}</h2>
                <p>{facility.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}