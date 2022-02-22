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
      <Cover>BIOLOGY</Cover>
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
      <Cover>EARTH SCIENCE</Cover>
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
      <Cover>BUILD</Cover>
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
      <Cover>CHEMISTRY</Cover>
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
      <Cover>PHYSICS</Cover>
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
  padding: 1rem;
`;

const EventDesc = styled.h5`
  font-size: 25px;
  font-weight: 200;
  padding: 1rem;
`;

const BubbleCard = styled.div`
  background-color: var(--secondary-color);
  border-radius: 30px;
  border: 2.5px solid var(--secondary-color);
  width: 700px;
  padding: 4rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  min-height: 490px;
  cursor: default;
  transition: 300ms ease;

  &:hover {
    border: 2.5px solid var(--primary-color);
    cursor: pointer;
  }

  @media (max-width: 600px) {
    background: #f7b800;
    width: 100%;
    color: black;
  }
`;


const Cover = styled.h1`
  color: #fff;
  height: 300px;
  width: 100%;
  border-bottom: 3px solid var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  font-size: 100px;

  @media (max-width: 600px) {
    font-size: 40px;
    height: 100px;
  }
`;
