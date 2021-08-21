import React from "react";
import styled from "styled-components";
import BoardData from "./otherComponents/BoardData";

const Header = styled.div`
  background: #48b763;
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
  height: 400px;
  width: 300px;

  @media (max-width: 600px) {
    height: 270px;
    width: 200px;
  }
`;

const BoardDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
`;

const Card = styled.div`
  height: 600px;
  width: 500px;
  margin: 10px;
  background: black;
  padding: 10px 80px;
  color: white;
  margin-bottom: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

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
              <Background
                src={item.background}
                style={{ marginBottom: "20px" }}
              />
              <Name>{item.name}</Name>
              <Position>{item.title}</Position>
              <h3 style={{ fontSize: "15px" }}>{item.desc}</h3>
            </Card>
          );
        })}
      </BoardDiv>
    </>
  );
};

export default Board;
