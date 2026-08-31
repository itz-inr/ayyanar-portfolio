import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import About from '../components/About';
import WhatIBuild from '../components/WhatIBuild';
import Process from '../components/Process';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <WhatIBuild />
      <Process />
      <Services />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
