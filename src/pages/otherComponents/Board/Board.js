import React from "react";
import styled from "styled-components";
import BoardData from "./BoardData";

const Board = () => {
  return (
    <div className="grid grid-cols-6 gap-10">
      {BoardData.map((member, i) => (
        <div className="text-center flex flex-col  items-center justify-center mb-2">
          <div>
            <img
              src={member.background}
              className="text-center w-[100px] h-[100px] rounded-full mb-4"
              alt={member.name}
            />
          </div>
          <h1 className="text-xl mb-2">{member.name}</h1>
          <h1 className="text-sm">{member.title}</h1>
        </div>
      ))}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 2rem;
    display: grid;
    grid-template-areas: "p1 p2";
  }
`;

const Image = styled.img`
  text-align: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Member = styled.div`
  padding: 1rem;
  text-align: center;
  display: grid;
  grid-template-areas:
    "pfp"
    "name"
    "desc";
  transition: 200ms ease;
  width: 10rem;

  @media (max-width: 600px) {
    margin: 1rem 0.5rem;
  }
`;

const Name = styled.p`
  font-size: 150%;
`;

const Pos = styled.p`
  font-size: 100%;
`;

export default Board;
