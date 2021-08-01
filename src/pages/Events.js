import React from "react";
import BiologyData from "./eventsData/BiologyData";
import styled from "styled-components";
import BuildData from "./eventsData/BuildData";


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
      <h1>Events3</h1>
    </div>
  );
};

export const Physics = () => {
  return (
    <div className="events">
      <h1>Events/Events4</h1>
    </div>
  );
};

export const Trial = () => {
  return (
    <div className="events">
      <h1>Events/Events5</h1>
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
  border: 2px solid #026857;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cadfcf;
  color: #026857;
  margin-bottom: 10px;
  font-size: 100px;
`;
