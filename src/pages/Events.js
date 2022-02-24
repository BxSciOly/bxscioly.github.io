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
      <Link
        href="https://www.soinc.org/sites/default/files/2021-09/Science_Olympiad_Div_C_2022_Rules_Manual_Web_1.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Want more information? Click here for the event manual!
      </Link>
      <CardDiv>
        {BiologyData.map((event) => (
          <BubbleCard href={event.link} target="_blank">
            <EventTitle>{event.eventName}</EventTitle>
            <EventDesc>{event.description}</EventDesc>
          </BubbleCard>
        ))}
      </CardDiv>
    </div>
  );
};

export const EarthScience = () => {
  return (
    <div className="events">
      <Cover>EARTH SCIENCE</Cover>
      <Link
        href="https://www.soinc.org/sites/default/files/2021-09/Science_Olympiad_Div_C_2022_Rules_Manual_Web_1.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Want more information? Click here for the event manual!
      </Link>
      <CardDiv>
        {EarthScienceData.map((event) => (
          <BubbleCard href={event.link} target="_blank">
            <EventTitle>{event.eventName}</EventTitle>
            <EventDesc>{event.description}</EventDesc>
            <br />
            <a href={event.links} target="_blank" rel="noopener noreferrer">
              <EventLink>{event.links}</EventLink>
            </a>
          </BubbleCard>
        ))}
      </CardDiv>
    </div>
  );
};

export const Build = () => {
  return (
    <div className="events">
      <Cover>BUILD</Cover>
      <Link
        href="https://www.soinc.org/sites/default/files/2021-09/Science_Olympiad_Div_C_2022_Rules_Manual_Web_1.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Want more information? Click here for the event manual!
      </Link>
      <CardDiv>
        {BuildData.map((event) => (
          <BubbleCard href={event.link} target="_blank">
            <EventTitle>{event.eventName}</EventTitle>
            <EventDesc>{event.description}</EventDesc>
          </BubbleCard>
        ))}
      </CardDiv>
    </div>
  );
};

export const Chemistry = () => {
  return (
    <div className="events">
      <Cover>CHEMISTRY</Cover>
      <Link
        href="https://www.soinc.org/sites/default/files/2021-09/Science_Olympiad_Div_C_2022_Rules_Manual_Web_1.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Want more information? Click here for the event manual!
      </Link>
      <CardDiv>
        {ChemistryData.map((event) => (
          <BubbleCard href={event.link} target="_blank">
            <EventTitle>{event.eventName}</EventTitle>
            <EventDesc>{event.description}</EventDesc>
          </BubbleCard>
        ))}
      </CardDiv>
    </div>
  );
};

export const Physics = () => {
  return (
    <div className="events">
      <Cover>MATH & PHYSICS</Cover>
      <Link
        href="https://www.soinc.org/sites/default/files/2021-09/Science_Olympiad_Div_C_2022_Rules_Manual_Web_1.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Want more information? Click here for the event manual!
      </Link>
      <CardDiv>
        {PhysicsData.map((event) => (
          <BubbleCard href={event.link} target="_blank">
            <EventTitle>{event.eventName}</EventTitle>
            <EventDesc>{event.description}</EventDesc>
          </BubbleCard>
        ))}
      </CardDiv>
    </div>
  );
};

// styling

const CardDiv = styled.div`
  padding: 20px 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    padding: 20px 0;
  }
`;

const Link = styled.a`
  font-size: 220%;
  text-decoration: underline;

  @media (max-width: 600px) {
    text-align: center;
    font-size: 150%;
  }
`;

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

const BubbleCard = styled.a`
  background-color: var(--secondary-color);
  border-radius: 30px;
  border: 2.5px solid var(--secondary-color);
  width: 600px;
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
    width: 100%;
    color: #fff;
    padding: 1rem;
    margin: 1rem;
  }
`;

const Cover = styled.h1`
  color: #fff;
  text-shadow: 0 0 10px var(--primary-color);
  height: 200px;
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
