import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Architecture from "./sections/Architecture";
import Workflow from "./sections/Workflow";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink-primary font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Architecture />
        <Workflow />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
