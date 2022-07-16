import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import styled from "styled-components";
import "./style/Homestyle.css";
import Info from "./Info/Info";
import arrow from "./arrow.svg";
import TextTransition from "react-text-transition";
import scioly2 from "../images/scioly2.jpg";
import scioly3 from "../images/scioly3.jpg";

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
      <div className="flex items-start justify-center flex-col bg-[#0e0e0f] px-40 py-12">
        <div className="flex z-40 justify-center flex-col mt-14 mb-24">
          <div className="mb-4 mt-8 text-white text-6xl font-bold">
            The Bronx High School of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
              Science{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400">
              Olympiad
            </span>
          </div>
          <TextTransition
            className="text-white font-semibold text-xl"
            text={TEXTS[index % TEXTS.length]}
          >
            Exploring the world of science
          </TextTransition>
          <p className="flex w-full">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdidklVH3t7vzymGo1uSvSvDrlLnfN4UMOyyeRGIg5WgVvtKw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="m-0 flex basis-auto"
            >
              <button className="mt-10 bg-none flex items-center border-none cursor-pointer duration-200 text-yellow-400 text-mg font-semibold hover:translate-x-1">
                <p className="m-0 text-yellow-400 duration-200 hover:text-yellow-500 text-xl">
                  JOIN US
                </p>
                <img
                  src={arrow}
                  style={{ height: "15px", marginLeft: "15px" }}
                  alt="join"
                />
              </button>
            </a>
          </p>
        </div>
        <div className="flex flex-wrap w-full flex-col items-center mb-32">
          <Info />
        </div>
        <div className="mt-16 flex items-center justify-center flex-row">
          <div className="h-4/5 w-full -rotate-3 relative group">
            <div className=" absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-green-400 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200 animate-tilt " />
            <img src={scioly2} className="relative rounded-xl" />
          </div>
          <div className="ml-20 text-white text-right">
            <h1 className="text-3xl mb-6 font-bold ">Always exploring.</h1>
            <h1 className="text-lg text-gray-400 font-mono">
              We are a team dedicated to exploring the world of science in every
              scientific discipline, ranging from biology to mathematics to
              engineering.
            </h1>
          </div>
        </div>

        <div className="mt-48 flex items-center justify-center flex-row">
          <div className="mr-20 text-white text-left">
            <h1 className="text-3xl mb-6 font-bold ">A womderful community.</h1>
            <h1 className="text-lg text-gray-400 font-mono">
              Whenever we do something, we do it together. From spamming each
              other cat pictures to supporting each other on the front lines of
              competiton, our community is one of the most tight-knit,
              dedicated, and collaborative communities in Bronx Science.
            </h1>
          </div>
          <div className="h-4/5 w-full rotate-3 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200 animate-tilt " />
            <img src={scioly3} className="relative rounded-xl" />
          </div>
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
