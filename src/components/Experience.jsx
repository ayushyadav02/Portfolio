import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-container" style={{ minHeight: '60vh', paddingTop: '8rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="section-title-wrapper">
        <h2 className="section-title">Professional <span className="text-neon">Experience</span></h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-pane"
        style={{ padding: '3rem', position: 'relative', overflow: 'hidden', maxWidth: '900px', margin: '2rem auto 0 auto', borderLeft: '4px solid var(--neon-green)' }}
      >
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--neon-green)', filter: 'blur(100px)', opacity: 0.15 }}></div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(57, 255, 20, 0.05)', borderRadius: '12px', border: '1px solid rgba(57, 255, 20, 0.2)' }}>
              <Briefcase size={36} className="text-neon" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>Ram Mobiles</h3>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--neon-green)', fontWeight: 500 }}>Freelance Software Developer</h4>
            </div>
          </div>
          <span style={{ padding: '0.5rem 1.2rem', backgroundColor: 'rgba(57, 255, 20, 0.1)', color: 'var(--neon-green)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600 }}>
            Live Nov’25 – Dec’25
          </span>
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {[
            "Architected and deployed a production-grade full-stack e-commerce platform managing product catalog, order lifecycles, and inventory management.",
            "Designed and implemented strict stock validation and inventory update logic during order processing.",
            "Reduced incorrect order placements to near-zero with a robust modular backend architecture and JWT-based RESTful APIs.",
            "Supported a live production system that effectively generated ~₹6,000 in freelance revenue."
          ].map((item, i) => (
            <li key={i} style={{ position: 'relative', paddingLeft: '2rem', color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              <span style={{ position: 'absolute', left: 0, top: '4px', color: 'var(--neon-green)', fontSize: '1.2rem' }}>▹</span>
              {item}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"].map((t, i) => (
              <span key={i} style={{ fontSize: '0.9rem', padding: '0.4rem 1rem', background: '#111', borderRadius: '4px', border: '1px solid #333' }}>
                {t}
              </span>
            ))}
          </div>
          <a
            href="https://ecommerce-mern-website-1.onrender.com/"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', background: 'rgba(57, 255, 20, 0.1)', border: '1px solid rgba(57, 255, 20, 0.3)', borderRadius: '6px', color: 'var(--neon-green)', fontSize: '0.9rem', fontWeight: 600, transition: 'all 0.3s', cursor: 'pointer' }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(57, 255, 20, 0.2)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(57, 255, 20, 0.3)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(57, 255, 20, 0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <ExternalLink size={18} /> View Live Project
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
