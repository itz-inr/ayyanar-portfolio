// src/components/ProjectModal.jsx
import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight, CheckCircle2, AlertCircle, Layers, Database, Server, Code, UserCheck, ShieldCheck, Star } from 'lucide-react';
import { GithubIcon } from './icons';
import ProjectMockup from './ProjectMockup';
import './ProjectModal.css';

const ProjectModal = ({ project, projects, onClose, onSelectProject }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  // Calculate 2-3 related projects based on tags or hierarchy
  const relatedProjects = projects
    .filter(p => p.id !== project.id && (
      p.category === project.category ||
      p.hierarchy === project.hierarchy ||
      p.filterTags.some(tag => tag !== 'All' && project.filterTags.includes(tag))
    ))
    .slice(0, 3);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Header Bar */}
        <div className="modal-header">
          <div className="modal-header-info">
            <span className="modal-category-badge">{project.category}</span>
            <span className={`modal-status-badge status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
              {project.status}
            </span>
            {project.type && <span className="modal-type-badge">{project.type}</span>}
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Case Study">
            <X size={20} />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="modal-body">

          {/* 01 — Hero / Banner */}
          <div className="modal-hero">
            <h1 className="modal-title">{project.name}</h1>
            <p className="modal-tagline">{project.shortDescription}</p>
            {project.achievementBadge && (
              <div className="modal-achievement-badge">
                <Star size={16} /> {project.achievementBadge}
              </div>
            )}
            <div className="modal-tech-pills">
              {project.technologies?.map((tech, idx) => (
                <span key={idx} className="modal-tech-pill">{tech}</span>
              ))}
            </div>
          </div>

          {/* 15 — Visual Preview / Screenshot */}
          <div className="modal-visual-frame">
            <ProjectMockup type={project.mockupType} title={project.name} image={project.image} />
          </div>

          {/* Quick Info Grid */}
          <div className="modal-quick-grid">
            {project.role && (
              <div className="quick-info-card">
                <UserCheck size={18} className="info-icon" />
                <div>
                  <strong>My Role</strong>
                  <p>{project.role}</p>
                </div>
              </div>
            )}
            {project.technology && (
              <div className="quick-info-card">
                <Code size={18} className="info-icon" />
                <div>
                  <strong>Technologies</strong>
                  <p>{project.technology}</p>
                </div>
              </div>
            )}
            {project.ownership && (
              <div className="quick-info-card">
                <ShieldCheck size={18} className="info-icon" />
                <div>
                  <strong>Ownership / Context</strong>
                  <p>{project.ownership}</p>
                </div>
              </div>
            )}
          </div>

          {/* 01 — Overview */}
          {project.overview && (
            <section className="modal-section">
              <h2 className="modal-section-heading"><span>01</span> Overview</h2>
              <p className="modal-text-lead">{project.overview}</p>
            </section>
          )}

          {/* 02 & 03 — Problem & Objective */}
          {(project.problem || project.objective) && (
            <div className="modal-two-col">
              {project.problem && (
                <div className="modal-col-card problem-card">
                  <h3 className="modal-sub-heading"><AlertCircle size={18} /> 02 — Problem</h3>
                  <p>{project.problem}</p>
                </div>
              )}
              {project.objective && (
                <div className="modal-col-card objective-card">
                  <h3 className="modal-sub-heading"><CheckCircle2 size={18} /> 03 — Objective</h3>
                  <p>{project.objective}</p>
                </div>
              )}
            </div>
          )}

          {/* 04 — Solution */}
          {project.solution && (
            <section className="modal-section solution-section">
              <h2 className="modal-section-heading"><span>04</span> Solution Architecture</h2>
              <p className="modal-text">{project.solution}</p>
            </section>
          )}

          {/* 05 — Key Features */}
          {project.features && project.features.length > 0 && (
            <section className="modal-section">
              <h2 className="modal-section-heading"><span>05</span> Key Verified Features</h2>
              <div className="modal-features-grid">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="feature-item">
                    <CheckCircle2 size={16} className="feature-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 06 & 07 — User Flow & UI/UX */}
          {(project.userFlow || project.uiUx) && (
            <div className="modal-two-col">
              {project.userFlow && (
                <div className="modal-col-card">
                  <h3 className="modal-sub-heading">06 — User Flow</h3>
                  <p>{project.userFlow}</p>
                </div>
              )}
              {project.uiUx && (
                <div className="modal-col-card">
                  <h3 className="modal-sub-heading">07 — UI/UX Strategy</h3>
                  <p>{project.uiUx}</p>
                </div>
              )}
            </div>
          )}

          {/* 08, 09, 10, 11 — Technical Architecture breakdown */}
          {(project.frontend || project.backend || project.database || project.api) && (
            <section className="modal-section tech-breakdown-section">
              <h2 className="modal-section-heading"><span>08-11</span> Technical Architecture</h2>
              <div className="tech-architecture-grid">
                {project.frontend && (
                  <div className="arch-card">
                    <Layers size={18} className="arch-icon" />
                    <h4>08 — Frontend</h4>
                    <p>{project.frontend}</p>
                  </div>
                )}
                {project.backend && (
                  <div className="arch-card">
                    <Server size={18} className="arch-icon" />
                    <h4>09 — Backend</h4>
                    <p>{project.backend}</p>
                  </div>
                )}
                {project.database && (
                  <div className="arch-card">
                    <Database size={18} className="arch-icon" />
                    <h4>10 — Database</h4>
                    <p>{project.database}</p>
                  </div>
                )}
                {project.api && (
                  <div className="arch-card">
                    <Code size={18} className="arch-icon" />
                    <h4>11 — API Layer</h4>
                    <p>{project.api}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 13 & 14 — Challenges & Implementation */}
          {(project.challenges || project.implementation) && (
            <div className="modal-two-col">
              {project.challenges && (
                <div className="modal-col-card">
                  <h3 className="modal-sub-heading">13 — Technical Challenges</h3>
                  <p>{project.challenges}</p>
                </div>
              )}
              {project.implementation && (
                <div className="modal-col-card">
                  <h3 className="modal-sub-heading">14 — Implementation Notes</h3>
                  <p>{project.implementation}</p>
                </div>
              )}
            </div>
          )}

          {/* 16 & 17 — Results & Future Improvements */}
          {(project.results || project.futureImprovements) && (
            <div className="modal-two-col">
              {project.results && (
                <div className="modal-col-card highlight-card">
                  <h3 className="modal-sub-heading">16 — Measured Results</h3>
                  <p>{project.results}</p>
                </div>
              )}
              {project.futureImprovements && (
                <div className="modal-col-card">
                  <h3 className="modal-sub-heading">17 — Future Improvements</h3>
                  <p>{project.futureImprovements}</p>
                </div>
              )}
            </div>
          )}

          {/* 18 & 19 — Links (Only render if available!) */}
          {(project.github || project.liveDemo) && (
            <div className="modal-action-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary btn-icon">
                  <GithubIcon size={18} /> 18 — View Code Repository
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn btn-primary btn-icon">
                  <ExternalLink size={18} /> 19 — Open Live Demo
                </a>
              )}
            </div>
          )}

          {/* 20 — Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="modal-section related-section">
              <h2 className="modal-section-heading"><span>20</span> Explore Related Projects</h2>
              <div className="related-projects-grid">
                {relatedProjects.map(rel => (
                  <div key={rel.id} className="related-card" onClick={() => onSelectProject(rel)}>
                    <span className="related-cat">{rel.category}</span>
                    <h4 className="related-title">{rel.name}</h4>
                    <p className="related-desc">{rel.shortDescription}</p>
                    <button className="related-btn">
                      View Project <ArrowRight size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="modal-footer">
          <span>Need a similar solution for your business?</span>
          <a 
            href="#contact" 
            className="btn btn-primary"
            onClick={() => {
              onClose();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Project <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
