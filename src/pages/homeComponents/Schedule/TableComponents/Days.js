import React from "react";
import styled from "styled-components";

const DaysDiv = styled.div`
  height: 50px;
  width: 250px;
  border: 1px solid black;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Days = (props) => {
  return <DaysDiv>{props.weekday}</DaysDiv>;
};

export default Days;
