import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./style/Homestyle.css";
import Upcoming from "./homeComponents/Upcoming/Upcoming";
import Schedule from "./homeComponents/Schedule/Schedule";

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
          <JoinButton>JOIN US</JoinButton>
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
    -webkit-box-shadow: 5px 5px 0px 2px #000000;
    box-shadow: 5px 5px 0px 2px #000000;
  }
`;

export default Home;
