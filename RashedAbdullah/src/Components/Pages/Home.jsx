import React from 'react'
import Hero1 from '../HeroArea/Hero1';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contact from '../Cotacts/Contact';

const Home = () => {
  return (
    <div>
        <Hero1 />
        <Projects />
        <Skills />
        <About />
        <Contact />
    </div>
  )
}

export default Home;