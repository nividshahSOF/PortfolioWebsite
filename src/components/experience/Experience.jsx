import React from "react";
import "./experience.css";
import Article from "./Article";

const experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>What I am good at :)</h2>

      <div className="container experience__container" style={{gridTemplateColumns: '1fr'}}>
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
