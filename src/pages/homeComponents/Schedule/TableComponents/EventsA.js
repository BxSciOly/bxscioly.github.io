import React from "react";
import Event from "./Event";
import styled from "styled-components";
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const EventsA = () => {
  const eventA = [
    {
      event: "3:00PM",
    },
    {
      event: "Forensics",
    },
    {
      event: "Circuit Lab, Protein Modeling",
    },
    {
      event: "Club Meeting",
    },
    {
      event: "Dynamic Planet",
    },
    {
      event: "Forensics",
    },
  ];
  return (
    <Wrap>
      {eventA.map((ev) => (
        <Event events={ev.event} />
      ))}
    </Wrap>
  );
};

export default EventsA;
