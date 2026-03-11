import NavBar from './components/NavBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Tools from './components/sections/Tools';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen selection:bg-primary-500/30 relative text-gray-100">
      {/* Ambient glassmorphic glowing backgrounds */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-600/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[50%] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none z-0"></div>
      
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none z-0"></div>

      <NavBar />

      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
