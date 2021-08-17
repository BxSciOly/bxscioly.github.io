import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import scioly1 from "./scioly1.jpg";
import scioly2 from "./scioly2.jpg";
import scioly3 from "./scioly3.jpg";
import "react-slideshow-image/dist/styles.css";
import "./style/Homestyle.css";
const slideImages = [scioly1, scioly2, scioly3];

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
            </Slide>
          </ImageDiv>
          <TextDiv>
            <h3
              style={{
                fontWeight: "400",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              The BxSci Science Olympiad Team is dedicated to exploring the
              world of science in every scientific discipline, from biology to
              mathematics to engineering. We are student-led, meaning that we do
              not rely heavily on teacher coaching and instruction and value
              qualities such as leadership and teamwork. As an academic team, we
              not only work towards a strong performance at annual competitions,
              but we also help budding scientists to discover their potential
              outside of competition, offering advice and support to students on
              non-Science Olympiad related fronts.
            </h3>
          </TextDiv>
        </Header>
      </Page>
    </>
  );
};

const Header = styled.div`
  height: 600px;
  width: 80%;
  background: white;
  justify-content: center;
  display: flex;
  color: black;
  padding: 90px;
  margin-bottom: 40px;
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
`;

const TextDiv = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export default About;
