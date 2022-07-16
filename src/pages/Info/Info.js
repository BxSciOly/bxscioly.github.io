import React from "react";
import styled from "styled-components";
import Column from "./Column";
import trophy from "./assets/trophy.svg";
import friends from "./assets/friends.svg";
import subjects from "./assets/subjects.svg";

const Info = () => {

  const data = [
    {
      desc: "Learn about a variety of STEM topics",
      image: subjects,
    },
    {
      desc: "Participate and win in tournaments",
      image: trophy,
    },
    {
      desc: "Participate and win in tournaments",
      image: friends,
    },
  ];

  return (
    <div className="h-[300px] text-black bg-slate-50 p-[50px] flex justify-center z-0 mt-[-200px] shadow-lg rounded-lg mb-4">
      {data.map((desc, i) => (
        <div>
          <Column
            key={i}
            icon={
              <img
                src={desc.image}
                className="h-[60px] mb-[20px]"
                alt={desc.desc}
              />
            }
            desc={desc.desc}
          />
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
