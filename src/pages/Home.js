import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import styled from "styled-components";
import "./style/Homestyle.css";
import Upcoming from "./homeComponents/Upcoming/Upcoming";
import Timeline from "./homeComponents/Timeline/Timeline";
import Info from "./Info/Info";
import Background from "./background.mp4";



const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  const isPageWide = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page">
      {isPageWide ? null : (
        <video autoPlay loop muted className="background">
          <source src={Background} type="video/mp4" />
        </video>
      )}
      <div className="home">
        <BackgroundDiv
          style={{
            transform: `translateY(${offsetY * 0.1}px)`,
            transition: "0s all",
          }}
        >
          <div className="bxsci">BRONX SCIENCE</div>
          <div className="scioly">
            <Title>SCIENCE OLYMPIAD</Title>
          </div>

          <div className="desc">EXPLORING THE WORLD</div>
          <div className="desc 2">OF SCIENCE</div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdidklVH3t7vzymGo1uSvSvDrlLnfN4UMOyyeRGIg5WgVvtKw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <JoinButton>JOIN US</JoinButton>
          </a>
        </BackgroundDiv>
      </div>
      <HomeBackground>
        <Info />
        <Upcoming />
      </HomeBackground>
      <Timeline />
    </div>
  );
};

const BackgroundDiv = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -50px;

  @media (max-width: 600px) {
    width: 400px;
  }
`;

const HomeBackground = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: flex;
  flex-direction: column;
  align-items: center;
  background: none;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const JoinButton = styled.button`
  margin-top: 40px;
  width: 300px;
  height: 60px;
  font-size: 20px;
  border: none;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: 200ms ease;

  &:hover {
    background-color: var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 50px;
    margin-bottom: 8rem;
  }
`;

const Title = styled.h3`
  color: var(--primary-color);
  text-shadow: 0 0 12px var(--primary-color);

  @media (max-width: 600px) {
    margin-top: 2rem;
    text-align: center;
  }
`;

export default Home;
