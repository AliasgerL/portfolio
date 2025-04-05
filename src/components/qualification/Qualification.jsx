import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Development</h3>
                <span className="qualification__subtitle">Aceteck Academy</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 - 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">BBA</h3>
                <span className="qualification__subtitle">SVIM</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Web Designing & Development
                </h3>
                <span className="qualification__subtitle">Hakimi Infosec</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 -2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">12th Graduation</h3>
                <span className="qualification__subtitle">
                  MSB Educational Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Personal Projects</h3>
                <span className="qualification__subtitle">Freelance</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">BBA</h3>
                <span className="qualification__subtitle">
                  Shri Vaishnav Institute of Management
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2023
                </div>
              </div>
            </div> */}

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10th Graduation</h3>
                <span className="qualification__subtitle">
                  MSB Educational Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 -2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
