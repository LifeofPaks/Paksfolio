import React, { useEffect, useState } from "react";
import "./About.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import { Link } from "react-router-dom";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone ">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <h3 className="subtitle">
            I'm Promise Chukwudi Paks
            <span className="stack"> &lt;Web Developer/&gt;</span>
          </h3>
          <p>
            {" "}
            From the moment I wrote my first line of code, I was hooked. Web
            development quickly became more than a skill, it became a passion.
            I thrive on turning ideas into interactive, user friendly
            experiences that not only look great but deliver real results.{" "}
          </p>{" "}
          <p>
            {" "}
            With a love for both design and problem-solving, I enjoy building
            digital products that are intuitive, accessible, and impactful. I’m
            always learning, always evolving, and always ready for the next
            challenge.{" "}
          </p>{" "}
          <p>
            {" "}
            Whether you're starting from scratch or reimagining something
            existing, I’d love to help bring your vision to life. Let’s build
            something amazing together.{" "}
          </p>
          <div className="contact-btn">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubeSpinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#333333" />
            </div>
          </div>
        </div>
      </div>

      <Loader type={"pacman"} />
    </>
  );
};

export default About;
