import React, { useState } from 'react';
import { experience, education, certifications, achievements } from '../data/portfolioData';
import { Award, Briefcase, GraduationCap, Medal } from 'lucide-react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <p className="section-subtitle">
          A developer focused on creating practical digital solutions, specialized in Java, Spring Boot, REST APIs, and full-stack development.
        </p>

        <div className="about-layout">
          <div className="about-tabs">
            <button 
              className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <Briefcase size={20} /> Experience
            </button>
            <button 
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <GraduationCap size={20} /> Education
            </button>
            <button 
              className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
              onClick={() => setActiveTab('achievements')}
            >
              <Award size={20} /> Achievements
            </button>
            <button 
              className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('certifications')}
            >
              <Medal size={20} /> Certifications
            </button>
          </div>

          <div className="about-content">
            {activeTab === 'experience' && (
              <div className="tab-pane fade-in">
                {experience.map((exp, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <h4 className="timeline-subtitle">{exp.company}</h4>
                    <span className="timeline-date">{exp.period}</span>
                    <ul className="timeline-list">
                      {exp.responsibilities.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="tab-pane fade-in">
                {education.map((edu, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h3 className="timeline-title">{edu.degree}</h3>
                    <h4 className="timeline-subtitle">{edu.institution}</h4>
                    <span className="timeline-date">{edu.period}</span>
                    <p className="timeline-score">{edu.score}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="tab-pane fade-in">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h3 className="timeline-title">{ach.title}</h3>
                    <h4 className="timeline-subtitle highlight">{ach.role}</h4>
                    <p className="timeline-desc">{ach.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="tab-pane fade-in">
                <div className="certifications-grid">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="cert-card">
                      <h4>{cert.name}</h4>
                      <p>{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
