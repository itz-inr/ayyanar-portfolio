import React from 'react';
import { ArrowRight, Download, Mail, Phone, Globe, Smartphone, Cpu, Database, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  // Process headline to highlight key phrases if desired
  const renderHeadline = (headline) => {
    if (!headline) return null;
    const highlightPhrase = "Digital Solutions";
    if (headline.includes(highlightPhrase)) {
      const parts = headline.split(highlightPhrase);
      return (
        <>
          {parts[0]}
          <span className="hero-title-highlight">{highlightPhrase}</span>
          {parts[1]}
        </>
      );
    }
    return headline;
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <p className="hero-intro">{personalInfo.heroIntro}</p>
          <h1 className="hero-title">{renderHeadline(personalInfo.heroHeadline)}</h1>
          <h2 className="hero-subtitle">{personalInfo.heroSupportingHeadline}</h2>
          
          <div className="hero-desc-box">
            <p className="hero-desc">{personalInfo.heroDescription}</p>
            <p className="hero-tech-desc">{personalInfo.heroTechnical}</p>
          </div>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Start Your Project <ArrowRight size={18} />
            </a>
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
            <a href="/resume.pdf" target="_blank" className="btn btn-secondary btn-icon" download>
              <Download size={18} /> Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
            <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email"><Mail /></a>
            <a href={`https://wa.me/91${personalInfo.phone}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Phone /></a>
          </div>
        </div>

        {/* Hero Visual Side Container with Floating Cards */}
        <div className="hero-visual fade-in">
          <div className="hero-visual-card">
            <div className="code-window-header">
              <span className="code-dot dot-red"></span>
              <span className="code-dot dot-yellow"></span>
              <span className="code-dot dot-green"></span>
              <span className="code-filename">ayyanar.portfolio.js</span>
            </div>
            <div className="code-window-body">
              <p><span className="token-keyword">const</span> developer = &#123;</p>
              <p className="token-indent"><span className="token-prop">name</span>: <span className="token-string">"{personalInfo.name}"</span>,</p>
              <p className="token-indent"><span className="token-prop">role</span>: <span className="token-string">"Full Stack Digital Solutions"</span>,</p>
              <p className="token-indent"><span className="token-prop">coreStack</span>: [<span className="token-string">"Java"</span>, <span className="token-string">"Spring Boot"</span>, <span className="token-string">"React"</span>, <span className="token-string">"REST API"</span>],</p>
              <p className="token-indent"><span className="token-prop">status</span>: <span className="token-string">"Available for Projects"</span></p>
              <p>&#125;;</p>
            </div>
          </div>

          {/* Floating Badges */}
          <div className="hero-floating-card badge-web">
            <Globe size={18} className="badge-icon icon-cyan" />
            <span>Web Applications</span>
          </div>

          <div className="hero-floating-card badge-mobile">
            <Smartphone size={18} className="badge-icon icon-purple" />
            <span>Mobile Apps</span>
          </div>

          <div className="hero-floating-card badge-api">
            <Cpu size={18} className="badge-icon icon-blue" />
            <span>REST APIs</span>
          </div>

          <div className="hero-floating-card badge-db">
            <Database size={18} className="badge-icon icon-pink" />
            <span>Databases</span>
          </div>

          <div className="hero-floating-card badge-custom">
            <Code2 size={18} className="badge-icon icon-cyan" />
            <span>Custom Software</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
