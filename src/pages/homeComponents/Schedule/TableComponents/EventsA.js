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
      event: "",
    },
    {
      event: "",
    },
    {
      event: "",
    },
    {
      event: "",
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

export default EventsA;
