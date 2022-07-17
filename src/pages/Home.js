import React, { useState, useEffect } from "react";
import "./style/Homestyle.css";
import Info from "./Info/Info";
import arrow from "./arrow.svg";
import TextTransition from "react-text-transition";
import scioly2 from "../images/scioly2.jpg";
import scioly3 from "../images/scioly3.jpg";
import { achievementsData } from "./otherComponents/AchievementData";
import Board from "./otherComponents/Board/Board";

const TEXTS = [
  "Exploring the world of science",
  "SCIOLY TO THE MOON!",
  "Established in 2010",
  "5x States qualifiers",
  "It's about time, It's about power!",
  "We stay hungry, we devour!",
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className=" bg-[#0e0e0f] px-40 py-12">
        <div className="mb-20"> {/* add rocket image */}
          <div className="z-40 flex flex-col justify-center mb-16 font-sans mt-14">
            <div className="mt-8 mb-4 text-4xl text-white">
              Bronx High School of Science
              <br className="mb-4" />
              <div className="mt-6">
                <span className="font-bold text-8xl text-[#F8CA55]">
                  SCIENCE{" "}
                </span>
                <span className="font-bold text-8xl text-[#F8CA55]">
                  OLYMPIAD
                </span>
              </div>
            </div>
            <TextTransition
              className="text-3xl text-white font-slab "
              text={TEXTS[index % TEXTS.length]}
            >
              Exploring the world of science
            </TextTransition>
          </div>
          <button className="px-6 py-2 mx-0 duration-150 bg-[#F8CA55] hover:bg-[#e0ac28] rounded-xl">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdidklVH3t7vzymGo1uSvSvDrlLnfN4UMOyyeRGIg5WgVvtKw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="m-0"
            >
              <p className="flex items-center justify-center m-0 text-xl font-semibold text-black duration-200 ">
                Join us!
              </p>
            </a>
          </button>
        </div>
        <div className="flex flex-col flex-wrap items-center w-full mb-20">
          <Info />
        </div>
        <div className="flex flex-row items-center justify-center mt-16">
          <div className="relative w-full h-4/5 -rotate-3 group">
            <div className=" absolute -inset-0.5 bg-gradient-to-r from-gray-700 to-gray-700 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200 animate-tilt " />
            <img src={scioly2} className="relative rounded-xl" />
          </div>
          <div className="pr-6 ml-20 text-right text-white border-r-8 border-yellow-400">
            <h1 className="mb-6 text-3xl font-bold ">Always exploring.</h1>
            <h1 className="font-mono text-lg text-gray-400">
              We are a team dedicated to exploring the world of science in every
              scientific discipline, ranging from biology to mathematics to
              engineering.
            </h1>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center mt-48 mb-32">
          <div className="pl-6 mr-20 text-left text-white border-l-8 border-yellow-400">
            <h1 className="mb-6 text-3xl font-bold ">A wonderful community.</h1>
            <h1 className="font-mono text-lg text-gray-400">
              Whenever we do something, we do it together. From spamming each
              other cat pictures to supporting each other on the front lines of
              competiton, our community is one of the most tight-knit,
              dedicated, and collaborative communities in Bronx Science.
            </h1>
          </div>
          <div className="relative w-full h-4/5 rotate-3 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 to-gray-700 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200 animate-tilt " />
            <img src={scioly3} className="relative rounded-xl" />
          </div>
        </div>

        <h1 className="text-5xl text-white font-bold border-t-[0.5px] border-yellow-800 py-[50px] mb-[50px] self-start">
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
        <div className="text-4xl mt-36 font-bold  text-white border-t-[0.5px] border-yellow-800 pt-[50px] mb-[50px] self-start">
          Meet the board
        </div>
        <Board />
        <div className="flex items-center justify-center"></div>
      </div>
    </>
  );
};

export default Home;
