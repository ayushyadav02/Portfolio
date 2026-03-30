import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ChevronDown } from 'lucide-react';
import profilePic from '../assets/WhatsApp Image 2026-03-30 at 11.20.29 PM.jpeg';

const greetings = [
  "Hello",      // English
  "Namaste",    // Hindi
  "Bonjour",    // French
  "Hola",       // Spanish
  "Ciao",       // Italian
  "Konnichiwa", // Japanese
  "Guten Tag",  // German
  "Nǐ hǎo",     // Chinese
  "Olá",        // Portuguese
  "Anyoung",    // Korean
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2500); // Slowed down from 1500 to 2500

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="about"
      className="section-container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8rem',
        gap: '4rem'
      }}
    >
      <style>{`
        .hero-layout {
          display: flex;
          align-items: center;
          gap: 4rem;
          width: 100%;
        }
        .hero-text {
          flex: 1;
        }
        .profile-pic-container {
          flex-shrink: 0;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          border: 4px solid var(--neon-green);
          box-shadow: 0 0 30px var(--neon-glow);
          overflow: hidden;
          background: var(--glass-bg);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 900px) {
          .hero-layout {
            flex-direction: column-reverse;
            text-align: center;
            gap: 2rem;
          }
          .hero-text {
             display: flex;
             flex-direction: column;
             align-items: center;
          }
          .profile-pic-container {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
      <div className="hero-layout">
        <div className="hero-text">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '2rem', height: '80px', display: 'flex', alignItems: 'flex-end' }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-2px',
                  lineHeight: 1
                }}
              >
                {greetings[index]}<span className="text-neon">.</span>
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.1 }}
          >
            I'm <span className="text-neon">Ayush Yadav</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              marginBottom: '3rem',
              maxWidth: '600px',
              lineHeight: 1.8
            }}
          >
            A proactive Full Stack Web Developer capable of turning visionary ideas into real-world applications.
            Specialized in React, Node.js, and scaling high-performance interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
          >
            <a href="/src/assets/AyushCV.pdf" target="_blank" rel="noopener noreferrer"
              className="glass-pane"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: 600,
                color: 'var(--neon-green)', cursor: 'pointer',
                border: '1px solid var(--neon-green)',
                textShadow: '0 0 8px var(--neon-glow)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--neon-glow)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--glass-bg)';
                e.currentTarget.style.color = 'var(--neon-green)';
              }}
            >
              <Eye size={20} />
              View CV
            </a>

            <a href="#projects"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: 600,
                color: 'var(--text-primary)', cursor: 'pointer',
                borderBottom: '2px solid transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderBottom = '2px solid var(--neon-green)';
                e.currentTarget.style.color = 'var(--neon-green)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderBottom = '2px solid transparent';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              View My Work
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="profile-pic-container"
        >
          <img
            src={profilePic}
            alt="Ayush Yadav Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<span style="color: var(--text-secondary); text-align: center; padding: 2rem;">Upload Profile Picture Here</span>';
            }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--neon-green)'
        }}
      >
        <ChevronDown size={40} />
      </motion.div>
    </section>
  );
};

export default Hero;
