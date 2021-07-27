import React, { useEffect } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import "./style/Homestyle.css";
import { gsap, Power3 } from "gsap";
import Upcoming from "./homeComponents/Upcoming";

const BackgroundDiv = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 30px;
`;

const HomeBackground = styled.div`
  margin-top: 50px;
  height: 100vh;
  width: 100%;
  background: white;
  padding: 20px;
`;

const Home = () => {
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
        <HomeBackground>
          <Upcoming />
        </HomeBackground>
      </IconContext.Provider>
    </>
  );
};

export default Home;
