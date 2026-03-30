import { motion } from 'framer-motion';

const skillsData = [
  { category: "Languages", items: ["C", "C++", "Java", "JavaScript", "Python"] },
  { category: "Frontend", items: ["HTML5", "CSS3", "Tailwind CSS", "React.js"] },
  { category: "Backend & Database", items: ["Node.js", "Express.js", "PHP", "MongoDB", "MySQL"] },
  { category: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Postman", "XAMPP"] }
];

const Skills = () => {
  return (
    <section id="skills" className="section-container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="section-title-wrapper">
        <h2 className="section-title">Technical <span className="text-neon">Skills</span></h2>
        <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '1.5rem auto 0 auto' }}>
          My core technologies and tools used for building robust, scalable applications.
        </p>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }
        @media (max-width: 900px) {
          .skills-grid, .edu-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="skills-grid">
        {skillsData.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-pane"
            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'transform 0.3s ease' }}
            whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(57, 255, 20, 0.2)' }}
          >
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
              {skillGroup.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {skillGroup.items.map((item, i) => (
                <span key={i} style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: 'rgba(57, 255, 20, 0.05)',
                  border: '1px solid rgba(57, 255, 20, 0.2)',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500
                }}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education & Achievements Mini Section */}
      <div className="edu-grid">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="glass-pane" style={{ padding: '2rem' }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--neon-green)' }}>Education</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <li>
              <h4 style={{ fontSize: '1.1rem' }}>B.Tech - Computer Science and Engineering</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Lovely Professional University, Punjab (Aug'23 - Present) | CGPA: 8.05</p>
            </li>
            <li>
              <h4 style={{ fontSize: '1.1rem' }}>Intermediate</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Delhi Public International School, Rewari (Apr'22 - Mar'23) | 82.4%</p>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="glass-pane" style={{ padding: '2rem' }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--neon-green)' }}>Achievements</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
            <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--neon-green)' }}>▹</span> 
              Solved 500+ DSA problems across arrays, trees, dynamic programming, etc.
            </li>
            <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--neon-green)' }}>▹</span> 
              Achieved a peak LeetCode Contest rating of 1546.
            </li>
            <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--neon-green)' }}>▹</span> 
              Secured Global Rank 2464 among 30,000+ participants in LeetCode Biweekly Contest 170.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
