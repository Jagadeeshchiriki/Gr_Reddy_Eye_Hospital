import React from "react";
import Header from "../HeaderComponent/header";
import Footer from "../FooterComponent/footer";
import "./ServicesPage.css";

// Import assets
import imgCataract from "../../assets/images/ServicesPage/Cataractservice.png";
import imgPhaco from "../../assets/images/ServicesPage/man-bent-her-head-grabbed-him-her-after-exercise 1 (1).png";
import imgLasik from "../../assets/images/ServicesPage/LASIK.png";
import imgICL from "../../assets/images/ServicesPage/man-bent-her-head-grabbed-him-her-after-exercise 1 (2).png";
import imgRetinal from "../../assets/images/ServicesPage/Retinal_injection 1.png";
import imgBotox from "../../assets/images/ServicesPage/Botox Treatment.png";
import imgContactLens from "../../assets/images/ServicesPage/Contact Lens Clinic.png";

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
    title: "Phacoemulsification",
    desc1: "Phacoemulsification is the modern, standard method for cataract surgery. It utilizes ultrasound energy to break up and remove the cloudy lens from the eye, allowing for a smaller incision and a faster, more comfortable recovery compared to older techniques.",
    desc2: "During the procedure, our skilled surgeons use specialized equipment to safely and efficiently remove the cataract and replace it with an intraocular lens (IOL) implant, improving your vision. At GR Reddy Eye Hospital, we perform phacoemulsification cataract surgery with precision and care, utilizing advanced technology to achieve optimal outcomes for our patients.",
    bgColor: "#f6df84",
    textColor: "#1a1a1a",
    image: imgPhaco,
  },
  {
    title: "LASIK",
    desc1: "LASIK (Laser-Assisted In Situ Keratomileusis) is a popular and effective refractive surgery procedure that can correct nearsightedness, farsightedness, and astigmatism, reducing or eliminating the need for glasses or contact lenses.",
    desc2: "Our experienced LASIK surgeons use advanced laser technology to precisely reshape the cornea, improving the way light is focused onto the retina. If you're considering LASIK, schedule a consultation with our team to determine if you're a suitable candidate for this life-changing procedure and learn more about the benefits it can offer.",
    bgColor: "#ffffff",
    textColor: "#1a1a1a",
    image: imgLasik,
  },
  {
    title: "Implantable Collamer Lenses (ICLs)",
    desc1: "Implantable Collamer Lenses (ICLs) are a type of refractive lens implanted in the eye to correct vision problems. Unlike traditional contact lenses, ICLs are surgically positioned inside the eye, providing excellent visual outcomes without the need for daily maintenance.",
    desc2: "ICLs are a great option for individuals who may not be suitable candidates for LASIK or other laser vision correction procedures. Our experienced ophthalmologists can evaluate your specific needs and recommend whether ICLs are the right choice for you to achieve clear, crisp vision.",
    bgColor: "#f3efe6",
    textColor: "#000000ff",
    image: imgICL,
  },
  {
    title: "Pterygium Surgery",
    desc1: "Pterygium is a growth of fleshy tissue on the conjunctiva, the clear tissue that covers the white part of the eye. It can cause irritation, redness, and in some cases, affect vision if it grows over the cornea.",
    desc2: "Pterygium surgery is a procedure to remove the growth and restore the normal appearance and function of the eye. Our surgeons utilize advanced techniques to minimize discomfort and promote faster healing. If you're experiencing symptoms of pterygium, schedule an evaluation with our team to discuss your treatment options.",
    bgColor: "#305596",
    textColor: "#ffffff",
    image: imgCataract, // Reusing image as there are only 7 images in the folder
  },
  {
    title: "Retinal Injection",
    desc1: "Retinal injections, also known as intravitreal injections, are used to deliver medication directly into the vitreous cavity of the eye. This targeted approach allows for precise treatment of various retinal conditions, such as macular degeneration, diabetic retinopathy, and retinal vein occlusion.",
    desc2: "Our experienced retina specialists perform retinal injections with the utmost care and precision, utilizing advanced imaging technologies to ensure the medication is delivered accurately to the affected area. If you have been diagnosed with a retinal condition, discuss your treatment options with our team.",
    bgColor: "#f6df84",
    textColor: "#1a1a1a",
    image: imgRetinal,
  },
  {
    title: "Botox Treatment",
    desc1: "Botox is a popular non-surgical cosmetic treatment that temporarily reduces or eliminates facial fine lines and wrinkles. It works by blocking nerve signals to the muscles, causing them to relax and smooth out the overlying skin.",
    desc2: "Beyond cosmetic applications, Botox can also be used for therapeutic purposes, such as treating certain eye conditions like blepharospasm (eyelid spasms) and strabismus (crossed eyes). Our experienced ophthalmologists can administer Botox injections safely and effectively. Schedule a consultation to discuss your goals.",
    bgColor: "#ffffff",
    textColor: "#1a1a1a",
    image: imgBotox,
  },
  {
    title: "Contact Lens Clinic",
    desc1: "Our contact lens clinic offers comprehensive services for individuals interested in wearing contact lenses or those who already wear them and need a specialized fitting.",
    desc2: "Our experienced optometrists provide thorough eye exams, prescribe the appropriate type of contact lenses for your visual needs, and offer personalized guidance on proper lens care and hygiene. Whether you need daily disposables, toric lenses for astigmatism, or multifocal lenses, our clinic is here to help.",
    bgColor: "#f3efe6",
    textColor: "#000000ff",
    image: imgContactLens,
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
                            top: `${index * 1}px` 
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