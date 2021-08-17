import React from "react";
import BiologyData from "./eventsData/BiologyData";
import styled from "styled-components";
import BuildData from "./eventsData/BuildData";
import ChemistryData from "./eventsData/ChemistryData";
import PhysicsData from "./eventsData/PhysicsData";
import EarthScienceData from "./eventsData/EarthScienceData";

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
      <Cover>Biology</Cover>
      {BiologyData.map((event) => (
        <BubbleCard>
          <h6>{event.eventName}</h6>
          <h8>{event.description}</h8>
        </BubbleCard>
      ))}
    </div>
  );
};

export const EarthScience = () => {
  return (
    <div className="events">
      <Cover>Earth Science</Cover>
      {EarthScienceData.map((event) => (
        <BubbleCard>
          <h6>{event.eventName}</h6>
          <h8>{event.description}</h8>
          <br />
          <a href={event.links} target="_blank" rel="noopener noreferrer">
            <h8>{event.links}</h8>
          </a>
        </BubbleCard>
      ))}
    </div>
  );
};

export const Build = () => {
  return (
    <div className="events">
      <Cover>Build</Cover>
      {BuildData.map((event) => (
        <BubbleCard>
          <h6>{event.eventName}</h6>
          <h8>{event.description}</h8>
        </BubbleCard>
      ))}
    </div>
  );
};

export const Chemistry = () => {
  return (
    <div className="events">
      <Cover>Chemistry</Cover>
      {ChemistryData.map((event) => (
        <BubbleCard>
          <h6>{event.eventName}</h6>
          <h8>{event.description}</h8>
        </BubbleCard>
      ))}
    </div>
  );
};

export const Physics = () => {
  return (
    <div className="events">
      <Cover>Physics</Cover>
      {PhysicsData.map((event) => (
        <BubbleCard>
          <h6>{event.eventName}</h6>
          <h8>{event.description}</h8>
        </BubbleCard>
      ))}
    </div>
  );
};


// styling

const BubbleCard = styled.div`
  background: #fcce33;
  border-radius: 30px;
  height: 400px;
  width: 500px;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  color: black;

  &:hover {
    transform: scale(1.02);
    cursor: normal;
  }
`;

const Cover = styled.div`
  height: 300px;
  width: 100%;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #74cc66;
  color: black;
  margin-bottom: 10px;
  font-size: 100px;
`;
