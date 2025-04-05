import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleModal1, setToggleModal1] = useState(0);
  const [toggleModal2, setToggleModal2] = useState(0);
  const [toggleModal3, setToggleModal3] = useState(0);

  const toggleTab1 = (index) => {
    setToggleModal1(index);
  };

  const toggleTab2 = (index) => {
    setToggleModal2(index);
  };

  const toggleTab3 = (index) => {
    setToggleModal3(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web <br /> Designer
            </h3>
          </div>

          <span
            className="services__button"
            onClick={() => toggleTab1(1)}
            data-target="#1"
          >
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            id="1"
            className={
              toggleModal1 === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab1(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Web Designer</h3>
              <p className="services__modal-description">
                I create visually stunning and user-friendly website designs
                that enhance user engagement and leave a lasting impression.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    Attractive & Modern UI
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    Fully Responsive Design
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Optimized for Speed & Performance
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Secure & Scalable Architecture
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-browser services__icon"></i>
            <h3 className="services__title">
              Web <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab2(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleModal2 === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab2(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">
                I build high-performance, scalable, and secure websites tailored
                to your business needs, ensuring seamless functionality and a
                great user experience.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Custom & Dynamic Websites
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Fast & Optimized Performance
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Responsive & Mobile-Friendly
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    API Integration & Custom Features
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-server-connection services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab3(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleModal3 === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab3(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Backend Developer</h3>
              <p className="services__modal-description">
                I develop powerful, secure, and scalable backend solutions that
                ensure your website or web app runs smoothly, efficiently, and
                securely.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Robust & Scalable Architecture
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Secure Authentication & Authorization
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Optimized Performance</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Database Management.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
