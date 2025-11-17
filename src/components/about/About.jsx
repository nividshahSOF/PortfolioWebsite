import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5 style={{ letterSpacing: "2px", color: "var(--color-primary)" }}>Get to know</h5>
      <h2 style={{ fontWeight: 600, fontSize: "2.2rem", color: "var(--color-primary)" }}>About Me</h2>

      <div className="container about__container" style={{ maxWidth: "700px", margin: "2rem auto", background: "var(--color-bg-variant)", borderRadius: "1.5rem", boxShadow: "0 2px 16px rgba(94,96,206,0.04)", padding: "2.5rem 2rem" }}>
        <div className="about__content" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="about__cards" style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
            <article className="about__card" style={{ background: "#fff", borderRadius: "1rem", padding: "1.5rem 2rem", boxShadow: "0 2px 8px rgba(94,96,206,0.08)", textAlign: "center", flex: 1 }}>
              <FaAward className="about__icon" style={{ color: "var(--color-primary)", fontSize: "1.8rem", marginBottom: "0.5rem" }} />
              <h5 style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>Experience</h5>
              <small style={{ color: "var(--color-light)" }}>4+ Years</small>
            </article>
            <article className="about__card" style={{ background: "#fff", borderRadius: "1rem", padding: "1.5rem 2rem", boxShadow: "0 2px 8px rgba(94,96,206,0.08)", textAlign: "center", flex: 1 }}>
              <FiUsers className="about__icon" style={{ color: "var(--color-primary)", fontSize: "1.8rem", marginBottom: "0.5rem" }} />
              <h5 style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>Trained</h5>
              <small style={{ color: "var(--color-light)" }}>250+ Students</small>
            </article>
            <article className="about__card" style={{ background: "#fff", borderRadius: "1rem", padding: "1.5rem 2rem", boxShadow: "0 2px 8px rgba(94,96,206,0.08)", textAlign: "center", flex: 1 }}>
              <VscFolderLibrary className="about__icon" style={{ color: "var(--color-primary)", fontSize: "1.8rem", marginBottom: "0.5rem" }} />
              <h5 style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>Projects</h5>
              <small style={{ color: "var(--color-light)" }}>20+ Completed</small>
            </article>
          </div>
          <ul style={{ fontSize: "1.15rem", color: "var(--color-light)", marginBottom: "2rem", textAlign: "left", lineHeight: "1.8", background: "rgba(255,255,255,0.07)", borderRadius: "1rem", padding: "1.5rem 1rem", boxShadow: "0 2px 8px rgba(94,96,206,0.08)", listStyle: "disc inside" }}>
            <li><span style={{ color: "var(--color-primary)", fontWeight: 600 }}>Senior Software Developer</span> skilled in <span style={{ color: "#6C63FF", fontWeight: 500 }}>Java</span>, <span style={{ color: "#6C63FF", fontWeight: 500 }}>Spring Boot</span>, <span style={{ color: "#6C63FF", fontWeight: 500 }}>PL/SQL</span>, and modern web technologies like <span style={{ color: "#6C63FF", fontWeight: 500 }}>React</span>, <span style={{ color: "#6C63FF", fontWeight: 500 }}>Next.js</span>, and <span style={{ color: "#6C63FF", fontWeight: 500 }}>JavaScript</span>.</li>
            <br />
            <li><span style={{ color: "var(--color-primary)", fontWeight: 500 }}>Mentoring</span>, <span style={{ color: "var(--color-primary)", fontWeight: 500 }}>problem solving</span>, and <span style={{ color: "var(--color-primary)", fontWeight: 500 }}>continuous learning</span> keep me inspired.</li>
            <br />
            <li><span style={{ color: "#6C63FF", fontWeight: 500 }}>Open to new opportunities & collaborations.</span></li>
          </ul>
          <a href="#contact" className="btn btn-primary" style={{ fontWeight: 500, fontSize: "1rem", padding: "0.8rem 2rem" }}>Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default about;
