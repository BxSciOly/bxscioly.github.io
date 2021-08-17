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
      event: "",
    },
    {
      event: "Gravity Vehicle",
    },
    {
      event: "It's About Time",
    },
    {
      event: "Codebusters",
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

export default EventsC;
