import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ReactToolTip from "react-tooltip";

const Event = (props) => {
  const location = useLocation();
  const isMainPage = location.pathname === `/${props.subject}`;
  let ev = props.dataSet.find(
    (item) => `/${props.subject}/` + item.path === location.pathname
  );
  console.log(location.pathname);
  return (
    <>
      {isMainPage ? (
        <BubbleCard>
          <EventTitle>
            Welcome to the {props.titlesubject} department of Science Olympiad!
          </EventTitle>
          <EventDesc>
            We have a variety of events in rotation for each season. Have a look
            around and feel free to ask the BSSO community any questions! These
            events are all open to join through event placements or through
            requesting an event on our Discord server.
          </EventDesc>
        </BubbleCard>
      ) : (
        <>
          <BubbleCard
            href={ev.link}
            target="_blank"
            data-tip="Click me for more info"
          >
            <EventTitle>{ev.eventName}</EventTitle>
            <EventDesc>{ev.description}</EventDesc>
          </BubbleCard>
          <ReactToolTip
            place="right"
            type="dark"
            effect="float"
            backgroundColor="black"
          />
        </>
      )}
    </>
  );
};

const EventTitle = styled.h6`
  font-size: 30px;
  color: black;
  padding: 1rem;
`;

const EventDesc = styled.h5`
  font-size: 20px;
  font-weight: 200;
  color: black;
  padding: 1rem;
`;

const BubbleCard = styled.a`
  width: 100%;
  min-height: 200px;
  padding: 20px;
  background: white;
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  cursor: default;
  transition: 300ms ease;

  @media (max-width: 600px) {
    width: 100%;
    padding: 1rem;
    margin: 1rem;
  }
`;

export default Event;
