import React from 'react';
import { experience, education, certifications, achievements } from '../data/portfolioData';
import './Resume.css';

const Resume = () => {
  return (
    <section className="section resume" id="resume">
      <div className="container">
        <h2 className="section-title">My <span>Background</span></h2>
        <p className="section-subtitle">
          Professional experience, education, and credentials.
        </p>

        <div className="resume-grid">
          <div className="resume-column">
            <h3 className="resume-heading">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h4 className="timeline-title">{exp.title}</h4>
                  <div className="timeline-meta">{exp.company} | {exp.period}</div>
                  <ul className="timeline-details">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="resume-heading mt-5">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h4 className="timeline-title">{edu.degree}</h4>
                  <div className="timeline-meta">{edu.institution} | {edu.period}</div>
                  <p className="timeline-score">{edu.score}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-column">
            <h3 className="resume-heading">Certifications</h3>
            <div className="cards-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card">
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer}</p>
                </div>
              ))}
            </div>

            <h3 className="resume-heading mt-5">Achievements</h3>
            <div className="achievements-list">
              {achievements.map((ach, index) => (
                <div key={index} className="achievement-item">
                  <h4>{ach.title} <span>({ach.role})</span></h4>
                  <p>{ach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
