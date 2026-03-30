import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Background />
      <Navbar />
      
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        
        {/* Decorative separator between sections */}
        <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)', margin: '2rem 0' }}></div>
        
        <Experience />
        
        <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)', margin: '2rem 0' }}></div>
        
        <Projects />
        
        <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)', margin: '2rem 0' }}></div>
        
        <Skills />
        
        <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)', margin: '2rem 0' }}></div>
        
        <Certifications />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
