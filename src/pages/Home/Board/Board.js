import React from "react";
import styled from "styled-components";
import { BoardData } from "./BoardData";
import { MarketingData } from "./BoardData";
import { LogisticsData } from "./BoardData";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";

const Board = () => {
  return (
    <div className="w-full text-white">
      <Tab.Group>
        <Tab.List className="flex items-center justify-center p-1 mb-8 rounded-xl">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ${
                  selected
                    ? "shadow bg-[#1abc9c]"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                }`}
              >
                Board
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ${
                  selected
                    ? "bg-[#3498db] shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                }`}
              >
                Logistics
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ${
                  selected
                    ? "bg-[#e91e63] shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                }`}
              >
                Marketing
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="flex flex-wrap items-center justify-center flex-1">
              {BoardData.map((member, i) => (
                <div className="flex flex-col items-center justify-center mx-16 my-12 text-center w-[100px] h-[200px]">
                  <div>
                    <img
                      src={member.background}
                      className="mb-4 text-center rounded-full "
                      alt={member.name}
                    />
                  </div>
                  <h1 className="my-2 text-xl">{member.name}</h1>
                  {member.title}
                </div>
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-wrap items-center justify-center flex-1">
              {LogisticsData.map((member, i) => (
                <div className="flex flex-col items-center justify-center mx-16 my-12 text-center w-[100px] h-[200px]">
                  <div>
                    <img
                      src={member.background}
                      className="mb-4 text-center rounded-full "
                      alt={member.name}
                    />
                  </div>
                  <h1 className="my-2 text-xl">{member.name}</h1>
                  {member.title}
                </div>
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-wrap items-center justify-center flex-1">
              {MarketingData.map((member, i) => (
                <div className="flex flex-col items-center justify-center mx-16 my-12 text-center w-[100px] h-[200px]">
                  <div>
                    <img
                      src={member.background}
                      className="mb-4 text-center rounded-full "
                      alt={member.name}
                    />
                  </div>
                  <h1 className="my-2 text-xl">{member.name}</h1>
                  {member.title}
                </div>
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 2rem;
    display: grid;
    grid-template-areas: "p1 p2";
  }
`;

const Image = styled.img`
  text-align: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Member = styled.div`
  padding: 1rem;
  text-align: center;
  display: grid;
  grid-template-areas:
    "pfp"
    "name"
    "desc";
  transition: 200ms ease;
  width: 10rem;

  @media (max-width: 600px) {
    margin: 1rem 0.5rem;
  }
`;

const Name = styled.p`
  font-size: 150%;
`;

const Pos = styled.p`
  font-size: 100%;
`;

export default Board;
