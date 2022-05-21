import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import styled from "styled-components";
import "./style/Homestyle.css";
import Upcoming from "./homeComponents/Upcoming/Upcoming";
import Info from "./Info/Info";
import arrow from "./arrow.svg";
import TextTransition from "react-text-transition";
import background from "./background.mp4";

const TEXTS = [
  "Exploring the world of science",
  "Scioly to the moon🚀🌑🌑",
  "Competing since 2017",
  "4x States qualifiers",
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const isPageWide = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="page">
        <video autoPlay loop muted className="background">
          <source src={background} type="video/mp4" />
        </video>
        <BackgroundDiv>
          <MainTitle>
            The Bronx High School of{" "}
            <span style={{ color: "#f2d30a" }}>Science</span>
            <br />
            <span style={{ color: "#f2d30a" }}>Science</span> Olympiad
          </MainTitle>

          <TextTransition className="desc" text={TEXTS[index % TEXTS.length]}>
            Exploring the world of science
          </TextTransition>
          <p className="wrap">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdidklVH3t7vzymGo1uSvSvDrlLnfN4UMOyyeRGIg5WgVvtKw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: "0",
                display: "flex",
                flexBasis: "auto",
              }}
            >
              <JoinButton>
                <p className="join">JOIN US</p>
                <img
                  src={arrow}
                  style={{ height: "15px", marginLeft: "15px" }}
                />
              </JoinButton>
            </a>
          </p>
        </BackgroundDiv>
      </div>
      <HomeBackground>
        <Info />
        <Upcoming />
      </HomeBackground>
    </>
  );
};

const MainTitle = styled.h2`
  z-index: 100;
  font-size: 4rem;
  color: white;
  font-weight: 700;
  margin-bottom: 10px;
`;

const BackgroundDiv = styled.div`
  z-index: 100;
  height: 700px;
  display: flex;
  justify-content: center;

  flex-direction: column;
  margin-top: -50px;

  @media (max-width: 600px) {
    width: 400px;
  }
`;

const HomeBackground = styled.div`
  z-index: 800;
  display: flex;
  flex-wrap: flex;
  width: 100%;
  background: #f9fafb;
  padding-top: 150px;
  padding-bottom: 100px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const JoinButton = styled.button`
  margin-top: 40px;
  background: none;
  display: flex;
  align-items: center;
  font-size: 18px;
  border: none;
  color: var(--secondary-color);
  font-weight: 600;
  cursor: pointer;
  transition: 200ms ease;

  &:hover {
    transform: translate(5px, 0);
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 50px;
    margin-bottom: 8rem;
  }
`;
export default Home;
