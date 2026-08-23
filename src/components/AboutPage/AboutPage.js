import React from "react";
import Header from "../HeaderComponent/header";
import Footer from "../FooterComponent/footer";
import Herocomponent from "./Herocomponent/Herocomponent";
import OurStory from "./Ourstory/Ourstory";
import "./AboutPage.css";

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Header />
            <main className="main-content">
               <Herocomponent/>
               <OurStory/>
            </main>
            <Footer />
        </div>
    );
};
export default AboutPage;
