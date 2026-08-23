import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutComponent1 = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      // Initial card positions
      gsap.set(cards[0], {
        y: 500,
        rotation: 8,
        opacity: 0,
      });

      gsap.set(cards[1], {
        y: 500,
        rotation: 8,
        opacity: 0,
      });

      gsap.set(cards[2], {
        y: 500,
        rotation: 8,
        opacity: 0,
      });

      // Main scroll animation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Card 1
      timeline.to(cards[0], {
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });

      // Card 2
      timeline.to(
        cards[1],
        {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "+=0.5"
      );

      // Card 3
      timeline.to(
        cards[2],
        {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "+=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        .about-wrapper {
          background: #f6f3eb;
          color: #000;
          font-family: Inter, Arial, sans-serif;
          overflow: hidden;
        }

        .dummy-section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #efede4;
          font-size: 20px;
          color: #999;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        /* Main pinned section */

        .about-scroll-section {
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .about-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10%;
        }

        /* LEFT CONTENT */

        .about-text {
          flex: 1;
          max-width: 800px;
          z-index: 10;
        }

        .about-text h1 {
          font-size: 100px;
          line-height: 1;
          font-weight: 800;
          margin: 0 0 25px;
          letter-spacing: -4px;
        }

        .about-text p {
          font-size: 19px;
          line-height: 1.5;
          color: #333;
          max-width: 400px;
        }

        /* CARDS */

        .cards-container {
          flex: 1;
          height: 600px;
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .card {
          width: 480px;
          height: 520px;
          position: absolute;

          padding: 40px;
          border-radius: 40px;

          display: flex;
          flex-direction: column;
          justify-content: space-around;

          box-shadow:
            0 40px 80px rgba(0,0,0,0.06);
        }

        .card-white {
          background: #fff;
          z-index: 1;
          top: 0;
          right: 0;
        }

        .card-yellow {
          background: #fee6a7;
          z-index: 2;
          top: 40px;
          right: 0;
        }

        .card-blue {
          background: #244c91;
          color: #fff;
          z-index: 3;
          top: 80px;
          right: 0;
        }

        /* ICON */

        .icon-circle {
          width: 54px;
          height: 54px;
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          align-self: flex-end;

          border: 1px solid rgba(0,0,0,0.08);
        }

        .card-blue .icon-circle {
          background: #fff;
          color: #244c91;
          border: none;
        }

        /* TEXT */

        .card h2 {
          font-size: 100px;
          line-height: .9;
          margin: 0;
          font-weight: 700;
        }

        .card h3 {
          font-size: 20px;
          margin: 15px 0 30px;
          font-weight: 400;
        }

        .card p {
          font-size: 16px;
          line-height: 1.5;
        }

        /* MOBILE */

        @media (max-width: 1024px) {

          .about-inner {
            flex-direction: column;
            justify-content: flex-start;
            padding: 70px 20px 0;
          }

          .about-text {
            width: 100%;
            text-align: center;
            margin-bottom: 40px;
          }

          .about-text h1 {
            font-size: 60px;
            letter-spacing: -2px;
          }

          .about-text p {
            max-width: 600px;
            margin: auto;
          }

          .cards-container {
            width: 100%;
            height: 500px;
            justify-content: center;
          }

          .card {
            width: 85%;
            max-width: 450px;
            height: 380px;
            left: 50%;
            right: auto;
          }

          .card-white {
            top: 0;
          }

          .card-yellow {
            top: 60px;
          }

          .card-blue {
            top: 120px;
          }

          .card h2 {
            font-size: 60px;
          }
        }

      `}</style>

      <div className="about-wrapper">

        {/* Dummy section */}
        <section className="dummy-section">
          Begin Scrolling Down
        </section>

        {/* GSAP ScrollTrigger Section */}
        <section
          className="about-scroll-section"
          ref={sectionRef}
        >
          <div className="about-inner">

            {/* LEFT */}
            <div className="about-text">

              <h1>
                Excellence in <br />
                Eye Care, <br />
                Built on Trust
              </h1>

              <p>
                Your vision is our priority, with comprehensive eye care
                services designed to ensure lifelong eye health and clarity.
              </p>

            </div>

            {/* RIGHT */}
            <div className="cards-container">

              {/* CARD 1 */}

              <div
                className="card card-white"
                ref={(el) => {
                  cardsRef.current[0] = el;
                }}
              >
                <div className="icon-circle">

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                    />
                  </svg>

                </div>

                <div>

                  <h2>40+</h2>

                  <h3>
                    Years of Excellence
                  </h3>

                  <p>
                    Over four decades of experience in providing
                    quality medical services.
                  </p>

                </div>
              </div>

              {/* CARD 2 */}

              <div
                className="card card-yellow"
                ref={(el) => {
                  cardsRef.current[1] = el;
                }}
              >

                <div className="icon-circle">

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>

                </div>

                <div>

                  <h2>40+</h2>

                  <h3>
                    Years of Excellence
                  </h3>

                  <p>
                    Over four decades of experience in providing
                    quality medical services.
                  </p>

                </div>

              </div>

              {/* CARD 3 */}

              <div
                className="card card-blue"
                ref={(el) => {
                  cardsRef.current[2] = el;
                }}
              >

                <div className="icon-circle">

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>

                </div>

                <div>

                  <h2>40+</h2>

                  <h3>
                    Years of Excellence
                  </h3>

                  <p>
                    Over four decades of experience in providing
                    quality medical services.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Next section */}
        <section
          className="dummy-section"
          style={{ background: "#ddd9cd" }}
        >
          Card section finished
        </section>

        <section className="dummy-section">
          Next Chapter
        </section>

      </div>
    </>
  );
};

export default AboutComponent1;