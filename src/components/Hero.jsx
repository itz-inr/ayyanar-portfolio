import React from 'react';
import { ArrowRight, Download, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <p className="hero-intro">{personalInfo.heroIntro}</p>
          <h1 className="hero-title">{personalInfo.heroHeadline}</h1>
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
      </div>
    </section>
  );
};

export default Hero;
