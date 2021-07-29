import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./style/Homestyle.css";
import Upcoming from "./homeComponents/Upcoming/Upcoming";
import Schedule from "./homeComponents/Schedule/Schedule";
import Learning from "./learning.svg";

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
          src={Learning}
          style={{
            position: "absolute",
            marginLeft: "450px",
            zIndex: "-1",
            transform: `translateY(${offsetY * 0.5}px)`,
            transition: "0s all",
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
  background: #fcce33;
  border: none;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background: #ffe896;
  }
`;

export default Home;
