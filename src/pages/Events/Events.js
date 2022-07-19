import React from "react";
import { NavLink } from "react-router-dom";
import BiologyData from "./eventsData/BiologyData";
import styled from "styled-components";
import BuildData from "./eventsData/BuildData";
import ChemistryData from "./eventsData/ChemistryData";
import PhysicsData from "./eventsData/PhysicsData";
import EarthScienceData from "./eventsData/EarthScienceData";
import Event from "./Event";
import "./EventsStyling.css";

export const Events = () => {
  return (
    <div className="events">
      <h1>Events</h1>
    </div>
  );
};

export const Biology = () => {
  return (
    <div className="events">
      <Cover>BIOLOGY 🧬</Cover>
      <Link
        href="https://www.soinc.org/sites/default/files/2021-09/Science_Olympiad_Div_C_2022_Rules_Manual_Web_1.pdf"
        target="_blank"
        rel="noreferrer"
        className="info"
      >
        Want more information? Click here for the official Science Olympiad
        event manual!
      </Link>
      <div className="wrap">
        <div className="links">
          <div className="bar" />
          <h3 className="update" style={{ fontSize: "16px" }}>
            Updated 2021
          </h3>
          <EventAnchor to="/biology">Introduction</EventAnchor>
          <EventAnchor to="anatomy-and-physiology">
            Anatomy and Physiology
          </EventAnchor>
          <EventAnchor to="cell-biology">Cell Biology</EventAnchor>
          <EventAnchor to="disease-detectives">Disease Detectives</EventAnchor>
          <EventAnchor to="ornithology">Ornithology</EventAnchor>
          <EventAnchor to="green-generation">Green Generation</EventAnchor>
        </div>
        <div className="events-list">
          <Event
            dataSet={BiologyData}
            subject="biology"
            titlesubject="Biology"
          />
        </div>
      </div>
    </div>
  );
};

export const EarthScience = () => {
  return (
    <div className="events">
      <Cover>EARTH SCIENCE 🌎</Cover>
      <Link
        href="https://www.soinc.org/sites/default/files/2021-09/Science_Olympiad_Div_C_2022_Rules_Manual_Web_1.pdf"
        target="_blank"
        rel="noreferrer"
        className="info"
      >
        Want more information? Click here for the event manual!
      </Link>
      <div className="wrap">
        <div className="links">
          <div className="bar" />
          <h3 className="update" style={{ fontSize: "16px" }}>
            Updated 2021
          </h3>
          <EventAnchor to="/earthscience">Introduction</EventAnchor>
          <EventAnchor to="astronomy">Astronomy</EventAnchor>
          <EventAnchor to="dynamic-planet">Dynamic Planet</EventAnchor>
          <EventAnchor to="remote-sensing">Remote Sensing</EventAnchor>
          <EventAnchor to="rocks-and-minerals">Rocks and Minerals</EventAnchor>
        </div>
        <div className="events-list">
          <Event
            dataSet={EarthScienceData}
            subject="earthscience"
            titlesubject="Earth Science"
          />
        </div>
      </div>
    </div>
  );
};

export const Build = () => {
  return (
    <div className="events">
      <Cover>BUILD 🔧</Cover>
      <Link
        href="https://www.soinc.org/sites/default/files/2021-09/Science_Olympiad_Div_C_2022_Rules_Manual_Web_1.pdf"
        target="_blank"
        rel="noreferrer"
        className="info"
      >
        Want more information? Click here for the event manual!
      </Link>
      <div className="wrap">
        <div className="links">
          <div className="bar" />
          <h3 className="update" style={{ fontSize: "16px" }}>
            Updated 2021
          </h3>
          <EventAnchor to="/build">Introduction</EventAnchor>
          <EventAnchor to="bridges">Bridges</EventAnchor>
          <EventAnchor to="detector-building">Detector Building</EventAnchor>
          <EventAnchor to="wright-stuff">Wright Stuff</EventAnchor>
          <EventAnchor to="experimental-design">
            Experimental Design
          </EventAnchor>
          <EventAnchor to="gravity-vehicle">Gravity Vehicle</EventAnchor>
          <EventAnchor to="ping-pong-parachute">
            Ping Pong Parachute
          </EventAnchor>
          <EventAnchor to="trajectory">Trajectory</EventAnchor>
          <EventAnchor to="write-it-do-it">Write It Do It</EventAnchor>
        </div>
        <div className="events-list">
          <Event
            dataSet={BuildData}
            subject="build"
            titlesubject="Build and Engineering"
          />
        </div>
      </div>
    </div>
  );
};

export const Chemistry = () => {
  return (
    <div className="events">
      <Cover>CHEMISTRY 🧪</Cover>
      <Link
        href="https://www.soinc.org/sites/default/files/2021-09/Science_Olympiad_Div_C_2022_Rules_Manual_Web_1.pdf"
        target="_blank"
        rel="noreferrer"
        className="info"
      >
        Want more information? Click here for the event manual!
      </Link>
      <div className="wrap">
        <div className="links">
          <div className="bar" />
          <h3 className="update" style={{ fontSize: "16px" }}>
            Updated 2021
          </h3>
          <EventAnchor to="/chemistry">Introduction</EventAnchor>
          <EventAnchor to="chemistry-lab">Chemistry Lab</EventAnchor>
          <EventAnchor to="environmental-chemistry">
            Environmental Chemistry
          </EventAnchor>
          <EventAnchor to="forensics">Forensics</EventAnchor>
        </div>
        <div className="events-list">
          <Event
            dataSet={ChemistryData}
            subject="chemistry"
            titlesubject="Chemistry"
          />
        </div>
      </div>
    </div>
  );
};

export const Physics = () => {
  return (
    <div className="events">
      <Cover>MATH & PHYSICS 🍎🧮</Cover>
      <Link
        href="https://www.soinc.org/sites/default/files/2021-09/Science_Olympiad_Div_C_2022_Rules_Manual_Web_1.pdf"
        target="_blank"
        rel="noreferrer"
        className="info"
      >
        Want more information? Click here for the event manual!
      </Link>
      <div className="wrap">
        <div className="links">
          <div className="bar" />
          <h3 className="update" style={{ fontSize: "16px" }}>
            Updated 2021
          </h3>
          <EventAnchor to="/physics">Introduction</EventAnchor>
          <EventAnchor to="codebusters">Codebusters</EventAnchor>
          <EventAnchor to="its-about-time">It's About Time</EventAnchor>
          <EventAnchor to="wifi-lab">WiFi Lab</EventAnchor>
        </div>
        <div className="events-list">
          <Event
            dataSet={PhysicsData}
            subject="physics"
            titlesubject="Math & Physics"
          />
        </div>
      </div>
    </div>
  );
};

// styling

const EventAnchor = styled((props) => <NavLink {...props} />)`
  padding: 0;
  margin: 0;

  &:hover {
    color: var(--secondary-color);
  }
`;

const Link = styled.a`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0;
  flex-basis: auto;

  &:hover {
    color: var(--secondary-color);
  }

  @media (max-width: 600px) {
    text-align: center;
    font-size: 150%;
  }
`;

const EventLink = styled.h5`
  font-size: 25px;
  font-weight: 200;
  padding: 1rem;
  text-decoration: underline;
  transition: 200ms ease;

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const Cover = styled.h1`
  font-size: 60px;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 35px;
    height: 100px;
    margin: 3rem 1rem 4rem 1rem;
  }
`;
