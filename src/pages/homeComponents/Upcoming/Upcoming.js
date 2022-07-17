import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./upcoming.css";

const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};
//
const Upcoming = () => {
  const [announcements, setAnnouncements] = useState(null);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    fetch("https://scioly-backend.vercel.app/announcement")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAnnouncements(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://scioly-backend.vercel.app/event")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEvents(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 mt-[20px] mb-[40px]">
      <div className="bg-slate-50 p-12 shadow-lg rounded-xl mr-2">
        <h1 className="mb-[20px] text-[25px] py-2">Upcoming Events</h1>
        {events &&
          events.map((item) => (
            <div className="h-[100px] flex items-center p-[15px] border-b-2 border-slate-300">
              <div className="w-[50px] flex justify-center items-center flex-col">
                <h1 style={{ fontSize: "25px" }}>{item.date.split("/")[1]}</h1>
                <h3 style={{ fontWeight: "200", fontSize: "20px" }}>
                  {months[item.date.split("/")[0]]}
                </h3>
              </div>
              <EventDiv>
                <h3 style={{ fontWeight: "200", fontSize: "20px" }}>
                  {item.name}
                </h3>
              </EventDiv>
            </div>
          ))}
      </div>
      <div className="bg-slate-50 p-12 shadow-lg rounded-xl ml-2">
        <div>
          <h1 className="text-[25px]">Announcements</h1>
        </div>
        <div>
          <h3 className="font-[200] mb-[20px] text-[20px]">
            Check here every week for new updates!
          </h3>
        </div>
        {announcements &&
          announcements.map((item) => (
            <h2 className="text-[17px] font-[200] mb-8">
              <span style={{ fontWeight: "700", fontSize: "20px" }}>
                {item.title}:
              </span>{" "}
              {item.desc}
              <br />
              <span style={{ fontSize: "18px", fontWeight: "300" }}>
                Posted {item.date}
              </span>
            </h2>
          ))}
      </div>
    </div>
  );
};

const Wrap = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  z-index: 3;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const UpcomingDiv = styled.div`
  background: white;
  color: black;
  width: 48%;
  padding: 40px;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 4%);
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const AnnouncementsDiv = styled.div`
  background: white;
  color: black;
  width: 48%;
  padding: 40px;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 4%);
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
