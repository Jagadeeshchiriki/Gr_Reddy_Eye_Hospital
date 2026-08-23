import React, { useEffect } from 'react';
import Header from '../HeaderComponent/header';
import Footer from '../FooterComponent/footer';
import Intro from './Introcomponent/Intro';
import AboutComponent from './Aboutcomponent/aboutcomponent';
import EyeConditions from './EyeConditions/EyeConditions';
import Doctors from './Doctors/Doctors';
import Achievements from './Achivements/Achievements';
import Cta from './Ctacomponent/Cta';

import './HomePage.css';

function HomePage() {
  useEffect(() => {
    console.log('HomePage Component');
  }, []);

  return (
    <div className="HomePage">
      <Header />
      <main className="main-content">
        <Intro />
        <AboutComponent />
        <EyeConditions />
        <Doctors />
        <Achievements />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;

