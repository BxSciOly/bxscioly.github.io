import React, { useEffect } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import HomeBackground from "./3dbackground/HomeBackground";
import "./style/Homestyle.css";
import { gsap, Power3 } from "gsap";

const BackgroundDiv = styled.div`
  width: 100%;
  height: 500px;
`;

const Home = () => {
  useEffect(() => {
    gsap.from(".scioly", {
      opacity: -100,
      x: 100,
      duration: 0.4,
    });
    gsap.from(".bxsci", {
      opacity: -100,
      x: 100,
      duration: 0.6,
    });
    gsap.from(".desc", {
      opacity: -100,
      x: 100,
      duration: 0.8,
    });
    gsap.from(".desc2", {
      opacity: -100,
      x: 100,
      duration: 1,
    });
  });
  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="home">
          <BackgroundDiv>
            <div className="scioly">SCIENCE OLYMPIAD</div>
            <div className="bxsci">BRONX SCIENCE</div>
            <div className="desc">EXPLORING THE WORLD</div>
            <div className="desc 2">OF SCIENCE</div>
          </BackgroundDiv>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Home;
