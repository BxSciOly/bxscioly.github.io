import React from "react";
import styled from "styled-components";
import BoardData from "./otherComponents/BoardData";
const Board = () => {
  return (
    <>
      <Header>
        <Title>Meet the Board</Title>
        <Desc>
          We are proud to say that our team is fully led and organized by
          students.
        </Desc>
        <Desc>
          Below are the people who make SciOly possible. Please do not hesitate
          to contact us!
        </Desc>
      </Header>
      <BoardDiv>
        {BoardData.map((item) => {
          return (
            <Card>
              <Background src={item.background} />
              <Name>{item.name}</Name>
              <Position>{item.title}</Position>
              <Description>{item.desc}</Description>              
            </Card>
          );
        })}
      </BoardDiv>
    </>
  );
};

const Description = styled.div`
  position: relative;
`;

const Header = styled.div`
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  padding: 40px;

  @media (max-width: 600px) {
    padding: 30px;
  }
`;

const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 40px;

  @media (max-width: 600px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const Background = styled.img`
  height: 200px;
  width: 150px;
  margin-bottom: 2rem;
  user-select: none;
  user-drag: none;
  border: 3px solid black;
  border-radius: 10px;

  @media (max-width: 600px) {
    height: 270px;
    width: 200px;
  }
`;

const BoardDiv = styled.div` 
  display: grid;
  grid-template-areas: 
    "p1 p2";
  gap: 1rem 0;
  padding: 0 15rem;
`;

const Card = styled.div`

  border: 3px solid black;
  color: black;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  border-radius: 20px;
  padding: 3rem;
  margin: 4rem;

  @media (max-width: 600px) {
    height: 480px;
    width: 300px;
    padding: 0;
    margin: 5px;
    border: 3px solid black;
    background: none;
    color: black;
  }
`;

const Desc = styled.h3`
  font-weight: 200;
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 17px;
    text-align: center;
  }
`;

const Name = styled.h1`
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

const Position = styled.h2`
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export default Board;
