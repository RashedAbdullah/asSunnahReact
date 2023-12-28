import './css/MainCSS.css';
import Header from "./Components/Navbar/Navbar"
import Hero1 from './Components/HeroArea/Hero1';
import Footer from './Components/Footer/Footer';
import Skills from "./Components/Skills/Skills";
import Projects from './Components/Projects/Projects';
import Contact from './Components/Cotacts/Contact';
import About from './Components/About/About';

function App() {


  return (
    <div>
      <Header />
      <Hero1 />
      <Projects />
      <Contact />
      <Skills />
      <About />
      <Footer />
    </div>
  )
}

export default App
