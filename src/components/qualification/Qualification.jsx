import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { BsCalendar2Check } from "react-icons/bs";
import "./qualification.css";

const Qualification = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <section className="qualification section">
      <h5>My personal journey</h5>
      <h2 className="section__title">Qualification</h2>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${
              isActive ? "qualification__active" : " "
            }`}
            onClick={handleToggle}
          >
            <FaGraduationCap className="qualification__icon" />
            <span className="tab__font"> Education</span>
          </div>

          <div
            className={`qualification__button button--flex ${
              isActive ? " " : "qualification__active"
            }`}
            onClick={handleToggle}
          >
            <FiBriefcase className="qualification__icon" />
            <span className="tab__font"> Work</span>
          </div>
        </div>

        <div className="qualification__sections">
          {/* educational background */}
          <div
            className={`qualification__content ${
              isActive ? " qualification__active" : " qualification__inactive"
            }`}
            id="education"
          >
            {/* first education experience */}
            <div className="qualification__data">
              <div className="qualification__card">
                <h3 className="qualification__title">
                  Computer and Information Systems: Data Analytics
                </h3>
                <span className="qualification__subtitle">
                  Douglas College
                </span>

                <div className="qualification__calendar">
                  <BsCalendar2Check className="calendar__icon" /> &nbsp;
                  2021-2022
                </div>
                <br />
                <p>
                  &#9900; 4.05 GPA
                  <br />
                  &#9900; International Returning Student Scholarship x 2<br />
                  &#9900; Dean's list x 3<br />
                </p>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* second education experience */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
              <div className="qualification__card">
                <h3 className="qualification__title">
                  Instrumentation & Control engineering
                </h3>
                <span className="qualification__subtitle">
                  Gujarat Tech. University
                </span>
                <div className="qualification__calendar">
                  <BsCalendar2Check className="calendar__icon" /> &nbsp;
                  2016-2020
                </div>
                <br />
                <p>
                  &#9900; 9.03/10 GPA
                  <br />
                  &#9900; Top 1% of Students based on overall Rank
                  <br />
                  &#9900; Member of Youth On the Move
                  <br />
                  &#9900; Merit Based Scholarship
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div
            className={`qualification__content ${
              isActive ? " qualification__inactive" : " qualification__active"
            }`}
            id="work"
          >
            {/* first work experience */}
            <div className="qualification__data">
              <div className="qualification__card">
                <h3 className="qualification__title">Sernior Software Developer</h3>
                <span className="qualification__subtitle">
                  Pattison Food Group
                </span>
                <div className="qualification__calendar">
                  <BsCalendar2Check className="calendar__icon" />
                  &nbsp; Oct 2023- Jan 2026
                </div>
                <br />
                <p>
                  &#9900; Delivered Java Spring microservices to enhance system functionality.
                  <br />
                  &#9900; Refactored inventory services for 70% faster processing and improved reliability.
                  <br />
                  &#9900; Led migration of 50+ services from JBoss 5 to Azure Local.
                  <br />
                  &#9900; Built robust data and application integrations.
                  <br />
                  &#9900; Modernized web apps with JavaScript, Next.js, and React in Agile teams.
                  <br />
                  &#9900; Mentored junior developers and support staff to boost team skills.
                </p>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* second work experience */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="qualification__card">
                <h3 className="qualification__title">Application Support Analyst</h3>
                <span className="qualification__subtitle">
                  Pattison Food Group
                </span>
                <div className="qualification__calendar">
                  <BsCalendar2Check className="calendar__icon" /> &nbsp;
                  Jan 2023 - Oct 2023
                </div>
                <br />
                <p>
                  &#9900; Supported 350+ stores, ensuring reliable POS and backend systems.
                  <br />
                  &#9900; Automated sales data monitoring for chainwide operations.
                  <br />
                  &#9900; Cut transaction failures by 40% via DNS improvements.
                  <br />
                  &#9900; Enhanced pricing and promotion engine for compliance.
                  <br />
                  &#9900; Resolved high-priority incidents and prevented recurrence.
                  <br />
                  &#9900; Authored IT Helpdesk docs to speed up troubleshooting.
                </p>
              </div>
            </div>

            {/* third qualification */}
            <div className="qualification__data">
              <div className="qualification__card">
                <h3 className="qualification__title">Computer Science Tutor</h3>
                <span className="qualification__subtitle">
                  Douglas College, New Westminster
                </span>
                <div className="qualification__calendar">
                  <BsCalendar2Check className="calendar__icon" />
                  &nbsp; Jan 2021- Dec 2022
                </div>
                <br />
                <p>
                  &#9900; Trained and Mentored 250+ Students.
                  <br />
                  &#9900; One of the most booked tutor for Computer Science
                  Courses.
                  <br />
                  &#9900; Supported students to build core foundation in Java,
                  C#, JavaScript, and SQL.
                  <br />
                  &#9900; College Reading & Learning Association 2 certified
                  advanced tutor.
                  <br />
                </p>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
