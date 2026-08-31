import React from 'react';
import { trustStrip, trustTechnologies } from '../data/portfolioData';
import './TrustStrip.css';

const TrustStrip = () => {
  return (
    <div className="trust-strip">
      <div className="trust-strip-top">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...trustStrip, ...trustStrip].map((item, index) => (
              <span key={index} className="trust-item">
                <span className="dot"></span> {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="trust-strip-bottom container">
        <div className="tech-badges">
          {trustTechnologies.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
