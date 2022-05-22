import React from "react";
import styled from "styled-components";
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
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import Board from "./otherComponents/Board/Board";
const About = () => {
  return (
    <Page>
      <Header>
        <TextDiv>
          <h2 className="about-title">
            The Bronx Science Science Olympiad team is dedicated to exploring
            the{" "}
            <span style={{ color: "var(--secondary-color)" }}>
              world of science
            </span>{" "}
            in every scientific discipline, ranging from biology to mathematics
            to engineering.
          </h2>
          <div className="innerdiv">
            <h3 className="about-text">
              Our goal is to prepare students for their future careers in STEM.
              We are a student-led club, meaning that we do not rely heavily on
              teacher coaching and instruction and value qualities such as
              leadership and teamwork. As an academic team, we not only work
              towards a strong performance at annual competitions, but we also
              help budding scientists to discover their potential outside of
              competitions, offering advice and support to students on
              non-Science Olympiad related fronts. Our community is one of the
              most tight-knit, dedicated, and collaborative communities in Bronx
              Science.
            </h3>
            <Wrapper>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={scioly3}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={scioly2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={scioly1}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={scioly5}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={scioly4}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={scioly6}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Wrapper>
          </div>
        </TextDiv>
      </Header>

      <Title>Our Achievements</Title>
      <AchievementsWrap>
        <Grid />
        {achievementsData.map((item) => (
          <Card>
            <div className="item-icon">{item.icon}</div>
            <div className="number">{item.number}</div>
            <div className="descript">{item.description}</div>
          </Card>
        ))}
      </AchievementsWrap>
      <h2
        style={{
          fontWeight: "300",
          marginTop: "50px",
          marginBottom: "50px",
          textAlign: "center",
          fontSize: "25px",
        }}
      >
        "Science is a way of thinking much more than it is a body of knowledge"
        - Carl Sagan
      </h2>
      <Divider />
      <Title>Meet the board</Title>
      <Board />
      <img src="/transparent.png" alt="logo" className="logo" />
    </Page>
  );
};

const achievementsData = [
  {
    icon: <BsIcons.BsPerson />,
    number: "200+",
    description:
      "We have over 200 members and over 20 events that cover all the branches of science.",
    break: <br />,
  },
  {
    icon: <IoIcons.IoTrophyOutline />,
    number: "1st",
    description:
      "We won first place at Regionals in 2020 and 11th place in States.",
    break: <br />,
  },
  {
    icon: <RiIcons.RiLineChartLine />,
    number: "2022",
    description:
      "Having just qualified for States in 2018, our team has now climbed from 40th place to 11th.",
  },
];

const AchievementsWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  color: black;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;

const Title = styled.h2`
  border-top: 3px solid var(--secondary-color);
  padding-top: 20px;
  align-self: flex-start;
  margin-bottom: 50px;
`;

const Grid = styled.div`
  display: block;
  height: 200px;
  width: 200px;
  position: absolute;
  top: -20px;
  left: -28px;
  background-image: radial-gradient(#444444 2px, #070a0f 2px);
  background-size: 20px 20px;
  z-index: 0;
  background-position: 0px 78px;
`;

const Divider = styled.hr`
  background: 2px solid white;
  width: 100vw;
  padding: 0;
  margin: 0;
`;
const Card = styled.div`
  min-height: 450px;
  z-index: 90;
  width: 500px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 50px;
  margin: 20px;

  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s;
  }

  @media (max-width: 600px) {
    height: 100%;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 50%;
`;

const Header = styled.div`
  display: flex;
  color: black;
  margin-bottom: 4rem;

  @media (max-width: 600px) {
    padding: 20px;
    margin: 2rem 0;
    width: 100%;
    border-radius: 20px 0 20px 0;
  }
`;
const TextDiv = styled.div`
  color: #fff;
  margin-top: 50px;

  @media (max-width: 600px) {
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;

const Page = styled.div`
  background: #070a0f;
  display: flex;
  padding: 0;
  color: #fff;
  width: 80%;
  align-items: center;
  flex-direction: column;
  margin: auto;

  @media (max-width: 600px) {
    padding: 2rem;
  }
`;

export default About;
