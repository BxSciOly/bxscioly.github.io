import React from "react";
import styled from "styled-components";
import DaysRow from "./DaysRow";
import EventsA from "./EventsA";
import EventsB from "./EventsB";
import EventsC from "./EventsC";
import EventsD from "./EventsD";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Table = () => {
  return (
    <Wrap>
      <DaysRow />
      <EventsA />
      <EventsB />
      <EventsC />
      <EventsD />
    </Wrap>
  );
};

export default Table;
