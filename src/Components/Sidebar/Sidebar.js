import React, { useState, useEffect } from "react";
import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import LogoP from "../../assets/images/logo-p.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBriefcase,
  faEnvelope,
  faHome,
  faScrewdriverWrench,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      setShowNav(showNav)
    })

    return ()=>{
      window.removeEventListener('scroll', ()=>{
      })
    }
  }, [])
  
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoP} alt="logo" />
        <p className="logoSubtitle">&lt;Paks/&gt;</p>
      </Link>

      <div className="top-nav">
        <FontAwesomeIcon
          icon={faBars}
          className="hamburger"
          size="2x"
          onClick={()=>setShowNav(!showNav)}
        />
      </div>

      <nav className={showNav? 'mobile-view' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          className="home-link nav-link"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link nav-link"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          to="/portfolio"
          className="portfolio-link nav-link"
        >
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          to="/skills"
          className="skills-link nav-link"
        >
          <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link nav-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul className="social-links-container">
        <li>
          <a
            className="social-link"
            target="_blank"
            href="https://www.linkedin.com/in/paks-promise/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            className="social-link"
            target="_blank"
            href="https://github.com/LifeofPaks"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            className="social-link"
            target="_blank"
            href="https://twitter.com/lifeofpaks"
          >
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            className="social-link"
            target="_blank"
            href="skype:live:.cid.f754f64fecabc3f7"
          >
            <FontAwesomeIcon
              icon={faSkype}
              color="#4d4d4e"
              className="social-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
