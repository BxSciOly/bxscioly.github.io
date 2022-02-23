import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import "./infostyle.css";

const Column = (props) => {
  return (
    <Wrap style={props.style}>
      <IconContext.Provider value={{ className: "icon" }}>
        {props.icon}
      </IconContext.Provider>
      <h1 className="description">{props.desc}</h1>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 40px;
  text-align: center;

  @media (max-width: 600px) {
    height: 150px;
    border-radius: 20px;
    margin: 0px 0 10px 0;
    padding: 20px;
  }
`;

export default Column;
