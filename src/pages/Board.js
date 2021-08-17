import React from "react";
import styled from "styled-components";
import BoardData from "./otherComponents/BoardData";

const Header = styled.div`
  height: 300px;
  background: #48b763;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 40px;
`;

const Background = styled.img`
  height: 400px;
  width: 300px;
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
  background: white;
  padding: 10px 80px;
  margin-bottom: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Board = () => {
  return (
    <>
      <Header>
        <Title>Meet the Board</Title>
        <h3 style={{ fontWeight: "200", fontSize: "20px" }}>
          We are proud to say that our team is fully led and organized by
          students.
        </h3>
        <h3 style={{ fontWeight: "200", fontSize: "20px" }}>
          Below are the people who make SciOly possible. Please do not hesitate
          to contact us!
        </h3>
      </Header>
      <BoardDiv>
        {BoardData.map((item) => {
          return (
            <Card>
              <Background
                src={item.background}
                style={{ marginBottom: "20px" }}
              />
              <h1 style={{ marginBottom: "20px" }}>{item.name}</h1>
              <h2 style={{ marginBottom: "20px" }}>{item.title}</h2>
              <h3 style={{ fontSize: "15px" }}>{item.desc}</h3>
            </Card>
          );
        })}
      </BoardDiv>
    </>
  );
};

export default Board;
