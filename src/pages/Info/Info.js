import React from "react";
import styled from "styled-components";
import Column from "./Column";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";

const Info = () => {
  return (
    <Wrap>
      <Column
        icon={<BiIcons.BiBrain />}
        desc="Learn about your favorite science topics"
      />
      <Column
        icon={<BiIcons.BiTrophy />}
        desc="Participate and win in tournaments"
      />
      <Column
        icon={<HiIcons.HiOutlineChatAlt2 />}
        desc="Meet new people and make friends"
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 300px;
  color: #fff;
  margin-bottom: 50px;
  padding: 50px;
  display: flex;
  justify-content: center;
  border-radius: 40px;
  background-color: var(--secondary-color);
  box-shadow: 0 0 20px var(--secondary-color);
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
