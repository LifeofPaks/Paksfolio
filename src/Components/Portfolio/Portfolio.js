import React, { useState, useEffect } from "react";
import "./Portfolio.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Loader from "react-loaders";
import ProjectList from "./ProjectList";


const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className=" portfolio-page container">
        <div className="bx-wrapper">
          <h1 className="page-title">
            <AnimatedLetters
              strArray={"Portfolio".split("")}
              idx={15}
              letterClass={letterClass}
            />
          </h1>

          <h3 className="subtitle">Featured Projects</h3>

          <div className="porfolio-container">
            <ProjectList/>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
