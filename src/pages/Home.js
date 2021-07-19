import React from "react";
import styled from "styled-components";
import Stars from "./images/starback.png";
import { IconContext } from "react-icons/lib";

const MainImage = styled.div`
  width: 100%;
  // background: #026857;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -99;
  margin-bottom: 30px;
`;

const AnnouncementsDiv = styled.div`
  width: 100%;
  height: 200px;
  background: #026857;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 2px;
  font-weight: 500;
`;

const Home = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="home">
          <MainImage>
            <img
              src={Stars}
              alt="Stars"
              style={{ width: "100%", height: "500px" }}
            />
          </MainImage>
          <AnnouncementsDiv>
            <Header>Board Announcements</Header>
          </AnnouncementsDiv>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Home;
