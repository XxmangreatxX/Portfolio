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
          <h3>Energy Sales Consultant – Consumers Energy</h3>
          <p><strong>Ottawa | April 2025 – May 2025</strong></p>
          <ul>
            <li>Conducted energy assessments for homeowners to identify rebate and loan eligibility</li>
            <li>Used the Straight Line Sales System to guide clients through decisions with clarity</li>
            <li>Educated homeowners on upgrades like heat pumps, insulation, and windows</li>
            <li>Helped clients access up to $40,000 in loans and $10,600 in rebates</li>
            <li>Coordinated with contractors and handled follow-up communications</li>
          </ul>
        </div>

        <div className="job">
          <h3>HR Specialist & Marketing Manager – Enerhold Engineering Solutions</h3>
          <p><strong>Toronto | January 2024 – December 2024</strong></p>
          <ul>
            <li>Assisted clients with energy audit services and program eligibility</li>
            <li>Handled customer inquiries, appointment bookings, and follow-ups</li>
            <li>Executed digital marketing strategies for energy efficiency programs</li>
            <li>Created educational content for customer awareness</li>
          </ul>
        </div>

        <div className="job">
          <h3>Customer Support & Website Manager – Greenovate</h3>
          <p><strong>Toronto | July 2023 – December 2023</strong></p>
          <ul>
            <li>Managed the AuditX website for energy audit scheduling</li>
            <li>Assisted clients with rebate program inquiries</li>
          </ul>
        </div>

        <div className="job">
          <h3>Detailer – Red Fox Car Detailing</h3>
          <p><strong>May 2023 – December 2023</strong></p>
          <ul>
            <li>Delivered high-quality detailing services focused on customer satisfaction</li>
            <li>Applied ceramic coatings and protective treatments to vehicles</li>
          </ul>
        </div>

        <div className="job">
          <h3>English Teacher – Shiraz</h3>
          <p><strong>July 2022 – October 2022</strong></p>
          <ul>
            <li>Taught grammar, writing, and conversation</li>
            <li>Prepared lessons and tracked student progress</li>
          </ul>
        </div>

        <div className="job">
          <h3>Front Desk Assistant – Obstetrics & Gynecology Clinic, Shiraz</h3>
          <p><strong>January 2022 – June 2022</strong></p>
          <ul>
            <li>Managed patient check-ins and appointment scheduling</li>
            <li>Handled calls, medical records, and administrative support</li>
          </ul>
        </div>

        <div className="job">
          <h3>Computer Class Assistant – Imam Reza High School, Shiraz</h3>
          <p><strong>October 2020 – May 2021</strong></p>
          <ul>
            <li>Assisted with classroom setup and student support in computer basics and coding</li>
            <li>Maintained and updated classroom equipment and software</li>
          </ul>
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="resume-download">
        <h2>Resume</h2>
        <p>
          Download my resume: <a href="/PDFs/Ali Keshavarzi resume.pdf" download target="_blank" rel="noopener noreferrer">Resume PDF</a>
        </p>
      </section>
    </div>
  );
};

export default Home;
