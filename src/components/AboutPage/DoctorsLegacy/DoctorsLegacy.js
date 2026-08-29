import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./DoctorsLegacy.css";

// Images
import doctor1 from "../../../assets/images/AboutUsPage/doctor13.png";
import doctor2 from "../../../assets/images/AboutUsPage/doctor2_654x654.png";


gsap.registerPlugin(ScrollTrigger);

const doctors = [
  {
    id: 1,
    name: "Dr. Ramachandra Reddy",
    designation1: "Glaucoma Specialist & Ophthalmologist",
    designation2: "Author | Educator | 40+ Years of Experience",
    mainTitle: "Decades of expertise.\nA legacy of better vision.",
    quote: "A commitment to ophthalmology is a commitment to protecting vision and improving lives.",
    intro: "With 40+ years of experience, Dr. G. R. Reddy is a respected ophthalmologist and glaucoma specialist dedicated to advancing eye care through clinical expertise, education, and continuous learning.",
    sections: [
      {
        title: "Contributions to Ophthalmology",
        text: "Dr. Reddy has contributed through clinical practice, medical education, lectures, and glaucoma-focused academic programs, sharing his knowledge with ophthalmologists and students."
      },
      {
        title: "Author & Educator",
        text: "He is the author of A Visual Field Evaluation with Automated Devices, a practical work covering visual-field assessment, glaucoma-related changes, interpretation, and modern testing techniques."
      },
    ],
    image: doctor1
  },
  {
    id: 2,
    name: "Dr. Sandeep Reddy",
    designation1: "Vitreo-Retinal Surgeon & Ophthalmologist",
    designation2: "Retinal Care | Advanced Surgery | Clinical Expertise",

    mainTitle: "Precision in every procedure.\nCare in every vision.",

    quote:
      "Every patient deserves precise treatment, clear guidance, and care they can trust.",

    intro:
      "Dr. Sandeep Reddy is a Vitreo-Retinal surgeon dedicated to the diagnosis and treatment of complex retinal conditions through advanced surgical expertise and patient-focused care.",

    sections: [
      {
        title: "Vitreo-Retinal Expertise",
        text:
          "Dr. Sandeep Reddy focuses on retinal conditions and surgical care, combining modern techniques with a precise and individualized approach to complex eye conditions."
      },

      {
        title: "Clinical Excellence",
        text:
          "His approach brings together advanced retinal surgery, careful diagnosis, and continuous learning to provide patients with focused and comprehensive retinal care."
      }
    ],

    image: doctor2
  }
];



const DoctorsLegacy = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Left side image fade up
      gsap.fromTo(
        ".doctor-left",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".doctor-profile",
            start: "top 80%",
          },
        }
      );

      // Right side staggered reveal inspired by Zoho
      const rightElements = gsap.utils.toArray(".doctor-right > *");
      rightElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="doctors-legacy-section" ref={sectionRef}>
      <div className="doctors-container">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-profile">
            
            {/* Left Sticky Column */}
            <div className="doctor-left">
              <div className="doctor-image-container">
                <img src={doctor.image} alt={doctor.name} className="doctors-img" />
              </div>
              <div className="doctor-left-info">
                <h2 className="doctor-title">{doctor.name}</h2>
                <p className="doctor-designation1">{doctor.designation1}</p>
                <p className="doctor-designation2">{doctor.designation2}</p>
              </div>
            </div>
            
            {/* Right Scrolling Content */}
            <div className="doctor-right">
              <h3 className="doctor-main-title">{doctor.mainTitle.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</h3>
              
              <div className="doctor-quote">
                <span className="quote-mark">“</span>
                <p>{doctor.quote}</p>
              </div>
              
              <p className="doctor-intro">{doctor.intro}</p>
              
              {doctor.sections.map((sec, i) => (
                <div key={i} className="doctor-detail-section">
                  <hr className="doctor-divider" />
                  <h4>{sec.title}</h4>
                  <p>{sec.text}</p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>


    </section>
  );
};

export default DoctorsLegacy;
