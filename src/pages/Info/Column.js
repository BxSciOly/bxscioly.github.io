import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";

const Column = (props) => {
  return (
    <div style={props.style} className="flex-col px-10 my-0 text-center h-full w-full flex justify-center items-center">
        {props.icon}
      <h1 className=" text-lg w-full mt-6">{props.desc}</h1>
    </div>
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
