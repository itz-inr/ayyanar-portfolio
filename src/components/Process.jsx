import React from 'react';
import './Process.css';

const Process = () => {
  return (
    <section className="section process" id="process">
      <div className="container">
        
        <div className="business-first text-center">
          <h2 className="section-title">
            Don't Adapt Your Business To Software.<br />
            <span>Build Software Around Your Business.</span>
          </h2>
          <p className="process-desc">
            Custom software designed around your actual workflow, users, processes, and business requirements.
          </p>

          <div className="flow-diagram">
            <div className="flow-step">Manual Business Process</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step highlight">Custom Web Application</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Backend + REST API</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Database</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Admin Dashboard</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step final">Better Digital Workflow</div>
          </div>
        </div>

        <div className="idea-to-product mt-5">
          <h2 className="text-center mb-4">From Idea to Product</h2>
          <div className="timeline-grid">
            {[
              { id: "01", title: "Idea", desc: "Client explains the business idea or problem." },
              { id: "02", title: "Discovery", desc: "Understand users, workflow, requirements, and objectives." },
              { id: "03", title: "Planning", desc: "Define features, technology, architecture, database, and APIs." },
              { id: "04", title: "UI/UX", desc: "Design intuitive web/mobile experiences." },
              { id: "05", title: "Development", desc: "Build frontend, backend, APIs, database, and integrations." },
              { id: "06", title: "Testing", desc: "Test functionality, responsiveness, APIs, security, and usability." },
              { id: "07", title: "Deployment", desc: "Prepare and deliver the application." },
              { id: "08", title: "Support", desc: "Provide agreed maintenance and future enhancements." },
            ].map(step => (
              <div key={step.id} className="process-card">
                <div className="process-num">{step.id}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
