import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./upcoming.css";

const Announcements = [
  {
    title: "📃 Attendance",
    desc: [
      "On Wednesdays, sign in to attendance on the official meeting attendance form and use the same form to sign out after your last event. ",
      "On all other days, sign in and out of each event. Event managers will reuse their forms. (WE WILL CONTINUE USING THIS SYSTEM OVER THE SUMMER).",
    ],
  },
  {
    title: "⏲ Official meeting structure",
    desc: "As of July 12, meetings will occur at 3:00PM and end at 4:00PM. Announcements take place at 3:00PM-3:15PM. Breakout rooms for work in individual events will take place after.",
  },
  {
    title: "📩 Emails",
    desc: "Please stay tuned for any SciOly related emails. You may use the interest form to join the mailing list if you have not joined yet.",
  },
  {
    title: "🎉 CONGRATS",
    desc: "Congratulations to our graduating seniors, best of luck in college!",
  },
  {
    title:
      "On behalf of the entire board have a happy and restful break! (and don't forget to study for regionals ;)",
  },
];

const UpcomingData = [
  {
    event: "Start of SciOly summer meetings",
    month: "Jul",
    day: "12",
  },
  {
    event: "First day of school",
    month: "Sept",
    day: "13",
  },
  {
    event: "First meeting of the official season",
    day: "TBA",
  },
];

const Upcoming = () => {
  const [announcements, setAnnouncements] = useState(null);

  useEffect(() => {
    fetch('https://scioly-backend.vercel.app/announcement')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAnnouncements(data);
      });
  }, [])

  return (
    <Wrap>
      <UpcomingDiv>
        <UpcomingTitle>
          <h1 className="upcoming-title">Upcoming Events</h1>
        </UpcomingTitle>
        {UpcomingData.map((item) => (
          <UpcomingWrap>
            <DateDiv>
              <h1>{item.day}</h1>
              <h3 style={{ fontWeight: "200" }}>{item.month}</h3>
            </DateDiv>
            <EventDiv>
              <h3 style={{ fontWeight: "200" }}>{item.event}</h3>
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
        {Announcements.map((item) => (
          <h2 className="announcements-desc">
            <span style={{ fontWeight: "700" }}>{item.title}:</span> {item.desc}
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
