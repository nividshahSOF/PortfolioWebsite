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
              <small style={{ color: "var(--color-light)" }}>2+ Years</small>
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
          <p style={{ fontSize: "1.1rem", color: "var(--color-light)", marginBottom: "2rem", textAlign: "center", lineHeight: "1.7" }}>
            Senior Software Developer with expertise in Java, Spring Boot, PL/SQL, and modern web technologies including React, Next.js, and JavaScript.<br />
            Experienced in building scalable micro-services, web applications and leading technical projects.<br />
            Proficient in Java, JavaScript, React, Node.js, SQL, and cloud technologies.<br />
            Passionate about solving complex problems, mentoring others, and staying up-to-date with the latest tech trends.<br />
            Open to new opportunities and collaborations.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ fontWeight: 500, fontSize: "1rem", padding: "0.8rem 2rem" }}>Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default about;
