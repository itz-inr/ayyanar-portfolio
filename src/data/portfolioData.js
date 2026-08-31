export const personalInfo = {
  name: "Ayyanar K",
  title: "Full-Stack Developer & Digital Solutions Specialist",
  coreProfile: "Java Full Stack Developer",
  location: "Madurai, Tamil Nadu",
  phone: "8072185454",
  email: "ayyanark463@gmail.com",
  linkedIn: "https://www.linkedin.com/in/k-ayyanar04/",
  github: "https://github.com/itz-inr",
  whatsapp: "https://wa.me/918072185454",
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdFP9XVUkIS0xqxxPwV7KM0jYcgE4UZ75DcQ_FTBNzcj2bxDA/viewform",
  googleFormEmbedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdFP9XVUkIS0xqxxPwV7KM0jYcgE4UZ75DcQ_FTBNzcj2bxDA/viewform?embedded=true",
  googleFormResponseUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdFP9XVUkIS0xqxxPwV7KM0jYcgE4UZ75DcQ_FTBNzcj2bxDA/formResponse",
  googleSheetUrl: "https://docs.google.com/spreadsheets/d/1IjJSETRPYI7eXilN8GDOAfibPsDJD0SpmTQNvm1fKxQ/edit?resourcekey=&gid=1722512564#gid=1722512564",
  googleSheetWebhookUrl: "https://script.google.com/macros/s/AKfycbzbwGQ0dd7dFmX4WG05DiqFt3K01MUUXZHvSfPioATAxR6gIKOYBtXTdt-hYeWMpaO8Qw/exec",
  heroIntro: "Hi, I'm Ayyanar K",
  heroHeadline: "Turning Ideas Into Powerful Digital Solutions.",
  heroSupportingHeadline: "Web Apps • Mobile Apps • Custom Software • APIs • Digital Platforms",
  heroDescription: "I build modern websites, web applications, mobile applications, backend systems, APIs, e-commerce platforms, and custom software solutions designed around real business requirements.",
  heroTechnical: "Specialized in Java, Spring Boot, REST APIs, database-driven applications, and full-stack development, with broader capabilities across modern web and mobile technologies."
};

export const trustStrip = [
  "Web Development", "Mobile Development", "Backend Development", "REST APIs", "Database Solutions", "Custom Software"
];

export const trustTechnologies = [
  "Java", "Spring Boot", "React", "Flutter", "Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB"
];

export const whatIBuild = [
  {
    title: "Websites",
    icon: "🌐",
    items: ["Business websites", "Corporate websites", "Landing pages", "Portfolio websites", "Service websites", "Responsive websites"]
  },
  {
    title: "Web Applications",
    icon: "💻",
    items: ["Business applications", "Management systems", "Admin dashboards", "Customer portals", "Booking platforms", "Workflow systems", "SaaS-style applications"]
  },
  {
    title: "Mobile Applications",
    icon: "📱",
    items: ["Android applications", "Cross-platform applications", "Business apps", "Customer apps", "Booking apps", "E-commerce apps", "Service applications"]
  },
  {
    title: "E-Commerce Platforms",
    icon: "🛒",
    items: ["Product management", "Shopping cart", "Checkout", "Orders", "Inventory", "Customer management", "Admin panel", "Payment integration"]
  },
  {
    title: "Custom Software",
    icon: "⚙️",
    items: ["Business management systems", "Employee management", "Inventory management", "Billing systems", "CRM systems", "Booking systems", "Restaurant/hotel systems", "Transport management", "Education systems", "Workflow applications"]
  },
  {
    title: "Backend & APIs",
    icon: "🔌",
    items: ["REST APIs", "Authentication", "CRUD APIs", "Business logic", "API integrations", "Frontend-backend communication", "Mobile-backend integration"]
  },
  {
    title: "Database Solutions",
    icon: "🗄️",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "Database integration", "CRUD operations", "Data management"]
  }
];

export const services = [
  { id: "01", title: "Website Development", description: "Build responsive, modern websites for businesses and individuals." },
  { id: "02", title: "Web Application Development", description: "Build custom applications based on business workflows and requirements." },
  { id: "03", title: "Mobile App Development", description: "Develop mobile applications and API-connected mobile solutions." },
  { id: "04", title: "Full-Stack Development", description: "Build complete frontend + backend + database applications." },
  { id: "05", title: "Java Development", description: "Core Java, Java backend, JDBC, JSP, Servlet, MVC." },
  { id: "06", title: "Spring Boot Development", description: "REST APIs, Backend services, Authentication, CRUD applications, Database integration." },
  { id: "07", title: "React Development", description: "React interfaces, Dashboards, Interactive web applications, API-connected frontend applications." },
  { id: "08", title: "Flutter Development", description: "Cross-platform mobile applications, API integration, Responsive mobile interfaces." },
  { id: "09", title: "Node.js & Express.js", description: "Backend applications, REST APIs, Authentication, Database integration, API services." },
  { id: "10", title: "REST API Development", description: "API development, API integration, Authentication APIs, CRUD APIs, Third-party API integration." },
  { id: "11", title: "Database Development", description: "PostgreSQL, MySQL, MongoDB, SQL." },
  { id: "12", title: "E-Commerce Development", description: "Build complete e-commerce platforms for web and mobile." },
  { id: "13", title: "Custom Business Software", description: "Build software specifically around a company's workflow." },
  { id: "14", title: "Existing Application Enhancement", description: "Bug fixing, New features, API integration, Database integration, UI improvements, Backend improvements." },
  { id: "15", title: "Maintenance & Support", description: "Provide agreed post-development maintenance and technical support." }
];

export const technologies = {
  professional: [
    { category: "Programming Languages", items: ["Java", "JavaScript", "C", "C++"] },
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
    { category: "Backend", items: ["Java", "Spring Boot"] },
    { category: "APIs", items: ["REST APIs", "API Integration"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL"] },
    { category: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
    { category: "Concepts", items: ["OOP", "Data Structures", "MVC Architecture", "API Integration"] }
  ],
  capabilities: [
    { category: "Frontend", items: ["React"] },
    { category: "Mobile", items: ["Flutter"] },
    { category: "Backend", items: ["Node.js", "Express.js"] }
  ]
};

import { projectsData } from './projectsData';

export { projectsData };

export const featuredProjects = projectsData.filter(p => p.featured);

export const conceptProjects = [
  {
    name: "SmartRide — IoT Helmet-Bike Pairing System",
    label: "Research / Academic Project (MSME Hackathon 4.0 Finalist)",
    description: "IoT-based road-safety concept focused on helmet-bike pairing.",
    note: "Not a fully developed production project; explored as an innovative concept for vehicular safety."
  },
  {
    name: "Real-Time Transit Tracker",
    label: "Academic / Hackathon Prototype (SIH 2024)",
    description: "Civic-tech mobile application concept for real-time public bus tracking.",
    note: "Built as a hackathon prototype entry to streamline municipal bus arrivals."
  }
];

export const achievements = [
  { title: "MSME Idea Hackathon 4.0", role: "Institutional Finalist", description: "SmartRide IoT road-safety product concept." },
  { title: "Smart India Hackathon 2024", role: "Participant", description: "Civic-tech concept for real-time public transport tracking." },
  { title: "Research Presentations", role: "Certificate of Merit", description: "Research presentations covering vehicular safety systems and AI-driven applications." }
];

export const experience = [
  {
    title: "Java Developer",
    company: "Make A Try Software Solutions",
    period: "February 2026 – August 2026",
    responsibilities: [
      "Core Java backend development",
      "API integrations",
      "Database-related application tasks",
      "Reliable data handling"
    ]
  }
];

export const education = [
  {
    degree: "B.E – Computer Science and Engineering",
    institution: "KLN College of Engineering, Sivagangai (Anna University)",
    period: "2022 – 2026",
    score: "CGPA: 7.22 / 10"
  }
];

export const certifications = [
  { name: "PostgreSQL", issuer: "IIT Bombay" },
  { name: "JAVA Developer (InternShip)", issuer: "Make A Try SoftWare Solution" },
  { name: "Full Stack Development", issuer: "upGrad" },
  { name: "Full Stack Development", issuer: "Magizhchi TechAcademy" },
  { name: "Cloud Computing", issuer: "NPTEL" },
  { name: "Java OOP", issuer: "NPTEL" },
  { name: "C & C++ Programming", issuer: "NPTEL" },
  { name: "Privacy & Security in Online Social Media", issuer: "NPTEL" },
  { name: "Advanced Distributed Systems", issuer: "NPTEL" }
];

export const faqs = [
  { question: "What type of software do you build?", answer: "Websites, web applications, mobile apps, e-commerce platforms, business management systems, APIs, databases, and custom software." },
  { question: "Can you build both web and mobile applications?", answer: "Yes, digital solutions can be structured for web, mobile, or both depending on project requirements." },
  { question: "Can you build a custom business management system?", answer: "Yes. Custom applications can be designed around specific business workflows." },
  { question: "Which backend technologies do you work with?", answer: "Java/Spring Boot and Node.js/Express.js can be used depending on the project requirements." },
  { question: "Which databases can be used?", answer: "PostgreSQL, MySQL, and MongoDB." },
  { question: "Can you integrate APIs?", answer: "Yes, REST APIs and third-party API integrations can be included where required." },
  { question: "Can you improve an existing application?", answer: "Yes, depending on the application architecture and access to the existing codebase." },
  { question: "How much does a project cost?", answer: "Pricing depends on requirements, scope, features, complexity, integrations, timeline, and support." },
  { question: "How do I start?", answer: "Send the project requirements through the enquiry form or contact directly." }
];
