import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import styled from "styled-components";
import "./style/Homestyle.css";
import Upcoming from "./homeComponents/Upcoming/Upcoming";
import Info from "./Info/Info";
import arrow from "./arrow.svg";
import TextTransition from "react-text-transition";


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
      <div className="m-auto flex flex-col bg-[#0e0e0f] px-48 py-12">
        <div className="flex z-40 justify-center flex-col mt-14 mb-52">
          <div className="mb-4 mt-8 text-white text-6xl font-bold">
            The Bronx High School of{" "}
            <span className="text-yellow-400">Science</span>
            <br />
            <span className="text-yellow-400">Science</span> Olympiad
          </div>
          <TextTransition
            className="text-white font-semibold text-xl"
            text={TEXTS[index % TEXTS.length]}
          >
            Exploring the world of science
          </TextTransition>
          <p className="flex w-full mb-12">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdidklVH3t7vzymGo1uSvSvDrlLnfN4UMOyyeRGIg5WgVvtKw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="m-0 flex basis-auto"
            >
              <button className="mt-10 bg-none flex items-center border-none cursor-pointer duration-200 text-yellow-400 text-mg font-semibold hover:translate-x-1">
                <p className="m-0 text-yellow-400 duration-200 hover:text-yellow-500 text-xl">JOIN US</p>
                <img
                  src={arrow}
                  style={{ height: "15px", marginLeft: "15px" }}
                  alt="join"
                />
              </button>
            </a>
          </p>
        </div>
        <div className="flex flex-wrap w-full flex-col items-center">
          <Info />
        </div>
      </div>
      
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
