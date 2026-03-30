import { motion } from 'framer-motion';

// Importing existing assets
import buildAi from '../assets/BUILDAIAPPS.png';
import chatgpt from '../assets/CHATGPT.png';
import compTheory from '../assets/COMPUTATIONALTHEORY.png';
import genAi from '../assets/GENERATIVE AI.png';
import hardware from '../assets/Hardware.png';
import digitalSys from '../assets/digital system.png';
import p2p from '../assets/peertopeer.png';

const certificates = [
  { img: genAi, title: "Generative AI" },
  { img: buildAi, title: "Building AI Apps" },
  { img: chatgpt, title: "ChatGPT Insights" },
  { img: compTheory, title: "Computational Theory" },
  { img: hardware, title: "Hardware Fundamentals" },
  { img: digitalSys, title: "Digital Systems" },
  { img: p2p, title: "Peer-to-Peer Networks" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-container" style={{ minHeight: '80vh', paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="section-title-wrapper">
        <h2 className="section-title">Professional <span className="text-neon">Credentials</span></h2>
        <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '1.5rem auto 0 auto' }}>
          Industry-recognized certifications and ongoing technical learning.
        </p>
      </div>

      <style>{`
        .cert-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }
        .cert-card {
          flex: 1 1 280px;
          max-width: 320px;
        }
      `}</style>
      <div className="cert-container">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(57, 255, 20, 0.2)' }}
            className="glass-pane cert-card"
            style={{
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              overflow: 'hidden'
            }}
          >
            <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '8px', marginBottom: '1rem' }}>
              <img 
                src={cert.img} 
                alt={cert.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', textAlign: 'center', fontWeight: '600' }}>
              {cert.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
