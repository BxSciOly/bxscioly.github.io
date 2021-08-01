import React from "react";
import styled from "styled-components";
import Pattern2 from "./pattern2.png";

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

const Image = styled.img`
  height: 400px;
  width: 800px;
`;

const ImageDiv = styled.div`
  width: 800px;
  height: 400px;
  box-shadow: 15px 15px 0px 10px #000000;
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

const Pattern = styled.img`
  height: 380px;
  position: absolute;
  right: 0px;
  top: 0px;
`;

const About = () => {
  return (
    <>
      <Pattern src={Pattern2} />
      <Page>
        <Title>
          <h1
            style={{
              fontSize: "50px",
              textShadow: "4px 4px 0px #000000",
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
            <Image src="https://static.wixstatic.com/media/5a0dbc_1eb7c74741e24e63ac764140e8e4a1bb~mv2.jpg/v1/fill/w_1270,h_640,al_c,q_85,usm_0.66_1.00_0.01/5a0dbc_1eb7c74741e24e63ac764140e8e4a1bb~mv2.webp" />
          </ImageDiv>
          <TextDiv>
            <h3 style={{ fontWeight: "400", fontSize: "20px" }}>
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

export default About;
