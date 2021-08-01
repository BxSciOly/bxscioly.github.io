import React from "react";
import styled from "styled-components";

const DaysDiv = styled.div`
  height: 50px;
  width: 250px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 20px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

const Days = (props) => {
  return <DaysDiv>{props.weekday}</DaysDiv>;
};

export default Days;
