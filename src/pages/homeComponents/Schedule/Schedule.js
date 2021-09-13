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
      {/* <ScheduleA>
        <Table />
      </ScheduleA> */}
      {/* <Warning>
        <Text>
          Our event schedule is currently not available on mobile versions of
          our website. Please visit this page on a larger device to view the
          schedule.
        </Text>
      </Warning> */}
      <SummerScheduleLink>
        NOTE: The official season schedule has not determined yet. Please visit
        <span>
          <a
            href="https://docs.google.com/spreadsheets/d/1SOQx93un6jy2RVqUmSiDOrm4a25DmNS_87F0hmCJUkk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "black",
              textDecoration: "underline",
              display: "inline",
            }}
          >
            this link
          </a>
        </span>
        for our summer schedule.
      </SummerScheduleLink>
    </ScheduleDiv>
  );
};

const SummerScheduleLink = styled.h2`
  margin-top: 20px;
`;

export default Schedule;
