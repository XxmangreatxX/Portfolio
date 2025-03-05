// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import "../styles/index.css"; // Import global styles

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Switch>
            {/* Home Route */}
            <Route exact path="/">
              <h2>Home</h2>
              {/* Add any homepage content */}
            </Route>

            {/* Projects Route */}
            <Route path="/projects">
              <h2>Projects</h2>
              <ProjectCard
                title="Project 1"
                description="Description of Project 1"
                link="https://link-to-project.com"
              />
              <ProjectCard
                title="Project 2"
                description="Description of Project 2"
                link="https://link-to-project.com"
              />
            </Route>

            {/* Contact Route */}
            <Route path="/contact">
              <ContactForm />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
