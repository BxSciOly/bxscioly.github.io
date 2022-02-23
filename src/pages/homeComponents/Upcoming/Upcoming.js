import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./upcoming.css";

const months = {
  "1" : "Jan",
  "2" : "Feb",
  "3" : "Mar",
  "4" : "Apr",
  "5" : "May",
  "6" : "Jun",
  "7" : "Jul",
  "8" : "Aug",
  "9" : "Sep",
  "10" : "Oct",
  "11" : "Nov",
  "12" : "Dec",
}
// 
const Upcoming = () => {
  const [announcements, setAnnouncements] = useState(null);
  const [events, setEvents] = useState(null)

  useEffect(() => {
    fetch('https://scioly-backend.vercel.app/announcement')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setAnnouncements(data);
      });
  }, [])

  useEffect(() => {
    fetch('https://scioly-backend.vercel.app/event')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEvents(data);
      });
  }, [])


  return (
    <Wrap>
      <UpcomingDiv>
        <UpcomingTitle>
          <h1 className="upcoming-title">Upcoming Events</h1>
        </UpcomingTitle>
        {events && events.map((item) => (
          <UpcomingWrap>
            <DateDiv>
              <h1>{item.date.split("/")[1]}</h1>
              <h3 style={{ fontWeight: "200" }}>{months[item.date.split("/")[0]]}</h3>
            </DateDiv>
            <EventDiv>
              <h3 style={{ fontWeight: "200" }}>{item.name}</h3>
            </EventDiv>
          </UpcomingWrap>
        ))}
      </UpcomingDiv>
      <AnnouncementsDiv>
        <AnnouncementsTitleDiv>
          <h1 className="announcements-title">Announcements</h1>
        </AnnouncementsTitleDiv>
        <AnnouncementsDescDiv>
          <h3 className="announcements-subtitle">
            Check here every week for new updates!
          </h3>
        </AnnouncementsDescDiv>
        {announcements && announcements.map((item) => (
          <h2 className="announcements-desc">
            <span style={{ fontWeight: "700" }}>{item.title}:</span> {item.desc}
            <br />
            <span style={{ fontSize: "95%", fontWeight: "300", color: "var(--primary-color)" }}>Posted {item.date}</span>
          </h2>
        ))}
      </AnnouncementsDiv>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  border-radius: 30px;
  z-index: 3;
  margin-bottom: 40px;
  

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const UpcomingDiv = styled.div`
  background-color: var(--secondary-color);
  color: #fff;
  width: 48%;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 0 40px var(--secondary-color);
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const AnnouncementsDiv = styled.div`
  background-color: var(--secondary-color);
  color: #fff;
  width: 48%;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 0 40px var(--secondary-color);
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const UpcomingWrap = styled.div`
  height: 100px;
  border-bottom: 1px solid #aaa;
  display: flex;
  align-items: center;
  padding: 15px;

  &:last-child {
    border-bottom: none;
  }
`;

const UpcomingTitle = styled.div`
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

const DateDiv = styled.div`
  width: 50px;
  background: var(--secondar-color);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EventDiv = styled.div`
  margin-left: 27px;
`;

const AnnouncementsTitleDiv = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const AnnouncementsDescDiv = styled.div`
  @media (max-width: 600px) {
    text-align: center;
    font-size: 15px;
    margin-top: 5px;
  }
`;
export default Upcoming;
