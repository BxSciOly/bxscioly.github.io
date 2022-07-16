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
    <div className="h-[300px] text-white bg-[#1E1E21] p-[50px] flex justify-center z-0 mt-[-200px] shadow-lg rounded-lg mb-4">
      {data.map((desc, i) => (
        <div>
          <Column key={i} icon={desc.image} desc={desc.desc} />
        </div>
      ))}
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
