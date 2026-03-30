import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates to range [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random particles
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 30, // Much slower: 30 to 50 seconds
    delay: Math.random() * 10,         // Slower initial delay
    zIndex: Math.floor(Math.random() * 3), // For parallax depth
  }));

  // Style objects for layers to move at different speeds based on mouse
  const backLayerStyle = {
    x: mousePosition.x * -20,
    y: mousePosition.y * -20,
    transition: { type: 'spring', damping: 50, stiffness: 200 }
  };
  
  const midLayerStyle = {
    x: mousePosition.x * -40,
    y: mousePosition.y * -40,
    transition: { type: 'spring', damping: 50, stiffness: 200 }
  };
  
  const frontLayerStyle = {
    x: mousePosition.x * -80,
    y: mousePosition.y * -80,
    transition: { type: 'spring', damping: 50, stiffness: 200 }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, width: '100%', height: '100%',
      zIndex: 0, overflow: 'hidden', pointerEvents: 'none',
      background: 'radial-gradient(circle at 50% 50%, #111 0%, #050505 100%)'
    }}>
      
      {/* Dynamic Grid Background */}
      <motion.div 
        animate={{ 
          x: mousePosition.x * -30, 
          y: mousePosition.y * -30,
          rotateX: mousePosition.y * 5,
          rotateY: mousePosition.x * -5
        }}
        style={{
          position: 'absolute',
          top: '-50%', left: '-50%', width: '200%', height: '200%',
          backgroundImage: `
            linear-gradient(to right, rgba(57, 255, 20, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(57, 255, 20, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transformPerspective: '1000px',
        }}
      />
      
      {/* Floating Geometric Orbs / Blurs */}
      <motion.div
        animate={{ x: mousePosition.x * -60, y: mousePosition.y * -60 }}
        style={{
          position: 'absolute', top: '20%', left: '10%',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(57,255,20,0.1) 0%, transparent 60%)',
          filter: 'blur(40px)', mixBlendMode: 'screen'
        }}
      />
      <motion.div
        animate={{ x: mousePosition.x * 40, y: mousePosition.y * 40 }}
        style={{
          position: 'absolute', bottom: '10%', right: '5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(57,255,20,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)', mixBlendMode: 'screen'
        }}
      />

      {/* Spatial Particles */}
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        {particles.map((p) => {
          const layerClass = p.zIndex === 0 ? backLayerStyle : p.zIndex === 1 ? midLayerStyle : frontLayerStyle;
          const opacity = p.zIndex === 0 ? 0.3 : p.zIndex === 1 ? 0.6 : 1;
          
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: [opacity * 0.5, opacity, opacity * 0.5],
                y: [0, -window.innerHeight * 1.5],
                ...layerClass
              }}
              transition={{
                opacity: { duration: 3, repeat: Infinity, repeatType: 'reverse' },
                y: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
                x: layerClass.transition,
                y_layer: layerClass.transition // handles parallax offset
              }}
              style={{
                position: 'absolute',
                left: p.left,
                top: p.top, // Initial random start point; animation takes over
                width: p.size,
                height: p.size,
                backgroundColor: 'var(--neon-green)',
                borderRadius: '50%',
                boxShadow: '0 0 10px var(--neon-glow)'
              }}
            />
          );
        })}
      </div>
      
    </div>
  );
};

export default Background;
