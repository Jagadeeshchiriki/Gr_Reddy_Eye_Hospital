import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
    // Section heights depend on 100vh (the hero is capped to one screen), so
    // the pinned ScrollTriggers created in each child's useLayoutEffect can be
    // built against a layout that has not settled yet — which left About
    // pinned at scroll 0 on some viewport sizes (e.g. 1905x945). Two frames
    // after mount the layout is final, so re-measure once. At mount scrollY
    // is 0, so this cannot move the page.
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
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

