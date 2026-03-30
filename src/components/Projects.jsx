import { motion } from 'framer-motion';
import { Activity, Server, Code2 } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ExternalLinkIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const projects = [
  {
    title: "Carpooling & Ride Sharing",
    role: "Full Stack Implementation",
    icon: <Server size={30} className="text-neon" />,
    tech: ["PHP", "SQL", "HTML/CSS/JS"],
    description: "Developed a responsive web-based platform enabling users to register, create ride offers, and search for immediate carpools for efficient travel.",
    logic: "Built stateful session management in PHP and wrote optimized SQL queries with indexing on trip routes to ensure rapid ride-matching data retrieval.",
    github: "https://github.com/ayushyadav02", // Fallback generic link
    live: "#" // Fallback generic link
  },
  {
    title: "Intelligent CPU Scheduler",
    role: "Algorithm Implementation",
    icon: <Activity size={30} className="text-neon" />,
    tech: ["Python", "Streamlit", "Algorithms"],
    description: "Engineered an algorithmic simulator that computes optimal process execution paths using parameter ingestion (burst time, priority matrices).",
    logic: "Built algorithmic modules for FCFS, SJF, Priority, and Round Robin. Developed a dynamic heuristic to select the most optimal algorithm per run.",
    github: "https://github.com/ayushyadav02",
    live: null
  },
  {
    title: "Online Library Management",
    role: "MERN Stack Application",
    icon: <Code2 size={30} className="text-neon" />,
    tech: ["MongoDB", "Express", "React", "Node"],
    description: "Constructed strict Mongoose models enforcing schema validation. Developed role-based middleware for secure Express route access.",
    logic: "Refactored React state management using Context API to eliminate prop-drilling, successfully reducing redundant server requests by 30%.",
    github: "https://github.com/ayushyadav02",
    live: null
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container" style={{ minHeight: '100vh', paddingTop: '8rem' }}>
      <div className="section-title-wrapper">
        <h2 className="section-title">Featured <span className="text-neon">Projects</span></h2>
        <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '1.5rem auto 0 auto' }}>
          A technical showcase of my applications, architecture, and core functional logic.
        </p>
      </div>

      <style>{`
        .projects-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }
        .project-card {
          flex: 1 1 320px;
          max-width: 450px;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-pane project-card"
            style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--neon-green)', filter: 'blur(80px)', opacity: 0.1 }}></div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(57, 255, 20, 0.05)', borderRadius: '12px', border: '1px solid rgba(57, 255, 20, 0.2)' }}>
                  {proj.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>{proj.title}</h3>
                  <span style={{ fontSize: '0.9rem', color: 'var(--neon-green)' }}>{proj.role}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {proj.tech.map((t, i) => (
                <span key={i} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: '#111', borderRadius: '4px', border: '1px solid #333' }}>
                  {t}
                </span>
              ))}
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.7, flex: 1 }}>
              {proj.description}
            </p>

            <div style={{ padding: '1.2rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', borderLeft: '3px solid var(--neon-green)', marginBottom: '1.5rem' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>Core Logic:</strong>
              <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: 1.6 }}>{proj.logic}</p>
            </div>

            {/* Links section at the bottom */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--neon-green)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  <GithubIcon size={18} /> Code
                </a>
              )}
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--neon-green)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  <ExternalLinkIcon size={18} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
