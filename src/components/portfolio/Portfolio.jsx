import React from "react";
import "./portfolio.css";
import Work from "./Work";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <Work />
    </section>
  );
};

export default Portfolio;
