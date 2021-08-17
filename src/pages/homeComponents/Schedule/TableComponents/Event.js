import React from "react";
import styled from "styled-components";

const EventDiv = styled.div`
  height: 90px;
  width: 225px;
  border: 3px solid black;
  border-radius: 20px;
  margin: 5px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

const Event = (props) => {
  return <EventDiv>{props.events}</EventDiv>;
};

export default Event;
