import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>AYYANAR<span className="accent">.</span></h2>
            <p className="footer-desc">Turning Ideas Into Powerful Digital Solutions.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Solutions</h4>
              <a href="#services">Websites</a>
              <a href="#services">Web Apps</a>
              <a href="#services">Mobile Apps</a>
              <a href="#services">Custom Software</a>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={`mailto:${personalInfo.email}`}>Email</a>
              <a href={`https://wa.me/91${personalInfo.phone}`} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="footer-socials">
            <a href={personalInfo.github} target="_blank" rel="noreferrer"><GithubIcon size={20} /></a>
            <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer"><LinkedinIcon size={20} /></a>
            <a href={`mailto:${personalInfo.email}`}><Mail size={20} /></a>
            <a href={`tel:${personalInfo.phone}`}><Phone size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
