import React from 'react';
import { whatIBuild } from '../data/portfolioData';
import './WhatIBuild.css';

const WhatIBuild = () => {
  return (
    <section className="section what-i-build" id="what-i-build">
      <div className="container">
        <h2 className="section-title">What Can I Build <span>For You?</span></h2>
        <p className="section-subtitle">
          From websites and mobile apps to custom software built exactly for your workflow.
        </p>

        <div className="build-grid">
          {whatIBuild.map((item, idx) => (
            <div className="build-card fade-in" key={idx} style={{animationDelay: `${idx * 100}ms`}}>
              <div className="build-icon">{item.icon}</div>
              <h3 className="build-title">{item.title}</h3>
              <ul className="build-list">
                {item.items.map((sub, i) => (
                  <li key={i}>{sub}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
