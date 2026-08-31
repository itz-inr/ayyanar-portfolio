// src/components/ProjectMockup.jsx
import React, { useState } from 'react';
import './ProjectMockup.css';

const ProjectMockup = ({ type, title, image }) => {
  const [imageError, setImageError] = useState(false);

  const getBadgeLabel = () => {
    return image && !imageError ? "Project Screenshot" : "Concept Preview";
  };

  const renderContent = () => {
    if (image && !imageError) {
      return (
        <img 
          src={image} 
          alt={title} 
          className="mockup-img" 
          onError={() => setImageError(true)}
        />
      );
    }

    switch (type) {
      case 'elearning':
        return (
          <svg className="mockup-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" rx="12" fill="#0d1117" />
            <rect x="20" y="20" width="360" height="30" rx="6" fill="#161b22" />
            <circle cx="35" cy="35" r="5" fill="#ff5f56" />
            <circle cx="50" cy="35" r="5" fill="#ffbd2e" />
            <circle cx="65" cy="35" r="5" fill="#27c93f" />
            <rect x="90" y="28" width="120" height="14" rx="3" fill="#21262d" />
            {/* Sidebar */}
            <rect x="20" y="60" width="90" height="160" rx="6" fill="#161b22" />
            <rect x="30" y="75" width="70" height="10" rx="2" fill="#00e5ff" opacity="0.8" />
            <rect x="30" y="95" width="50" height="8" rx="2" fill="#8b949e" />
            <rect x="30" y="115" width="60" height="8" rx="2" fill="#8b949e" />
            <rect x="30" y="135" width="40" height="8" rx="2" fill="#8b949e" />
            {/* Content Area */}
            <rect x="120" y="60" width="260" height="75" rx="6" fill="#161b22" />
            <circle cx="160" cy="97" r="22" stroke="#00e5ff" strokeWidth="4" strokeDasharray="100 38" fill="none" />
            <text x="160" y="101" textAnchor="middle" fill="#00e5ff" fontSize="10" fontWeight="bold">72%</text>
            <rect x="195" y="80" width="140" height="10" rx="2" fill="#f0f6fc" />
            <rect x="195" y="98" width="110" height="8" rx="2" fill="#8b949e" />
            {/* Cards Grid */}
            <rect x="120" y="145" width="125" height="75" rx="6" fill="#161b22" />
            <rect x="130" y="158" width="80" height="8" rx="2" fill="#00e5ff" />
            <rect x="130" y="174" width="105" height="6" rx="2" fill="#8b949e" />
            <rect x="130" y="186" width="60" height="6" rx="2" fill="#30363d" />
            
            <rect x="255" y="145" width="125" height="75" rx="6" fill="#161b22" />
            <rect x="265" y="158" width="70" height="8" rx="2" fill="#79c0ff" />
            <rect x="265" y="174" width="100" height="6" rx="2" fill="#8b949e" />
            <rect x="265" y="186" width="50" height="6" rx="2" fill="#30363d" />
          </svg>
        );

      case 'worker':
        return (
          <svg className="mockup-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" rx="12" fill="#0b0f19" />
            <rect x="20" y="20" width="360" height="40" rx="6" fill="#151c2c" />
            <rect x="35" y="32" width="100" height="16" rx="4" fill="#00e5ff" opacity="0.9" />
            <rect x="280" y="32" width="80" height="16" rx="8" fill="#1e293b" />
            {/* Table Header */}
            <rect x="20" y="70" width="360" height="25" rx="4" fill="#1e293b" />
            <text x="35" y="86" fill="#94a3b8" fontSize="9" fontWeight="600">ID / NAME</text>
            <text x="160" y="86" fill="#94a3b8" fontSize="9" fontWeight="600">SHIFT</text>
            <text x="250" y="86" fill="#94a3b8" fontSize="9" fontWeight="600">STATUS</text>
            <text x="330" y="86" fill="#94a3b8" fontSize="9" fontWeight="600">ACTIONS</text>
            {/* Table Rows */}
            <rect x="20" y="102" width="360" height="36" rx="4" fill="#151c2c" />
            <circle cx="40" cy="120" r="10" fill="#334155" />
            <rect x="58" y="115" width="80" height="10" rx="2" fill="#f8fafc" />
            <rect x="160" y="116" width="50" height="8" rx="2" fill="#64748b" />
            <rect x="250" y="112" width="55" height="16" rx="8" fill="#10b981" opacity="0.2" />
            <text x="277" y="123" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold">PRESENT</text>
            
            <rect x="20" y="144" width="360" height="36" rx="4" fill="#151c2c" />
            <circle cx="40" cy="162" r="10" fill="#334155" />
            <rect x="58" y="157" width="90" height="10" rx="2" fill="#f8fafc" />
            <rect x="160" y="158" width="45" height="8" rx="2" fill="#64748b" />
            <rect x="250" y="154" width="55" height="16" rx="8" fill="#ef4444" opacity="0.2" />
            <text x="277" y="165" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">ABSENT</text>

            <rect x="20" y="186" width="360" height="36" rx="4" fill="#151c2c" />
            <circle cx="40" cy="204" r="10" fill="#334155" />
            <rect x="58" y="199" width="75" height="10" rx="2" fill="#f8fafc" />
            <rect x="160" y="200" width="55" height="8" rx="2" fill="#64748b" />
            <rect x="250" y="196" width="55" height="16" rx="8" fill="#10b981" opacity="0.2" />
            <text x="277" y="207" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold">PRESENT</text>
          </svg>
        );

      case 'hotel':
      case 'billing':
      case 'cosmetics':
        return (
          <svg className="mockup-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" rx="12" fill="#111827" />
            {/* POS Top Bar */}
            <rect x="15" y="15" width="240" height="35" rx="6" fill="#1f2937" />
            <rect x="265" y="15" width="120" height="35" rx="6" fill="#374151" />
            <text x="325" y="36" textAnchor="middle" fill="#00e5ff" fontSize="11" fontWeight="bold">REC #8492</text>
            {/* Left Item Menu Grid */}
            <rect x="15" y="60" width="72" height="70" rx="6" fill="#1f2937" stroke="#00e5ff" strokeWidth="1" />
            <rect x="25" y="105" width="52" height="8" rx="2" fill="#f9fafb" />
            <rect x="15" y="140" width="72" height="70" rx="6" fill="#1f2937" />
            <rect x="25" y="185" width="52" height="8" rx="2" fill="#9ca3af" />

            <rect x="99" y="60" width="72" height="70" rx="6" fill="#1f2937" />
            <rect x="109" y="105" width="52" height="8" rx="2" fill="#9ca3af" />
            <rect x="99" y="140" width="72" height="70" rx="6" fill="#1f2937" />
            <rect x="109" y="185" width="52" height="8" rx="2" fill="#9ca3af" />

            <rect x="183" y="60" width="72" height="70" rx="6" fill="#1f2937" />
            <rect x="193" y="105" width="52" height="8" rx="2" fill="#9ca3af" />
            <rect x="183" y="140" width="72" height="70" rx="6" fill="#1f2937" />
            <rect x="193" y="185" width="52" height="8" rx="2" fill="#9ca3af" />
            {/* Right Receipt Panel */}
            <rect x="265" y="60" width="120" height="150" rx="6" fill="#1f2937" />
            <rect x="275" y="72" width="100" height="8" rx="2" fill="#f9fafb" />
            <line x1="275" y1="88" x2="375" y2="88" stroke="#374151" strokeDasharray="4 2" />
            <rect x="275" y="98" width="60" height="6" rx="1" fill="#9ca3af" />
            <rect x="345" y="98" width="30" height="6" rx="1" fill="#00e5ff" />
            <rect x="275" y="112" width="70" height="6" rx="1" fill="#9ca3af" />
            <rect x="355" y="112" width="20" height="6" rx="1" fill="#00e5ff" />
            <line x1="275" y1="130" x2="375" y2="130" stroke="#374151" />
            <rect x="275" y="142" width="40" height="10" rx="2" fill="#f9fafb" />
            <text x="375" y="150" textAnchor="end" fill="#10b981" fontSize="11" fontWeight="bold">₹480.00</text>
            <rect x="275" y="165" width="100" height="30" rx="6" fill="#00e5ff" />
            <text x="325" y="184" textAnchor="middle" fill="#000" fontSize="10" fontWeight="bold">PRINT BILL</text>
          </svg>
        );

      case 'food':
      case 'menswear':
        return (
          <svg className="mockup-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" rx="12" fill="#0f172a" />
            <rect x="20" y="20" width="360" height="30" rx="6" fill="#1e293b" />
            <rect x="35" y="29" width="70" height="12" rx="3" fill="#f8fafc" />
            <circle cx="355" cy="35" r="10" fill="#00e5ff" opacity="0.3" />
            {/* Store Grid */}
            <rect x="20" y="65" width="110" height="150" rx="8" fill="#1e293b" />
            <rect x="30" y="75" width="90" height="70" rx="6" fill="#334155" />
            <rect x="30" y="155" width="70" height="8" rx="2" fill="#f8fafc" />
            <rect x="30" y="170" width="40" height="10" rx="2" fill="#38bdf8" />
            <rect x="30" y="188" width="90" height="18" rx="4" fill="#00e5ff" />

            <rect x="145" y="65" width="110" height="150" rx="8" fill="#1e293b" />
            <rect x="155" y="75" width="90" height="70" rx="6" fill="#334155" />
            <rect x="155" y="155" width="75" height="8" rx="2" fill="#f8fafc" />
            <rect x="155" y="170" width="40" height="10" rx="2" fill="#38bdf8" />
            <rect x="155" y="188" width="90" height="18" rx="4" fill="#00e5ff" />

            <rect x="270" y="65" width="110" height="150" rx="8" fill="#1e293b" />
            <rect x="280" y="75" width="90" height="70" rx="6" fill="#334155" />
            <rect x="280" y="155" width="65" height="8" rx="2" fill="#f8fafc" />
            <rect x="280" y="170" width="40" height="10" rx="2" fill="#38bdf8" />
            <rect x="280" y="188" width="90" height="18" rx="4" fill="#00e5ff" />
          </svg>
        );

      case 'image':
      case 'data':
      case 'smartride':
        return (
          <svg className="mockup-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" rx="12" fill="#080e1a" />
            <text x="20" y="35" fill="#00e5ff" fontSize="11" fontWeight="bold" letterSpacing="1">PIPELINE EXECUTION MONITOR</text>
            {/* Flow Diagram */}
            <rect x="20" y="60" width="100" height="120" rx="8" fill="#111c30" stroke="#1d2d4a" />
            <text x="70" y="85" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">INPUT SOURCE</text>
            <rect x="35" y="100" width="70" height="60" rx="4" fill="#1e293b" />
            <path d="M45 145 L65 120 L75 135 L90 115 L95 145 Z" fill="#38bdf8" opacity="0.5" />

            <path d="M125 120 L150 120" stroke="#00e5ff" strokeWidth="2" strokeDasharray="4 2" />
            <polygon points="155,120 148,116 148,124" fill="#00e5ff" />

            <rect x="155" y="60" width="100" height="120" rx="8" fill="#111c30" stroke="#00e5ff" strokeWidth="1.5" />
            <text x="205" y="85" textAnchor="middle" fill="#00e5ff" fontSize="9" fontWeight="600">ANALYSIS ENGINE</text>
            <circle cx="205" cy="130" r="24" stroke="#00e5ff" strokeWidth="2" fill="none" />
            <path d="M195 130 L202 137 L217 122" stroke="#00e5ff" strokeWidth="2" fill="none" />

            <path d="M260 120 L285 120" stroke="#00e5ff" strokeWidth="2" strokeDasharray="4 2" />
            <polygon points="290,120 283,116 283,124" fill="#00e5ff" />

            <rect x="290" y="60" width="90" height="120" rx="8" fill="#111c30" stroke="#1d2d4a" />
            <text x="335" y="85" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="600">OUTPUT DATA</text>
            <rect x="303" y="100" width="64" height="8" rx="2" fill="#10b981" opacity="0.8" />
            <rect x="303" y="115" width="50" height="6" rx="1" fill="#64748b" />
            <rect x="303" y="128" width="58" height="6" rx="1" fill="#64748b" />
            <rect x="303" y="141" width="40" height="6" rx="1" fill="#64748b" />

            {/* Bottom Status bar */}
            <rect x="20" y="195" width="360" height="28" rx="4" fill="#111c30" />
            <circle cx="35" cy="209" r="4" fill="#10b981" />
            <text x="46" y="212" fill="#94a3b8" fontSize="9">Status: Pipeline Active • Processing Completed Successfully</text>
          </svg>
        );

      case 'emailserver':
      case 'devsuite':
        return (
          <svg className="mockup-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" rx="12" fill="#0d1117" />
            <rect x="20" y="20" width="360" height="25" rx="4" fill="#161b22" />
            <circle cx="32" cy="32" r="4" fill="#ff5f56" />
            <circle cx="44" cy="32" r="4" fill="#ffbd2e" />
            <circle cx="56" cy="32" r="4" fill="#27c93f" />
            <text x="75" y="35" fill="#8b949e" fontSize="9" fontFamily="monospace">server.log — java SocketListener:2525</text>

            <rect x="20" y="55" width="360" height="165" rx="4" fill="#0a0d12" />
            <text x="35" y="80" fill="#79c0ff" fontSize="10" fontFamily="monospace">[INFO] ServerSocket listening on TCP port 2525...</text>
            <text x="35" y="98" fill="#7ee787" fontSize="10" fontFamily="monospace">&gt; HELO client.local</text>
            <text x="35" y="116" fill="#c9d1d9" fontSize="10" fontFamily="monospace">250 Hello client.local, pleased to meet you</text>
            <text x="35" y="134" fill="#7ee787" fontSize="10" fontFamily="monospace">&gt; MAIL FROM:&lt;ayyanar@domain.com&gt;</text>
            <text x="35" y="152" fill="#c9d1d9" fontSize="10" fontFamily="monospace">250 Sender OK</text>
            <text x="35" y="170" fill="#7ee787" fontSize="10" fontFamily="monospace">&gt; RCPT TO:&lt;receiver@domain.com&gt;</text>
            <text x="35" y="188" fill="#c9d1d9" fontSize="10" fontFamily="monospace">250 Recipient OK — Message queued for delivery</text>
            <rect x="330" y="180" width="10" height="12" fill="#00e5ff" opacity="0.8" />
          </svg>
        );

      default:
        return (
          <svg className="mockup-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" rx="12" fill="#121824" />
            <rect x="30" y="30" width="340" height="180" rx="8" fill="#1a2332" stroke="#00e5ff" strokeWidth="1" strokeDasharray="6 4" />
            <circle cx="200" cy="100" r="28" fill="#00e5ff" opacity="0.1" />
            <path d="M190 100 L210 100 M200 90 L200 110" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" />
            <text x="200" y="145" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="600">{title}</text>
            <text x="200" y="165" textAnchor="middle" fill="#00e5ff" fontSize="10" fontWeight="bold">CONCEPT PREVIEW</text>
          </svg>
        );
    }
  };

  return (
    <div className="project-mockup-wrapper">
      <div className="mockup-badge">{getBadgeLabel()}</div>
      {renderContent()}
    </div>
  );
};

export default ProjectMockup;

