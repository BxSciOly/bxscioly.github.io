import React from "react";
import styled from "styled-components";
import Column from "./Column";
import { MdOutlineScience } from "react-icons/md";
import { BiTrophy } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";

const Info = () => {
  const data = [
    {
      desc: "Learn about a variety of STEM topics",
      image: <MdOutlineScience className="text-6xl text-yellow-400" />,
    },
    {
      desc: "Participate and win in tournaments",
      image: <BiTrophy className="text-6xl text-yellow-400" />,
    },
    {
      desc: "Meet new people and make friends!",
      image: <FaUserFriends className="text-6xl text-yellow-400" />,
    },
  ];

  return (
    <div className="relative w-full group">
      <div className=" p-[50px]  absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
      <div className="relative z-0 flex justify-center text-white bg-[#141313] shadow-lg rounded-xl">
        {data.map((desc, i) => (
          <div>
            <Column key={i} icon={desc.image} desc={desc.desc} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Wrap = styled.div`
  height: 300px;
  color: black;
  margin-top: -200px;
  background: white;
  margin-bottom: 50px;
  padding: 50px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 4%);
  z-index: 0;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    margin-top: -100px;
    padding: 10px;
    flex-direction: column;
    background-color: var(--secondary-color);
  }
`;

export default Info;
