import React from "react";
import Event from "./Event";
import styled from "styled-components";
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const EventsC = () => {
  const eventA = [
    {
      event: "5:00PM",
    },
    {
      event: "Designer Genes, Boomilever",
    },
    {
      event: "Sounds of Music",
    },
    {
      event: "Fossils, Disease Detectives",
    },
    {
      event: "Astro, Detector Building",
    },
    {
      event: "WIDI, Ping Pong Parachute",
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

export default EventsC;
