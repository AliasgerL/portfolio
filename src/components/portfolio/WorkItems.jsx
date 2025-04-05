import React from "react";
import "./portfolio.css";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>
      <a href={item.link} className="work__button" target="_blank">
        View
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
