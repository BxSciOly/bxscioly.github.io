import React from "react";

const Column = (props) => {
  return (
    <div
      style={props.style}
      className="flex-col px-16 py-28 text-center h-full w-full flex justify-center items-center"
    >
      {props.icon}
      <h1 className=" text-lg w-full mt-6">{props.desc}</h1>
    </div>
  );
};

export default Column;
