import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, width: '100%',
      zIndex: 100,
      padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
      backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="brand text-neon"
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Space Grotesk' }}
      >
        <Terminal size={28} />
        <span>Ayush.dev</span>
      </motion.div>

      {/* Desktop Menu */}
      <div style={{ display: 'none', gap: '2rem' }} className="desktop-nav">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{
              color: 'var(--text-primary)',
              fontWeight: 500,
              fontSize: '1rem',
              transition: 'color 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.color = 'var(--neon-green)';
              e.target.style.textShadow = '0 0 8px var(--neon-glow)';
            }}
            onMouseOut={(e) => {
              e.target.style.color = 'var(--text-primary)';
              e.target.style.textShadow = 'none';
            }}
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="mobile-toggle" style={{ display: 'block', cursor: 'pointer', zIndex: 101 }} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X color="var(--neon-green)" size={32} /> : <Menu color="var(--neon-green)" size={32} />}
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass-pane"
            style={{
              position: 'absolute',
              top: '80px', right: '2rem',
              width: '250px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              alignItems: 'center'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  color: 'var(--text-primary)',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Media Queries for Desktop Nav Injection via style tag to keep it in one file */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
