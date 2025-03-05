import React from 'react';
import '../styles/Home.css'; // Optional: add page-specific styles if needed

const Home = () => {
  return (
    <div className="home">
      {/* Hero / About Section */}
      <section className="hero">
        <h1>Ali Keshavarzi</h1>
        <h2>Full-Stack Developer (in progress)</h2>
        <p>Toronto, Canada</p>
        <div className="education">
          <h3>Education</h3>
          <p>Computer Programming Diploma – Seneca College (Graduated August 2024)</p>
          <p>Codecademy Certifications (JavaScript, React, HTML, CSS, etc.)</p>
        </div>
        <div className="summary">
          <p>
            A passionate full-stack developer with expertise in JavaScript, React, Node.js, Express.js, HTML, CSS, TypeScript, and Git. Focused on building modern, responsive, and scalable applications. Currently learning backend development with Node.js and planning to integrate MongoDB into future projects.
          </p>
        </div>
      </section>

      {/* Skills & Tech Stack Section */}
      <section className="skills">
        <h2>Skills & Tech Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, TypeScript</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MongoDB (Coming Soon)</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
          <li><strong>Other Tools:</strong> VS Code, npm, REST APIs</li>
        </ul>
      </section>

      {/* Work Experience Section */}
      <section className="work-experience">
        <h2>Work Experience</h2>
        <div className="job">
          <h3>Enerhold Engineering Solutions</h3>
          <p><strong>Role:</strong> Consultant & Customer Support</p>
          <ul>
            <li>Managed energy rebate and loan programs for homeowners</li>
            <li>Provided expert consultations on HVAC, insulation, and energy upgrades</li>
            <li>Recruited videographers and content creators for marketing</li>
            <li>Helped contractors secure funding for their clients</li>
          </ul>
        </div>
        <div className="job">
          <h3>Greenovate</h3>
          <p><strong>Role:</strong> Customer Support & Website Manager</p>
          <ul>
            <li>Managed the AuditX website for scheduling energy audits</li>
            <li>Assisted clients with rebate programs</li>
          </ul>
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="resume-download">
        <h2>Resume</h2>
        <p>
          Download my resume: <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume PDF</a>
        </p>
      </section>
    </div>
  );
};

export default Home;
