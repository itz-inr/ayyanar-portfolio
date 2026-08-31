import React from 'react';
import { technologies } from '../data/portfolioData';
import { CheckCircle, Zap } from 'lucide-react';
import './TechStack.css';

const TechStack = () => {
  return (
    <section className="section tech-stack" id="technologies">
      <div className="container">
        <h2 className="section-title">Technology <span>Stack</span></h2>
        <p className="section-subtitle">
          The right tools for the right problem. Distinguishing verified experience from broader developmental capabilities.
        </p>

        <div className="tech-container">
          <div className="tech-section professional-exp">
            <div className="tech-header">
              <h3><CheckCircle size={24} className="icon-green" /> Documented Professional Experience</h3>
              <p>Technologies supported by direct professional/project experience.</p>
            </div>
            
            <div className="tech-grid">
              {technologies.professional.map((group, idx) => (
                <div key={idx} className="tech-group">
                  <h4>{group.category}</h4>
                  <div className="tech-items">
                    {group.items.map((item, i) => (
                      <span key={i} className="tech-item">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-section available-cap">
            <div className="tech-header">
              <h3><Zap size={24} className="icon-cyan" /> Available Digital Solutions</h3>
              <p>Additional technologies available for freelance projects and custom solutions.</p>
            </div>
            
            <div className="tech-grid">
              {technologies.capabilities.map((group, idx) => (
                <div key={idx} className="tech-group">
                  <h4>{group.category}</h4>
                  <div className="tech-items">
                    {group.items.map((item, i) => (
                      <span key={i} className="tech-item">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
