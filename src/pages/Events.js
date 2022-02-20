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
          <EventTitle>{event.eventName}</EventTitle>
          <EventDesc>{event.description}</EventDesc>
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
          <EventTitle>{event.eventName}</EventTitle>
          <EventDesc>{event.description}</EventDesc>
          <br />
          <a href={event.links} target="_blank" rel="noopener noreferrer">
            <EventDesc>{event.links}</EventDesc>
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
          <EventTitle>{event.eventName}</EventTitle>
          <EventDesc>{event.description}</EventDesc>
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
          <EventTitle>{event.eventName}</EventTitle>
          <EventDesc>{event.description}</EventDesc>
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
          <EventTitle>{event.eventName}</EventTitle>
          <EventDesc>{event.description}</EventDesc>
        </BubbleCard>
      ))}
    </div>
  );
};

// styling

const EventTitle = styled.h6`
  font-size: 30px;
  text-align: center;
  margin-bottom: 2rem;
`;

const EventDesc = styled.h5`
  font-size: 25px;
  font-weight: 200;
`;

const BubbleCard = styled.div`
  border: 3px solid black;
  border-radius: 30px;
  width: 500px;
  padding: 4rem;
  margin: 20px;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  cursor: default;

  &:hover {
    transform: scale(1.02);
    cursor: normal;
  }

  @media (max-width: 600px) {
    background: #f7b800;
    width: 100%;
    color: black;
  }
`;

const Cover = styled.div`
  height: 300px;
  width: 100%;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  margin-bottom: 10px;
  font-size: 100px;

  @media (max-width: 600px) {
    font-size: 40px;
    height: 100px;
  }
`;
