import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Data from "./Data";
import WorkItems from "./WorkItems";
import "./portfolio.css";

const Work = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name.toLowerCase() === "all") {
      setProjects(Data);
    } else {
      const newProjects = Data.filter((project) => {
        const categories = Array.isArray(project.category)
          ? project.category
          : [project.category];

        return categories.some(
          (cat) => cat.toLowerCase() === item.name.toLowerCase()
        );
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <div>
      <div className="work__filters">
        {Nav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Work;
