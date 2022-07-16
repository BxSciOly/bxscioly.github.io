import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import styled from "styled-components";
import "./style/Homestyle.css";
import Info from "./Info/Info";
import arrow from "./arrow.svg";
import TextTransition from "react-text-transition";
import scioly2 from "../images/scioly2.jpg";
import scioly3 from "../images/scioly3.jpg";
import { achievementsData } from "./otherComponents/AchievementData";
import BoardData from "./otherComponents/Board/BoardData";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Board from "./otherComponents/Board/Board";

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
        <div className="z-40 flex flex-col justify-center mb-24 mt-14">
          <div className="mt-8 mb-4 text-6xl font-bold text-white">
            The Bronx High School of Science
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
              Science{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400">
              Olympiad
            </span>
          </div>
          <TextTransition
            className="text-xl font-semibold text-white"
            text={TEXTS[index % TEXTS.length]}
          >
            Exploring the world of science
          </TextTransition>
          <p className="flex w-full">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdidklVH3t7vzymGo1uSvSvDrlLnfN4UMOyyeRGIg5WgVvtKw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex m-0 basis-auto"
            >
              <button className="flex items-center mt-10 font-semibold text-yellow-400 duration-200 border-none cursor-pointer bg-none text-mg hover:translate-x-1">
                <p className="m-0 text-xl text-yellow-400 duration-200 hover:text-yellow-500">
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
        <div className="flex flex-col flex-wrap items-center w-full mb-32">
          <Info />
        </div>
        <div className="flex flex-row items-center justify-center mt-16">
          <div className="relative w-full h-4/5 -rotate-3 group">
            <div className=" absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-green-400 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200 animate-tilt " />
            <img src={scioly2} className="relative rounded-xl" />
          </div>
          <div className="ml-20 text-right text-white">
            <h1 className="mb-6 text-3xl font-bold ">Always exploring.</h1>
            <h1 className="font-mono text-lg text-gray-400">
              We are a team dedicated to exploring the world of science in every
              scientific discipline, ranging from biology to mathematics to
              engineering.
            </h1>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center mt-48 mb-32">
          <div className="mr-20 text-left text-white">
            <h1 className="mb-6 text-3xl font-bold ">A womderful community.</h1>
            <h1 className="font-mono text-lg text-gray-400">
              Whenever we do something, we do it together. From spamming each
              other cat pictures to supporting each other on the front lines of
              competiton, our community is one of the most tight-knit,
              dedicated, and collaborative communities in Bronx Science.
            </h1>
          </div>
          <div className="relative w-full h-4/5 rotate-3 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200 animate-tilt " />
            <img src={scioly3} className="relative rounded-xl" />
          </div>
        </div>

        <h1 className="text-5xl text-white font-bold border-t-4 border-yellow-400 pt-[20px] mb-[50px] self-start">
          Our Achievements
        </h1>
        <div className="grid grid-cols-3 gap-2">
          {achievementsData.map((item) => (
            <div className="relative group">
              <div className="p-[50px] h-full m-[20px] absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-yellow-600 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              <div className="relative h-full text-center text-white flex justify-around flex-col items-center p-[50px] m-[20px] bg-black rounded-lg">
                <div className="mb-4 text-7xl">{item.icon}</div>
                <div className="mb-5 text-4xl text-yellow-400">
                  {item.number}
                </div>
                <div className="text-lg">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-4xl mt-36 font-bold border-t-4 text-white border-yellow-400 pt-[20px] mb-[50px] self-start">
          Meet the board
        </div>
        <Board />
      </div>
    </>
  );
};

export default Home;
