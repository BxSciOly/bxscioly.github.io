import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Stars from "./images/starback.png";

const MainImage = styled.div`
  height: 500px;
  width: 100%;
  // background: #026857;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -99;
`;

const Home = () => {
  return (
    <>
      <div className="home">
        <MainImage>
          <img src={Stars} style={{ width: "100%", height: "500px" }} />
        </MainImage>
      </div>
    </>
  );
};

export default Home;
