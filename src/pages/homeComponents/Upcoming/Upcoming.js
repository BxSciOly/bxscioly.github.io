import React from "react";
import styled from "styled-components";

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
  return (
    <Wrap>
      <UpcomingDiv>
        <h1 style={{ marginBottom: "20px" }}>Upcoming Events</h1>
        {UpcomingData.map((item) => (
          <UpcomingWrap>
            {/* <h2
              style={{
                fontSize: "18px",
                fontWeight: "200",
                marginBottom: "10px",
              }}
            >
              <span style={{ fontWeight: "700" }}>{item.event}:</span>{" "}
              {item.date}
            </h2> */}
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
        <h1>Announcements</h1>
        <h3 style={{ fontWeight: "400", marginBottom: "20px" }}>
          Check here every week for new updates!
        </h3>
        {Announcements.map((item) => (
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "200",
              marginBottom: "10px",
            }}
          >
            <span style={{ fontWeight: "700" }}>{item.title}:</span> {item.desc}
          </h2>
        ))}
      </AnnouncementsDiv>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 600px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  border-radius: 30px;
  z-index: 3;
  margin-bottom: 40px;
`;

const UpcomingDiv = styled.div`
  background: white;
  width: 48%;
  padding: 20px;
  border-radius: 25px;
`;
const AnnouncementsDiv = styled.div`
  background: white;
  width: 48%;
  padding: 20px;
  border-radius: 25px;
`;

const UpcomingWrap = styled.div`
  height: 100px;
  border-bottom: 1px solid #aaa;
  display: flex;
  align-items: center;
  padding: 15px;
`;

const DateDiv = styled.div`
  width: 50px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EventDiv = styled.div`
  margin-left: 20px;
`;
export default Upcoming;
