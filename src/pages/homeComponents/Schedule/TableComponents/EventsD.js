import React from "react";
import Event from "./Event";
import styled from "styled-components";
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const EventsD = () => {
  const eventA = [
    {
      event: "6:00PM",
    },
    {
      event: "GeoMapping",
    },
    {
      event: "Experimental Design",
    },
    {
      event: "Water Quality, Gravity Vehicle",
    },
    {
      event: "Wright Stuff, Designer Genes",
    },
    {
      event: "",
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

export default EventsD;
