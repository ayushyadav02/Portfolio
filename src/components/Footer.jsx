import { Mail, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  return (
    <footer id="contact" style={{ position: 'relative', zIndex: 10, marginTop: '8rem', borderTop: '1px solid var(--glass-border)', background: 'rgba(5, 5, 5, 0.9)', backdropFilter: 'blur(10px)' }}>
      <div className="section-container" style={{ paddingTop: '4rem', paddingBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}
        >
          Let's Build Something <span className="text-neon">Incredible.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', marginBottom: '3rem' }}
        >
          I'm currently available for freelance projects and full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}
        >
          <a href="mailto:ayushrao9407@gmail.com" className="glass-pane" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)', transition: 'all 0.3s ease' }}
            onMouseOver={(e) => { e.currentTarget.style.color = 'var(--neon-green)'; e.currentTarget.style.borderColor = 'var(--neon-green)'; e.currentTarget.style.boxShadow = '0 0 15px var(--neon-glow)'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0,0,0,0.37)'; }}
          >
            <Mail size={24} />
            <span>ayushrao9407@gmail.com</span>
          </a>

          <a href="tel:+917015427476" className="glass-pane" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)', transition: 'all 0.3s ease' }}
            onMouseOver={(e) => { e.currentTarget.style.color = 'var(--neon-green)'; e.currentTarget.style.borderColor = 'var(--neon-green)'; e.currentTarget.style.boxShadow = '0 0 15px var(--neon-glow)'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0,0,0,0.37)'; }}
          >
            <Smartphone size={24} />
            <span>+91-7015427476</span>
          </a>
        </motion.div>

        <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
          <a href="https://www.linkedin.com/in/ayush-yadav-131434296/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--neon-green)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <LinkedinIcon size={30} />
          </a>
          <a href="https://github.com/ayushyadav02" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--neon-green)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <GithubIcon size={30} />
          </a>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', opacity: 0.7 }}>
          © {new Date().getFullYear()} Ayush Yadav. Built with React & Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
