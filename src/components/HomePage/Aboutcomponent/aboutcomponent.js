import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './aboutcomponent.css';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ ignoreMobileResize: true });

function AboutComponent() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      // Set initial positions
      gsap.set(cards[0], { y: 500, rotation: 8, opacity: 0 });
      gsap.set(cards[1], { y: 500, rotation: 8, opacity: 0 });
      gsap.set(cards[2], { y: 500, rotation: 8, opacity: 0 });

      // Build scroll-pinned timeline for all device sizes
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2500',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(cards[0], {
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      });

      tl.to(
        cards[1],
        {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        },
        '+=0.5'
      );

      tl.to(
        cards[2],
        {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        },
        '+=0.5'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-scroll-section" ref={sectionRef}>
      <div className="about-inner">
        {/* Left Column: Stationary Text */}
        <div className="about-text-content">
          <h2 className="about-title">
            Excellence in<br />
            Eye Care,<br />
            Built on Trust
          </h2>
          <p className="about-subtitle">
            Your vision is our priority, with comprehensive eye care services
            designed to ensure lifelong eye health and clarity.
          </p>
        </div>

        {/* Right Column: Stacked Cards */}
        <div className="about-cards-visual">
          <div
            className="about-card card-white"
            ref={(el) => { cardsRef.current[0] = el; }}
          >
            <div className="icon-circle icon-blue">
              <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="card-body">
              <div>
                <div className="card-stat">50K</div>
                <div className="card-label">Successful Treatments</div>
              </div>
              <p className="card-desc">Advanced treatments with proven results across multiple specialties.</p>
            </div>
          </div>

          <div
            className="about-card card-yellow"
            ref={(el) => { cardsRef.current[1] = el; }}
          >
            <div className="icon-circle icon-dark">
              <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#FFE599" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="card-body">
              <div>
                <div className="card-stat">99%</div>
                <div className="card-label">Care Excellence</div>
              </div>
              <p className="card-desc">Personalized care focused on comfort, safety, and positive experiences.</p>
            </div>
          </div>

          <div
            className="about-card card-blue"
            ref={(el) => { cardsRef.current[2] = el; }}
          >
            <div className="icon-circle icon-white">
              <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#2353A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="card-body">
              <div>
                <div className="card-stat">40+</div>
                <div className="card-label">Years of Excellence</div>
              </div>
              <p className="card-desc">Over four decades of experience in providing quality medical services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutComponent;