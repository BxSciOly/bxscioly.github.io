import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./style/Homestyle.css";
import Upcoming from "./homeComponents/Upcoming/Upcoming";
import Schedule from "./homeComponents/Schedule/Schedule";
import Pattern from "./pattern.png";
import Carousel from "./homeComponents/CarouselComponents/Carousel";
import { CarouselData } from "./homeComponents/CarouselComponents/CarouselData";

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
            transform: `translateY(${offsetY * 0.15}px)`,
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
            top: "0",
            right: "0",
            transform: `translateY(${offsetY * 0.3}px)`,
            transition: "0s all",
            userSelect: "none",
          }}
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ position: "absolute", top: "440px", zIndex: "-1" }}
      >
        <path
          fill="#FFCD00"
          fill-opacity="1"
          d="M0,128L48,128C96,128,192,128,288,144C384,160,480,192,576,208C672,224,768,224,864,218.7C960,213,1056,203,1152,208C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <HomeBackground>
        <Carousel slides={CarouselData} />
        <SkewDiv>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{ position: "absolute", top: "-520px" }}
          >
            <path
              fill="#006851"
              fill-opacity="1"
              d="M0,32L48,69.3C96,107,192,181,288,224C384,267,480,277,576,266.7C672,256,768,224,864,202.7C960,181,1056,171,1152,186.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{
              position: "absolute",
              transform: "rotate(-180deg)",
              top: "680px",
            }}
          >
            <path
              fill="#006851"
              fill-opacity="1"
              d="M0,224L48,234.7C96,245,192,267,288,282.7C384,299,480,309,576,293.3C672,277,768,235,864,224C960,213,1056,235,1152,240C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </SkewDiv>
        <Upcoming />
        <Schedule />
      </HomeBackground>
    </>
  );
};

const SkewDiv = styled.div`
  background: #006851;
  position: absolute;
  width: 120%;
  margin-top: 320px;
  transform: rotate(-5deg);
  height: 700px;
  z-index: 0;
`;

const BackgroundDiv = styled.div`
  width: 100%;
  height: 700px;
`;

const HomeBackground = styled.div`
  width: 100%;
  background-color: #ffcd00;
  opacity: 1;
  padding: 20px;
  display: flex;
  flex-wrap: flex;
  flex-direction: column;
  align-items: center;
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
