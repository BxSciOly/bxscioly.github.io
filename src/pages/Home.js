import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./style/Homestyle.css";
import Upcoming from "./homeComponents/Upcoming/Upcoming";
import Schedule from "./homeComponents/Schedule/Schedule";
import Pattern3 from "./pattern3.png";
import Pattern from "./pattern.png";

const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="home">
        <BackgroundDiv
          style={{
            transform: `translateY(${offsetY * 0.3}px)`,
            transition: "0s all",
          }}
        >
          <div className="scioly">SCIENCE OLYMPIAD</div>
          <div className="bxsci">BRONX SCIENCE</div>
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
        <img
          alt="homepage-icon"
          src={Pattern}
          style={{
            position: "absolute",
            height: "820px",
            zIndex: "-2",
            marginLeft: "700px",
            marginTop: "-100px",
            transform: `translateY(${offsetY * 0.5}px)`,
            transition: "0s all",
            userSelect: "none",
          }}
        />
        <img
          src={Pattern3}
          alt="homepage-icon2"
          style={{
            position: "absolute",
            marginTop: "330px",
            height: "400px",
            left: "0",
            zIndex: "-2",
            transition: "0s all",
            transform: `translateY(${offsetY * 0.5}px)`,
          }}
        />
      </div>
      <HomeBackground>
        <Upcoming />
        <Schedule />
      </HomeBackground>
    </>
  );
};

const BackgroundDiv = styled.div`
  width: 100%;
  height: 700px;
`;

const HomeBackground = styled.div`
  width: 100%;
  background-color: #ffffff;
  opacity: 1;
  background-image: radial-gradient(#ffbd16 1.3px, #ffffff 1.3px);
  background-size: 26px 26px;
  padding: 20px;
  display: flex;
  flex-wrap: flex;
  flex-direction: column;
`;

const JoinButton = styled.button`
  margin-top: 20px;
  width: 300px;
  height: 50px;
  font-size: 20px;
  background: #ffcd00;
  border: none;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 0px 2px #000000;
  }
`;

export default Home;
