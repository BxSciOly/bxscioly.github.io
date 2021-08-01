import React from "react";
import styled from "styled-components";

const EventDiv = styled.div`
  height: 100px;
  width: 250px;
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px;
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
