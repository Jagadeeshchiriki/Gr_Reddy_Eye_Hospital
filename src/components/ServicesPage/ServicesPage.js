import React from "react";
import Header from "../HeaderComponent/header";
import Footer from "../FooterComponent/footer";
import "./ServicesPage.css";

// Import assets
import imgCataract from "../../assets/images/ServicesPage/Cataractservice.png";
import imgRetinal from "../../assets/images/ServicesPage/Retinal_injection 1.png";
import imgGlucoma from "../../assets/images/ServicesPage/gl-50.jpg";
import imgRefractive from "../../assets/images/ServicesPage/refractive-surgery.jpg";
import imgComprehensive from "../../assets/images/ServicesPage/comprehensive.jpg";
import imgCornea from "../../assets/images/ServicesPage/conrnea.jpg";
import imgPaediatric from "../../assets/images/ServicesPage/paediatric.jpg";
import imgOcular from "../../assets/images/ServicesPage/ocular_injuries.png";

const servicesData = [
  {
    title: "Cataract Surgery",
    desc1: "Cataracts can cloud your vision and impact your quality of life, but there is a solution. Our experienced ophthalmologists specialize in cataract surgery, a safe and highly effective procedure that can restore clear vision.",
    desc2: "Whether you're experiencing vision changes or have been diagnosed with cataracts, we are here to guide you through the process. Our state-of-the-art facilities and dedicated medical team ensure that your journey to improved vision is smooth and comfortable. Learn more about cataract surgery at GR Reddy Eye Hospital and take the first step toward regaining the world in sharp focus.",
    bgColor: "#305596",
    textColor: "#ffffff",
    image: imgCataract,
  },
  {
    title: "Vitreo-Retinal",
    desc1: "Our Vitreo-Retinal services provide specialized diagnosis and treatment for conditions affecting the retina and vitreous, including retinal detachment, diabetic retinopathy, macular disorders, retinal vascular diseases, and vitreous hemorrhage.",
    desc2: "Our experienced retina specialists use advanced diagnostic imaging and modern treatment techniques to protect retinal health and preserve vision. We provide comprehensive care ranging from medical management and intravitreal injections to laser treatment and vitreoretinal surgery, depending on each patient's condition.",
    bgColor: "#f6df84",
    textColor: "#1a1a1a",
    image: imgRetinal,
  },
  {
    title: "Glaucoma Care",
    desc1: "Glaucoma is a group of eye conditions that can damage the optic nerve, often due to increased pressure inside the eye. It can gradually cause loss of peripheral vision and may progress without noticeable symptoms in its early stages.",
    desc2: "Our glaucoma specialists provide comprehensive evaluation, diagnosis, and long-term management using advanced tests such as intraocular pressure measurement, optic nerve assessment, visual field analysis, and OCT. Treatment may include eye drops, laser procedures, or surgery depending on the severity of the condition.",
    bgColor: "#ffffff",
    textColor: "#1a1a1a",
    image: imgGlucoma,
  },
  {
    title: "Refractive Surgery",
    desc1: "Refractive surgery is designed to reduce dependence on glasses or contact lenses by correcting common refractive errors such as myopia, hyperopia, and astigmatism. Procedures such as LASIK and other laser vision correction techniques reshape the cornea to improve the way light is focused onto the retina.",
    desc2: "Our ophthalmologists evaluate each patient's eyes, vision, corneal health, and individual requirements to determine the most suitable refractive procedure. With advanced technology and careful surgical planning, we aim to provide clear and comfortable vision with a safe recovery.",
    bgColor: "#f3efe6",
    textColor: "#000000ff",
    image: imgRefractive,
  },
  {
    title: "Comprehensive Ophthalmology",
    desc1: "Comprehensive ophthalmology provides complete eye care for a wide range of common eye conditions and vision problems. Our ophthalmologists evaluate the overall health of the eyes, including the cornea, lens, retina, optic nerve, and other ocular structures.",
    desc2: "From routine eye examinations and vision correction to the diagnosis and management of conditions such as infections, dry eye, cataract, glaucoma, and other ocular disorders, we provide personalized care based on each patient's needs. Regular comprehensive eye examinations also help detect eye problems at an early stage.",
    bgColor: "#305596",
    textColor: "#ffffff",
    image: imgComprehensive, // Reusing image as there are only 7 images in the folder
  },
  {
    title: "Cornea & Ocular Microbiology",
    desc1: "Corneal and ocular surface conditions can affect the clear front surface of the eye and may cause redness, irritation, pain, watering, blurred vision, or sensitivity to light. Our services include evaluation and treatment of corneal infections, ulcers, inflammations, and other ocular surface disorders.",
    desc2: "With specialized examination and microbiological evaluation when required, our ophthalmologists identify the underlying cause of infection or inflammation and provide appropriate treatment. Early diagnosis and targeted management are important for protecting the cornea and preventing vision-threatening complications.",
    bgColor: "#f6df84",
    textColor: "#1a1a1a",
    image: imgCornea,
  },
  {
    title: "Paediatric Ophthalmology",
    desc1: "Paediatric Ophthalmology focuses on the diagnosis and treatment of eye and vision problems in infants and children. Common conditions include squint or strabismus, refractive errors, amblyopia (lazy eye), childhood eye infections, and developmental vision problems.",
    desc2: "Our team provides child-friendly eye examinations and specialized care to detect vision problems at an early age. Services also include ROP screening, evaluation of childhood refractive errors, and NLD probing when required, helping support healthy visual development.",
    bgColor: "#ffffff",
    textColor: "#1a1a1a",
    image: imgPaediatric,
  },
  {
    title: "Ocular Injuries",
    desc1: "Ocular injuries and emergencies require prompt evaluation to protect the eye and prevent permanent vision loss. Injuries may result from foreign bodies, chemical exposure, blunt or penetrating trauma, corneal damage, bleeding, or other accidents involving the eye.",
    desc2: "Our emergency eye care team provides rapid assessment and appropriate treatment based on the type and severity of the injury. We manage urgent ocular conditions with careful examination and timely medical or surgical intervention to protect the eye and preserve vision.",
    bgColor: "#f3efe6",
    textColor: "#000000ff",
    image: imgOcular,
  }
];

const ServicesPage = () => {
    return (
        <div className="services-page-wrapper">
            <Header />
            
            {/* Hero Section */}
            <section className="services-hero">
                <div className="services-hero-content">
                    <h1 className="hero-title">Advanced Services For Better Vision</h1>
                    <div className="hero-bottom">
                        <div className="hero-subtitle">Our Services</div>
                        <div className="hero-desc">
                            From comprehensive eye examinations to advanced surgical care, we combine decades of ophthalmic expertise with modern technology to provide precise, personalized treatment at every stage of your vision journey.
                        </div>
                    </div>
                </div>
            </section>

            {/* Stacking Services Section */}
            <section className="services-stack-container">
                {servicesData.map((service, index) => (
                    <div 
                        key={index} 
                        className="service-card"
                        style={{ 
                            backgroundColor: service.bgColor, 
                            color: service.textColor,
                            zIndex: index + 1,
                            top: `${index * 0}px` 
                        }}
                    >
                        <div className="service-card-inner">
                            <div className="service-content">
                                <h2>{service.title}</h2>
                                <p>{service.desc1}</p>
                                <p>{service.desc2}</p>
                            </div>
                            <div className="service-image">
                                <img src={service.image} alt={service.title} />
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
        </div>
    );
};

export default ServicesPage;