import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkHighlights from './components/WorkHighlights';
import Experience from './components/Experience';
import ThoughtLeadership from './components/ThoughtLeadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <WorkHighlights />
        <ThoughtLeadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
