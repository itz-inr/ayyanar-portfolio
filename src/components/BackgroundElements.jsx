import React, { useEffect, useState } from 'react';
import './BackgroundElements.css';

// SVG Tech Icons for Floating Background
const TechIconSvg = ({ name }) => {
  switch (name) {
    case 'Java':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C8 6 16 7 12 11M8 14c4 1 8 0 8 0M6 18c6 2 12 1 12 0M10 21c4 1 7 0 7 0" />
        </svg>
      );
    case 'Spring Boot':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
          <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
      );
    case 'React':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'Flutter':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2L5 11l4.5 4.5L20 5.5z" />
          <path d="M14 13l-4.5 4.5L14 22l4.5-4.5z" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" />
          <path d="M12 6.5v11" />
        </svg>
      );
    case 'Express':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 6h16M4 12h16M4 18h10" />
        </svg>
      );
    case 'JavaScript':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M10 16.5c.5.8 1.4 1.3 2.5 1.3 1.5 0 2.5-.8 2.5-2 0-3-4-1.5-4-4.5 0-1.2 1-2 2.5-2 1 0 1.8.4 2.3 1.2" />
          <path d="M8 11v6c0 .8-.5 1.3-1.3 1.3-.5 0-1-.2-1.3-.5" />
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );
    case 'MySQL':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 6h16M4 12h16M4 18h16" />
          <circle cx="8" cy="6" r="1" fill="currentColor" />
          <circle cx="16" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2s-6 5-6 11a6 6 0 0012 0c0-6-6-11-6-11z" />
          <path d="M12 2v20" />
        </svg>
      );
    case 'REST API':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="6" width="20" height="12" rx="3" />
          <circle cx="7" cy="12" r="1.5" />
          <path d="M11 12h6" />
        </svg>
      );
    case 'Git':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <path d="M6 8v8M8 6h8M6 18c4 0 6-3 6-6V6" />
        </svg>
      );
    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
};

const floatingIconsConfig = [
  { name: 'Java', label: 'Java', top: '10%', left: '4%', size: 48, delay: '0s', duration: '8s', opacity: 0.32, color: '#f59e0b' },
  { name: 'Spring Boot', label: 'Spring Boot', top: '35%', left: '5%', size: 48, delay: '1.5s', duration: '10s', opacity: 0.30, color: '#34d399' },
  { name: 'React', label: 'React', top: '20%', left: '88%', size: 52, delay: '2.5s', duration: '7.5s', opacity: 0.35, color: '#06b6d4' },
  { name: 'Flutter', label: 'Flutter', top: '65%', left: '5%', size: 46, delay: '0.8s', duration: '9s', opacity: 0.32, color: '#38bdf8' },
  { name: 'Node.js', label: 'Node.js', top: '50%', left: '90%', size: 50, delay: '2.2s', duration: '11s', opacity: 0.32, color: '#22c55e' },
  { name: 'PostgreSQL', label: 'PostgreSQL', top: '78%', left: '88%', size: 48, delay: '3.5s', duration: '9.5s', opacity: 0.32, color: '#60a5fa' },
  { name: 'MongoDB', label: 'MongoDB', top: '88%', left: '7%', size: 48, delay: '1s', duration: '10s', opacity: 0.30, color: '#4ade80' },
  { name: 'REST API', label: 'REST API', top: '15%', left: '46%', size: 42, delay: '2s', duration: '8.5s', opacity: 0.28, color: '#c084fc' },
  { name: 'Express', label: 'Express', top: '36%', left: '85%', size: 44, delay: '3.8s', duration: '10.5s', opacity: 0.28, color: '#a7f3d0' },
  { name: 'Git', label: 'Git', top: '92%', left: '84%', size: 44, delay: '0.5s', duration: '8.5s', opacity: 0.30, color: '#f97316' },
  { name: 'JavaScript', label: 'JavaScript', top: '70%', left: '48%', size: 44, delay: '1.8s', duration: '12s', opacity: 0.26, color: '#facc15' },
  { name: 'GitHub', label: 'GitHub', top: '28%', left: '12%', size: 46, delay: '3.2s', duration: '9.5s', opacity: 0.30, color: '#c084fc' },
];

const BackgroundElements = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Mouse offset calculation for subtle floating icon interaction
  const mouseShiftX = isDesktop ? (mousePos.x / (window.innerWidth || 1) - 0.5) * 10 : 0;
  const mouseShiftY = isDesktop ? (mousePos.y / (window.innerHeight || 1) - 0.5) * 10 : 0;

  return (
    <div className="background-ecosystem" aria-hidden="true">
      {/* Atmospheric Ambient Color Blobs */}
      <div className="bg-orb orb-primary" />
      <div className="bg-orb orb-secondary" />
      <div className="bg-orb orb-tertiary" />
      <div className="bg-orb orb-highlight" />

      {/* Tech Grid Pattern Overlay */}
      <div className="bg-grid-pattern" />

      {/* Floating Technology Icons */}
      <div
        className="floating-tech-layer"
        style={{
          transform: `translate3d(${mouseShiftX * 0.4}px, ${mouseShiftY * 0.4}px, 0)`,
        }}
      >
        {floatingIconsConfig.map((item, idx) => (
          <div
            key={idx}
            className="floating-icon-item"
            style={{
              top: item.top,
              left: item.left,
              width: `${item.size}px`,
              height: `${item.size}px`,
              animationDelay: item.delay,
              animationDuration: item.duration,
              opacity: item.opacity,
              color: item.color || '#60a5fa',
            }}
            title={item.label}
          >
            <TechIconSvg name={item.name} />
            <span className="floating-icon-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundElements;
