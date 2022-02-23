import React from "react";
import styled from "styled-components";
import BoardData from "./BoardData";

const Board = () => {
  return (
    <>
      <Title>BOARD</Title>
      <Container>
        {BoardData.map((member, i) => (
          <Member>
            <div>
              <Image src={member.background} alt={member.name} />
            </div>
            <Name>{member.name}</Name>
            <Pos>{member.title}</Pos>
          </Member>
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 3rem;

  @media (max-width: 600px) {
    padding: 2rem;
    display: grid;
    grid-template-areas:
      "p1 p2";
    
  }
`;

const Image = styled.img`
  text-align: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 350%;
  padding: 2rem;
  border-bottom: 2px solid var(--primary-color);
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
  margin: 1rem 2rem;

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
