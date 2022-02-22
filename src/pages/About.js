import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import scioly1 from "./images/scioly1.jpg";
import scioly2 from "./images/scioly2.jpg";
import scioly3 from "./images/scioly3.jpg";
import scioly4 from "./images/scioly4.jpg";
import scioly5 from "./images/scioly5.jpg";
import scioly6 from "./images/scioly6.jpg";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import "react-slideshow-image/dist/styles.css";
import "./style/Homestyle.css";
const slideImages = [scioly1, scioly2, scioly3, scioly4, scioly5, scioly6];

const About = () => {
  return (
    <>
      <Page>
        <Title>
          <h1
            style={{
              fontSize: "50px",
              userSselect: "none",
            }}
          >
            About Us
          </h1>
          <h2
            style={{
              fontWeight: "400",
              marginTop: "20px",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            "Science is a way of thinking much more than it is a body of
            knowledge" - Carl Sagan
          </h2>
        </Title>
        <Header>
          <ImageDiv>
            <Slide easing="ease">
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[0]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[1]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[2]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[3]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[4]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[5]})` }}
                ></div>
              </div>
            </Slide>
          </ImageDiv>
          <TextDiv>
            <h2 className="about-title">Our Purpose</h2>
            <h3 className="about-text">
              The BxSci Science Olympiad Team is dedicated to exploring the
              world of science in every scientific discipline, from biology to
              mathematics to engineering. prepare students for future careers
              <br />
              <br />
              We are student-led, meaning that we do not rely heavily on teacher
              coaching and instruction and value qualities such as leadership
              and teamwork. As an academic team, we not only work towards a
              strong performance at annual competitions, but we also help
              budding scientists to discover their potential outside of
              competitions, offering advice and support to students on
              non-Science Olympiad related fronts.
            </h3>
          </TextDiv>
        </Header>
        <AchievementsWrap>
          {achievementsData.map((item) => (
            <Card>
              <div className="item-icon">{item.icon}</div>
              <div className="number">{item.number}</div>
              <div className="descript">{item.description}</div>
              {item.break}
              {item.break}
            </Card>
          ))}
        </AchievementsWrap>
        <img src="/transparent.png" alt="logo" />
      </Page>
    </>
  );
};

const achievementsData = [
  {
    icon: <BsIcons.BsPerson />,
    number: "200+",
    description:
      "We have over 200 members and over 20 topics that range through all the branches of science.",
    break: <br />,
  },
  {
    icon: <IoIcons.IoTrophyOutline />,
    number: "1st",
    description:
      "We won first place at the 2021 Regionals competition and 11th place in the subsequent States competition.",
    break: <br />,
  },
  {
    icon: <RiIcons.RiLineChartLine />,
    number: "2022",
    description:
      "Our teams have been achieving higher placements in regional and state competitions every year. Having just qualified for States in 2018, our team has now climbed from 40th place to 11th.",
  },
];

const Card = styled.div`
  color: #fff;
  height: 400px;
  width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Header = styled.div`
  background: #000;
  display: flex;
  color: black;
  padding: 90px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    padding: 20px;
    margin-top: 30px;
    width: 100%;
    border-radius: 20px 0 20px 0;
  }
`;

const AchievementsWrap = styled.div`
  height: 500px;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--secondary-color);
  border-radius: 50px
`;

const Title = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: center;
  flex-direction: column;
`;

const ImageDiv = styled.div`
  width: 800px;
  height: 400px;
  margin-right: 100px;
  background-color #000;

  @media (max-width: 600px) {
    display: none;
  }
`;

const TextDiv = styled.div`
  padding: 20px;
  background-color: #000;
  color: #fff;

  @media (max-width: 600px) {
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
`;

export default About;
