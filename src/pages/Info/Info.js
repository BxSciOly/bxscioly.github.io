import React from "react";
import styled from "styled-components";
import Column from "./Column";
import trophy from "./assets/trophy.svg";
import friends from "./assets/friends.svg";
import subjects from "./assets/subjects.svg";

const Info = () => {
  const style = {
    height: "60px",
    marginBottom: "20px",
  };

  return (
    <Wrap>
      <Column
        icon={<img src={subjects} style={style} />}
        desc="Learn about a variety of STEM topics"
      />
      <Column
        icon={<img src={trophy} style={style} />}
        desc="Participate and win in tournaments"
      />
      <Column
        icon={<img src={friends} style={style} />}
        desc="Meet new people and make friends"
      />
    </Wrap>
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
