import React from "react";
import Header from "../HeaderComponent/header";
import Footer from "../FooterComponent/footer";
import Herocomponent from "./Herocomponent/Herocomponent";
import OurStory from "./Ourstory/Ourstory";
import DoctorsLegacy from "./DoctorsLegacy/DoctorsLegacy";
import BooksAwards from "./BooksAwards/BooksAwards";
import Facilities from "./Facilities/Facilities";
import "./AboutPage.css";

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Header />
            <main className="main-content">
               <Herocomponent/>
               <OurStory/>
               <DoctorsLegacy/>
               <BooksAwards/>
               <Facilities/>
            </main>
            <Footer />
        </div>
    );
};
export default AboutPage;
