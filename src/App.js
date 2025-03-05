// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";

import "./styles/index.css";
import "./styles/project.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const Home = () => {
  return (
    <section>
      <h2>Welcome to My Portfolio</h2>
      <p>Explore my work and skills.</p>
    </section>
  );
};

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <ProjectCard title="Project 1" description="Description of project 1" link="#" />
      <ProjectCard title="Project 2" description="Description of project 2" link="#" />
    </div>
  );
};

export default App;
