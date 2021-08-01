import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border: 2px solid #a6a6a6;
  height: 400px;
  width: 330px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 50px 0 50px;
  border-radius: 20px;

  &:hover {
    transform: scale(1.02);
    cursor: normal;
  }
`;

const Date = styled.div`
  border: 2px solid #404040;
  height: 120px;
  width: 120px;
  color: black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  cursor: default;
  border-radius: 20px;
  background: #ffcd00;

  &:hover {
    transform: scale(1.05);
  }
`;

const UpcomingCard = (props) => {
  return (
    <Card>
      <Date>
        <h2>{props.month}</h2>
        <h1>{props.day}</h1>
      </Date>
      <h2 style={{ color: "black" }}>{props.event}</h2>
    </Card>
  );
};

export default UpcomingCard;
