import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./style/Homestyle.css";
import Upcoming from "./homeComponents/Upcoming/Upcoming";
import Schedule from "./homeComponents/Schedule/Schedule";
import Info from "./Info/Info";
import Background from "./background.mp4";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page">
      <Sidebar />
      <video autoPlay loop muted className="background">
        <source src={Background} type="video/mp4" />
      </video>
      {/* <svg
        className="blob-1"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#48B763"
          d="M41.6,-76.3C52.2,-65.9,57.9,-51.3,65.5,-37.9C73.2,-24.5,82.8,-12.2,80.2,-1.5C77.7,9.3,63.1,18.6,54.9,31.2C46.8,43.8,45.2,59.7,37.2,67.8C29.1,76,14.5,76.4,1.6,73.7C-11.4,71.1,-22.9,65.3,-33.8,58.7C-44.7,52.2,-55,45,-64.5,35.1C-74.1,25.1,-82.8,12.6,-86.2,-2C-89.6,-16.5,-87.6,-33,-77.5,-41.9C-67.5,-50.9,-49.2,-52.3,-34.9,-60.5C-20.7,-68.8,-10.3,-83.8,2.6,-88.3C15.5,-92.8,31,-86.6,41.6,-76.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="blob-2"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#48B763"
          d="M42.2,-35.3C55.8,-16.5,68.8,1.1,66.8,17.3C64.7,33.5,47.6,48.4,27.6,58.4C7.6,68.4,-15.2,73.6,-32,65.8C-48.8,57.9,-59.6,37,-60.4,18.2C-61.2,-0.6,-52,-17.4,-40.2,-35.7C-28.5,-54,-14.3,-73.9,0,-73.9C14.3,-73.9,28.5,-54,42.2,-35.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="blob-3"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#48B763"
          d="M40.4,-26.5C51.7,-3.8,59.7,17.6,52.4,25.9C45.1,34.2,22.5,29.4,2.1,28.2C-18.4,27,-36.8,29.4,-47.6,19.1C-58.4,8.7,-61.6,-14.4,-52.4,-35.8C-43.2,-57.3,-21.6,-77.2,-3.5,-75.1C14.6,-73.1,29.1,-49.2,40.4,-26.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="blob-4"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#48B763"
          d="M40.6,-24.4C54,-0.4,66.9,22.9,60.1,39.1C53.3,55.4,26.6,64.6,0.5,64.3C-25.6,64,-51.2,54.2,-62.1,35.6C-73.1,16.9,-69.3,-10.5,-56.5,-34.1C-43.7,-57.8,-21.9,-77.8,-4.1,-75.4C13.7,-73.1,27.3,-48.4,40.6,-24.4Z"
          transform="translate(100 100)"
        />
      </svg> */}
      <div className="home">
        <BackgroundDiv
          style={{
            transform: `translateY(${offsetY * 0.10}px)`,
            transition: "0s all",
          }}
        > 
          
          <div className="bxsci">BRONX SCIENCE</div>
          <div className="scioly">
            <Title>
              SCIENCE OLYMPIAD
            </Title>
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

  @media (max-width: 600px) {
    width: 200px;
    height: 50px;
  }
`;

const Title = styled.h3`
  color: var(--primary-color);
`

export default Home;
