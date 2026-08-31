import React from 'react';
import { services } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <h2 className="section-title">Digital Solutions & <span>Services</span></h2>
        <p className="section-subtitle">
          Comprehensive capabilities to design, develop, and maintain digital products.
        </p>

        <div className="services-list">
          {services.map((service, idx) => (
            <div className="service-item fade-in" key={idx} style={{ animationDelay: `${idx * 80}ms` }}>
              <div className="service-id">{service.id}</div>
              <div className="service-content">
                <div className="service-header">
                  <h3 className="service-title">{service.title}</h3>
                  <ArrowRight size={20} className="service-arrow" />
                </div>
                <p className="service-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
