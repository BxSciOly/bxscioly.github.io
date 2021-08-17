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
      <h1 style={{ fontWeight: "200", fontSize: "20px" }}>{props.desc}</h1>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100%;
  width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 40px;
  text-align: center;
`;

export default Column;
