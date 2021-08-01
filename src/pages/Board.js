import React from "react";
import styled from "styled-components";
import BoardData from "./BoardData";

const Header = styled.div`
  height: 300px;
  background: #ffcd00;
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
  height: 700px;
  width: 600px;
  padding: 10px 80px;
  margin-bottom: 50px;
  border: 2px solid black;
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
        <h3>
          We are proud to say that our team is fully led and organized by
          students.
        </h3>
        <h3>
          Below, are the people who make this team possible. Please do not
          hesitate to contact us!
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
