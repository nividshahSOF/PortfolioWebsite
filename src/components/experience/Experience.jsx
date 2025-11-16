import React from "react";
import "./experience.css";
import Article from "./Article";

const experience = () => {
  return (
    <section id="experience">
      <h5>Professional Experience</h5>
      <h2>My Journey</h2>

      <div className="container experience__container" style={{gridTemplateColumns: '1fr'}}>
        {/* Experience Cards */}
        <div className="experience__roles" style={{background: '#fff', color: '#222', marginBottom: '2rem', borderRadius: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: '2rem'}}>
          <h3 style={{color: '#4db5ff'}}>Senior Software Developer, Pattison Food Group</h3>
          <p><strong>Jan 2023 – Present</strong></p>
          <ul style={{marginLeft: '1.5rem'}}>
            <li>Developed scalable web applications using React, Node.js, and AWS.</li>
            <li>Led a team of 4 engineers to deliver a major product feature ahead of schedule.</li>
            <li>Implemented CI/CD pipelines and Docker for streamlined deployments.</li>
          </ul>
        </div>
        <div className="experience__roles" style={{background: '#fff', color: '#222', marginBottom: '2rem', borderRadius: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: '2rem'}}>
          <h3 style={{color: '#4db5ff'}}>Application Support Analyst, Pattison Food Group</h3>
          <p><strong>May 2022 – Dec 2022</strong></p>
          <ul style={{marginLeft: '1.5rem'}}>
            <li>Built RESTful APIs and dynamic UIs for client projects.</li>
            <li>Optimized SQL queries and improved backend performance by 30%.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
          </ul>
        </div>
        {/* Skills Section */}
        <div className="experience__skills" style={{background: 'var(--color-bg-variant)', color: '#222', borderRadius: '1.5rem', padding: '2rem'}}>
          <h3 style={{color: '#4db5ff'}}>Skills & Tools</h3>
          <div className="experience__content" style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem'}}>
            <Article name="Java" level="Expert" />
            <Article name="SQL/NoSQL" level="Expert" />
            <Article name="Spring" level="Expert" />
            <Article name="React" level="Expert" />
            <Article name="JavaScript" level="Expert" />
            <Article name="HTML/CSS" level="Expert" />
            <Article name="Node.js" level="Expert" />
            <Article name="Python" level="Proficient" />
            <Article name="Azure" level="Proficient" />
            <Article name="Docker" level="Proficient" />
            <Article name="CI/CD" level="Proficient" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
