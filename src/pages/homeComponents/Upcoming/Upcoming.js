import React from "react";
import styled from "styled-components";
import UpcomingCard from "./UpcomingCard";

const UpcomingDiv = styled.div`
  height: 650px;
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 30px;
  z-index: 3;
`;

const Title = styled.div`
  height: 100px;
  width: 100%;
  font-size: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  user-select: none;
`;

const Upcoming = () => {
  return (
    <UpcomingDiv>
      <Title>
        <h3 style={{ marginTop: "100px" }}>UPCOMING EVENTS</h3>
      </Title>
      <UpcomingCard month="Jul" day="12" event="Summer Scioly" />
      <UpcomingCard month="Sept" day="12" event="First Day of School" />
      <UpcomingCard day="TBA" event="First Meetings" />
    </UpcomingDiv>
  );
};

export default Upcoming;
