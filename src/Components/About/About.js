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
            <span className="stack"> &lt;A FrontEnd Web/&gt;</span>
          </h3>
          <p>
            From the day I wrote my first line of code I knew I was hacked. My
            passion for programming led me to master problem solving, the
            ability to learn quickly and stay on top of new technologies. I
            enjoy building innovative, user-friendly interfaces that delight
            users and drive business results.
          </p>

          <p>
            As someone who has always had a passion for improving with
            technology, I found myself drawn to web development and it quickly
            turned into a full-blown passion.
          </p>

          <p>
            As a Front-End Developer with a passion for both coding and design,
            I am constantly seeking out new ways to bring my creative vision to
            life or seeking inspiration in the world around me. I am a firm
            believer in the power of collaboration and enjoy working closely
            with designers and development teams to ensure that projects are
            delivered on time and exceed expectations.
          </p>
          <p>
            What I love most about Front-End Development is the way that it
            combines creativity with technical skills. It's a constantly
            evolving field that demands both artistry and precision, and I
            relish the opportunity to explore new technologies and techniques
            that help me stay ahead of the curve.
          </p>
          <p>
            Whether you're looking to create a brand-new website from scratch or
            revamp an existing one. I'm here to help. Let's work together to
            build something truly exceptional!
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
