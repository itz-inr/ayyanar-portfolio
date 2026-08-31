// src/components/Projects.jsx
import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projectsData';
import { Search, ExternalLink, ArrowRight, Filter, Layers, Cpu, Code2, GraduationCap, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { GithubIcon } from './icons';
import ProjectMockup from './ProjectMockup';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllExpanded, setShowAllExpanded] = useState(false);

  // Available filter buttons specified in requirements
  const filterOptions = [
    'All',
    'Featured',
    'Web Applications',
    'Mobile Applications',
    'Full Stack',
    'Java',
    'Spring Boot',
    'React',
    'Node.js',
    'Flutter',
    'E-Commerce',
    'Business Software',
    'AI / Data',
    'Academic',
    'Other'
  ];

  // Dynamic project calculation
  const totalProjectCount = projectsData.length;
  const countDisplayString = `${totalProjectCount}+ Projects & Experiments`;

  // Search and filter logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Search matching (Name, Technology, Category, Ownership/Hierarchy, Description)
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = query === '' ||
        project.name.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.technology.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        (project.problem && project.problem.toLowerCase().includes(query)) ||
        (project.solution && project.solution.toLowerCase().includes(query)) ||
        (project.ownership && project.ownership.toLowerCase().includes(query));

      // Filter matching
      let matchesFilter = true;
      if (activeFilter === 'All') {
        matchesFilter = true;
      } else if (activeFilter === 'Featured') {
        matchesFilter = project.featured;
      } else {
        matchesFilter = project.filterTags?.includes(activeFilter) ||
          project.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
          project.technology.toLowerCase().includes(activeFilter.toLowerCase());
      }

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, searchQuery]);

  // Hierarchy grouping when on 'All' mode and no search query
  const isDefaultView = activeFilter === 'All' && searchQuery.trim() === '';

  const featuredProjects = useMemo(() => projectsData.filter(p => p.featured), []);
  const businessProjects = useMemo(() => projectsData.filter(p => p.hierarchy === 'business'), []);
  const academicProjects = useMemo(() => projectsData.filter(p => p.hierarchy === 'academic'), []);
  const softwareProjects = useMemo(() => projectsData.filter(p => p.hierarchy === 'software'), []);
  const aiDataProjects = useMemo(() => projectsData.filter(p => p.hierarchy === 'ai-data'), []);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        
        {/* ================================================== */}
        {/* PROJECT PORTFOLIO HERO                             */}
        {/* ================================================== */}
        <div className="projects-hero-header text-center">
          <div className="project-count-badge">
            <Sparkles size={14} /> {countDisplayString}
          </div>
          <h2 className="section-title">
            Things I've <span>Built</span>
          </h2>
          <p className="section-subtitle">
            From business applications and management systems to e-commerce,
            web platforms, mobile applications, AI experiments, and academic
            projects — explore a growing collection of digital solutions.
          </p>
        </div>

        {/* ================================================== */}
        {/* PORTFOLIO MESSAGE BANNER                           */}
        {/* ================================================== */}
        <div className="portfolio-message-card">
          <div className="message-highlight-line"></div>
          <h3>"I don't just work with technologies. I build solutions for real problems."</h3>
          <p>
            Explore software applications, business systems, websites, e-commerce platforms,
            learning platforms, automation projects, and experimental solutions I've worked on.
          </p>
        </div>

        {/* ================================================== */}
        {/* SEARCH & FILTERS CONTROLLER                        */}
        {/* ================================================== */}
        <div className="projects-control-panel">
          {/* Search Box */}
          <div className="project-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search projects by name, technology (e.g. Java), category, billing..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                ×
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="project-filters-scroll">
            <div className="project-filters-track">
              {filterOptions.map((filterName) => (
                <button
                  key={filterName}
                  className={`filter-btn ${activeFilter === filterName ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filterName)}
                >
                  {filterName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search / Filter Active Indicator */}
        {(activeFilter !== 'All' || searchQuery !== '') && (
          <div className="filter-results-status">
            Showing <strong>{filteredProjects.length}</strong> matching projects 
            {activeFilter !== 'All' && <span> for <em>"{activeFilter}"</em></span>}
            {searchQuery && <span> matching <em>"{searchQuery}"</em></span>}
            <button className="reset-filter-btn" onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}>
              Reset Filters
            </button>
          </div>
        )}

        {/* ================================================== */}
        {/* DYNAMIC PROJECT LIBRARY DISPLAY                    */}
        {/* ================================================== */}

        {!isDefaultView ? (
          /* FILTERED / SEARCH GRID VIEW */
          <div className="filtered-projects-grid animated-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} onClick={() => handleCardClick(project)} />
              ))
            ) : (
              <div className="no-results-box">
                <Search size={40} className="no-results-icon" />
                <h3>No matching projects found</h3>
                <p>Try searching for terms like "Java", "Spring Boot", "React", "Billing", or "Mobile".</p>
                <button className="btn btn-secondary" onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}>
                  View All Projects
                </button>
              </div>
            )}
          </div>
        ) : (
          /* HIERARCHY STRUCTURED PORTFOLIO VIEW */
          <div className="hierarchy-portfolio-wrapper">
            
            {/* 1. FEATURED PROJECTS HIERARCHY */}
            <div className="hierarchy-section">
              <div className="hierarchy-header">
                <span className="hierarchy-num">01</span>
                <h3>Featured Projects</h3>
                <span className="hierarchy-tag">Flagship Work</span>
              </div>
              <div className="featured-grid">
                {featuredProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index} 
                    variant={index === 0 ? "featured-hero" : "featured-standard"}
                    onClick={() => handleCardClick(project)} 
                  />
                ))}
              </div>
            </div>

            {/* 2. BUSINESS / REAL-WORLD PROJECTS */}
            <div className="hierarchy-section">
              <div className="hierarchy-header">
                <span className="hierarchy-num">02</span>
                <h3>Business & Management Systems</h3>
                <span className="hierarchy-tag">Operational Solutions</span>
              </div>
              <div className="bento-grid">
                {businessProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} variant="bento" onClick={() => handleCardClick(project)} />
                ))}
              </div>
            </div>

            {/* 3. COLLEGE & ACADEMIC PROJECTS SECTION */}
            <div className="hierarchy-section academic-special-section" id="academic-projects">
              <div className="hierarchy-header">
                <span className="hierarchy-num">03</span>
                <div>
                  <h3 className="academic-main-title"># College & Academic Projects</h3>
                  <p className="academic-subtitle">
                    A collection of academic projects, experiments, prototypes, and software applications developed during my engineering journey.
                  </p>
                </div>
              </div>
              <div className="academic-compact-grid">
                {academicProjects.map((project, index) => (
                  <AcademicCard key={project.id} project={project} onClick={() => handleCardClick(project)} />
                ))}
              </div>
            </div>

            {/* 4. SOFTWARE & APPLICATION PROJECTS */}
            <div className="hierarchy-section">
              <div className="hierarchy-header">
                <span className="hierarchy-num">04</span>
                <h3>Software & Application Platforms</h3>
                <span className="hierarchy-tag">Web & Mobile Apps</span>
              </div>
              <div className="software-grid">
                {softwareProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} variant="horizontal" onClick={() => handleCardClick(project)} />
                ))}
              </div>
            </div>

            {/* 5. AI / DATA / EXPERIMENTAL PROJECTS */}
            <div className="hierarchy-section">
              <div className="hierarchy-header">
                <span className="hierarchy-num">05</span>
                <h3>AI, Computer Vision & Data Pipelines</h3>
                <span className="hierarchy-tag">Experimental & Research</span>
              </div>
              <div className="ai-data-grid">
                {aiDataProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} variant="pipeline" onClick={() => handleCardClick(project)} />
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ================================================== */}
        {/* FINAL PROJECT SECTION CTA                          */}
        {/* ================================================== */}
        <div className="final-project-cta-card">
          <div className="cta-content text-center">
            <h2>Have a Different Idea?</h2>
            <p>
              These are some of the solutions I've worked on. If you have a
              different business problem or software idea, let's discuss it.
            </p>
            <div className="cta-button-group">
              <a href="#contact" className="btn btn-primary btn-cta">
                Start Your Project <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary btn-cta">
                Tell Me What You Need →
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          projects={projectsData}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(newProj) => setSelectedProject(newProj)}
        />
      )}
    </section>
  );
};

/* ================================================== */
/* SUB-COMPONENT: Standard Card Component             */
/* ================================================== */
const ProjectCard = ({ project, variant = 'standard', onClick }) => {
  return (
    <div className={`project-card card-variant-${variant} fade-in`} onClick={onClick}>
      
      {/* Mockup Preview Header */}
      <div className="project-card-image-wrap">
        <ProjectMockup type={project.mockupType} title={project.name} image={project.image} />
        {project.type && (
          <span className={`project-type-tag type-${project.type.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
            {project.type}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="project-card-content">
        <div className="card-top-meta">
          <span className="project-category-name">{project.category}</span>
          <span className="status-dot-badge">{project.status}</span>
        </div>

        <h3 className="project-card-title">{project.name}</h3>
        <p className="project-card-desc">{project.shortDescription}</p>

        {/* Verified Feature Tags */}
        <div className="project-features-list">
          {project.features?.slice(0, 4).map((feat, idx) => (
            <span key={idx} className="feature-pill">{feat}</span>
          ))}
          {project.features?.length > 4 && (
            <span className="feature-pill-more">+{project.features.length - 4} more</span>
          )}
        </div>

        {/* Tech Badges */}
        <div className="project-tech-bar">
          {project.technologies?.slice(0, 4).map((tech, idx) => (
            <span key={idx} className="tech-badge">{tech}</span>
          ))}
        </div>

        {/* Card Footer Actions */}
        <div className="project-card-footer">
          <button className="case-study-link" onClick={onClick}>
            View Case Study <ArrowRight size={16} className="arrow-icon" />
          </button>
          
          <div className="card-external-links" onClick={(e) => e.stopPropagation()}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" title="View GitHub Repository" className="ext-icon-link">
                <GithubIcon size={16} />
              </a>
            )}
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noreferrer" title="Live Demo" className="ext-icon-link">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};

/* ================================================== */
/* SUB-COMPONENT: Compact Academic Card Component     */
/* ================================================== */
const AcademicCard = ({ project, onClick }) => {
  return (
    <div className="academic-card" onClick={onClick}>
      <div className="academic-card-header">
        <span className="academic-badge">ACADEMIC</span>
        <span className="academic-badge prototype-badge">PROTOTYPE</span>
        {project.achievementBadge && (
          <span className="academic-badge achievement-badge">HACKATHON</span>
        )}
      </div>

      <h4 className="academic-title">{project.name}</h4>
      <span className="academic-category">{project.category}</span>
      <p className="academic-desc">{project.shortDescription}</p>

      <div className="academic-tech-pills">
        {project.technologies?.map((tech, idx) => (
          <span key={idx} className="academic-tech-tag">{tech}</span>
        ))}
      </div>

      <div className="academic-card-footer">
        <span className="academic-view-btn">
          View Details <ArrowRight size={14} />
        </span>
      </div>
    </div>
  );
};

export default Projects;
