import React from "react";
import styled from "styled-components";
import Table from "./TableComponents/Table";

const Title = styled.div`
  height: 100px;
  width: 100%;
  font-size: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: black;
  user-select: none;
`;

const ScheduleDiv = styled.div`
  height: 650px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  background: white;
  border-radius: 30px;

  @media (max-width: 600px) {
    height: 300px;
  }
`;

const ScheduleA = styled.div`
  width: 100%;

  @media (max-width: 1788px) {
    display: none;
  }
`;

const Warning = styled.h2`
  display: none;

  @media (max-width: 1788px) {
    display: inline-block;
    justify-content: center;
  }
`;

const Text = styled.h3`
  text-align: center;
  font-size: 20px;
`;
const Schedule = () => {
  return (
    <ScheduleDiv>
      <Title>SCHEDULE</Title>
      <ScheduleA>
        <Table />
      </ScheduleA>
      <Warning>
        <Text>
          Our event schedule is currently not available on mobile versions of
          our website. Please visit this page on a larger device to view the
          schedule.
        </Text>
      </Warning>
    </ScheduleDiv>
  );
};

export default Schedule;
