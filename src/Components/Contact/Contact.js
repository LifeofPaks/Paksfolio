import React, { useState, useEffect, useRef } from "react";
import "./Contact.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../../Components/AnimatedLetters/AnimatedLetters";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [emailStatus, setEmailStatus] = useState("");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const refForm = useRef();

  // SEND EMAIL  CLICK EVENT
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z3u0yme",
        "template_mp5jeoe",
        refForm.current,
        "tbZ4PSmD_G_X7Klpr"
      )
      .then(
        function (response) {
          setEmailStatus(
            "MESSAGE SUCCESSLLY SENT!",
            response.status,
            response.text
          );
          setTimeout(() => {
            setEmailStatus("");
          }, 3000);
        },
        function (error) {
          setEmailStatus("MESSAGE FAILED TRY AGAIN...", error);
          setTimeout(() => {
            setEmailStatus("");
          }, 3000);
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have any request or question, don't
            hesitate to contact me using the form below.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>

                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>

                <li>
                  <input
                    type="submit"
                    className=" send-btn flat-button"
                    value="SEND"
                  />
                </li>
              </ul>

              <p className="email-status-text">{emailStatus}</p>
            </form>
          </div>
        </div>

        <div className="map">
          <div className="info-map">
            <h4 className="name">Promise Paks</h4>
            <h4 className="location">
              <FontAwesomeIcon className="icon" icon={faLocationDot} />
              Abuja, Nigeria
            </h4>
            <a href="mailto:promise.chukwudi@rocketmail.com" className="email">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              Promisechukwudi.pc@gmail.com
            </a>
          </div>
          <div className="map-wrapper">
            <MapContainer center={[9.156369, 7.322036]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[9.156369, 7.322036]}>
                <Popup>Paks lives here. Come over for a cup of coffee 😊</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Contact;
