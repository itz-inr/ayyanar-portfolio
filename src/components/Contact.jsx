import React, { useState } from 'react';
import { CheckCircle, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo, faqs } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [activeFormTab, setActiveFormTab] = useState('google');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState(null);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', type: 'Website', platform: 'Web', tech: 'Not Sure', details: ''
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'N/A',
      company: formData.company || 'N/A',
      type: formData.type,
      platform: formData.platform,
      tech: formData.tech,
      details: formData.details,
      timestamp: new Date().toLocaleString()
    };

    setSubmittedSummary(payload);
    setShowSuccessModal(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', company: '', type: 'Website', platform: 'Web', tech: 'Not Sure', details: '' });
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const toggleFaq = (idx) => {
    if (activeFaq === idx) setActiveFaq(null);
    else setActiveFaq(idx);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        
        <div className="contact-layout">
          <div className="contact-left fade-in">
            <h2 className="section-title text-left">Have an Idea? <br/><span>Let's Build It.</span></h2>
            <p className="contact-subtitle">
              Tell me what you're trying to build, and let's discuss the right digital solution for your requirements.
            </p>

            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon"><MapPin size={24} /></div>
                <div>
                  <h4>Location</h4>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={24} /></div>
                <div>
                  <h4>Phone & WhatsApp</h4>
                  <p>
                    <a href={`tel:+91${personalInfo.phone}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>+91 {personalInfo.phone}</a>
                    <span style={{ margin: '0 8px', color: 'var(--accent-cyan)' }}>•</span>
                    <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: 600 }}>WhatsApp Chat</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Mail size={24} /></div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>{personalInfo.email}</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="faq-section mt-5">
              <h3 className="mb-4">Frequently Asked Questions</h3>
              <div className="faq-list">
                {faqs.map((faq, idx) => (
                  <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`}>
                    <div className="faq-question" onClick={() => toggleFaq(idx)}>
                      {faq.question}
                      <span className="faq-icon">{activeFaq === idx ? '−' : '+'}</span>
                    </div>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-right fade-in">
            <div className="form-card">
              <div className="form-tab-header">
                <button 
                  className={`form-tab-btn ${activeFormTab === 'google' ? 'active' : ''}`}
                  onClick={() => setActiveFormTab('google')}
                >
                  📝 Google Form (Official)
                </button>
                <button 
                  className={`form-tab-btn ${activeFormTab === 'quick' ? 'active' : ''}`}
                  onClick={() => setActiveFormTab('quick')}
                >
                  ⚡ Quick Form
                </button>
              </div>

              {activeFormTab === 'google' ? (
                <div className="google-form-container">
                  <div className="google-form-header">
                    <div>
                      <h3>Project Details Form</h3>
                      <p className="google-form-desc">Fill out your project specifications directly via Google Forms.</p>
                    </div>
                    <a 
                      href={personalInfo.googleFormUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-google-external"
                    >
                      Open Form <ExternalLink size={14} />
                    </a>
                  </div>
                  
                  <div className="google-iframe-wrapper">
                    <iframe 
                      src={personalInfo.googleFormEmbedUrl} 
                      title="Google Form Project Enquiry"
                      className="google-form-iframe"
                    >
                      Loading form...
                    </iframe>
                  </div>
                </div>
              ) : (
                <>
                  <iframe name="hidden_gform_iframe" id="hidden_gform_iframe" style={{ display: 'none' }}></iframe>
                  <h3>Quick Project Enquiry</h3>
                  <form 
                    action={personalInfo.googleSheetWebhookUrl} 
                    method="POST" 
                    target="hidden_gform_iframe" 
                    onSubmit={handleSubmit}
                  >
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Company</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} className="form-control" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Project Type</label>
                      <select name="type" value={formData.type} onChange={handleChange} className="form-control">
                        <option>Website</option>
                        <option>Web Application</option>
                        <option>Mobile Application</option>
                        <option>E-Commerce</option>
                        <option>Custom Software</option>
                        <option>Business Management System</option>
                        <option>REST API</option>
                        <option>Backend Development</option>
                        <option>Database Solution</option>
                        <option>Existing Application</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Platform</label>
                        <select name="platform" value={formData.platform} onChange={handleChange} className="form-control">
                          <option>Web</option>
                          <option>Android</option>
                          <option>iOS</option>
                          <option>Web + Mobile</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Preferred Technology</label>
                        <select name="tech" value={formData.tech} onChange={handleChange} className="form-control">
                          <option>Java / Spring Boot</option>
                          <option>React</option>
                          <option>Flutter</option>
                          <option>Node.js / Express.js</option>
                          <option>Not Sure — Recommend One</option>
                        </select>
                      </div>
                    </div>

                    <div className="client-friendly-notice">
                      <strong>Not sure which technology?</strong> That's okay! Select "Recommend One" and I'll help identify a suitable architecture.
                    </div>

                    <div className="form-group">
                      <label className="form-label">Project Description *</label>
                      <textarea name="details" value={formData.details} onChange={handleChange} className="form-control" placeholder="Tell me about your requirements..." required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending Requirements...' : 'Send Enquiry'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* ATTRACTIVE CUSTOM SUCCESS MODAL */}
      {showSuccessModal && (
        <div className="enquiry-modal-backdrop" onClick={() => setShowSuccessModal(false)}>
          <div className="enquiry-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="enquiry-success-badge">
              <CheckCircle size={44} />
            </div>
            <h3>Enquiry Submitted!</h3>
            <p className="enquiry-msg">
              Thank you, <strong>{submittedSummary?.name || 'Client'}</strong>! Your project requirements have been recorded. I will review your details and get back to you shortly.
            </p>

            {submittedSummary && (
              <div className="enquiry-summary-box">
                <div className="enquiry-summary-row">
                  <span className="enquiry-summary-label">Name:</span>
                  <span className="enquiry-summary-val">{submittedSummary.name}</span>
                </div>
                <div className="enquiry-summary-row">
                  <span className="enquiry-summary-label">Email:</span>
                  <span className="enquiry-summary-val">{submittedSummary.email}</span>
                </div>
                <div className="enquiry-summary-row">
                  <span className="enquiry-summary-label">Project:</span>
                  <span className="enquiry-summary-val">{submittedSummary.type}</span>
                </div>
                <div className="enquiry-summary-row">
                  <span className="enquiry-summary-label">Tech Preference:</span>
                  <span className="enquiry-summary-val">{submittedSummary.tech}</span>
                </div>
              </div>
            )}

            <button 
              className="enquiry-modal-close-btn"
              onClick={() => setShowSuccessModal(false)}
            >
              Done & Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
