import React, { useState } from "react";
import styled from "styled-components";
import FaqsData from "./otherComponents/FaqsData";
import * as GrIcons from "react-icons/gr";
import "./style/Homestyle.css";

const Faqs = () => {
  return (
    <>
      <Page>
        <div>
          <Title>FAQ</Title>
          <Button>Ask a question!</Button>
          <Content>
            <QuestionsDiv>
              {FaqsData.map((item, index) => {
                return (
                  <AccordionItem>
                    <AccordionTitle>{item.question}</AccordionTitle>
                    <AccordionAnswer>{item.answer}</AccordionAnswer>
                  </AccordionItem>
                );
              })}
            </QuestionsDiv>
          </Content>
        </div>
        <ImageDiv>
          <Image src="/homeSvg.svg" alt="backLogo" />
        </ImageDiv>
      </Page>
    </>
  );
};

const Title = styled.h1`
  font-size: 350%;
  color: var(--primary-color);
  text-shadow: 0 0 5px var(--primary-color);
  margin: 1rem 0;
`;

const Page = styled.div`
  padding: 2rem;
  text-align: center;
  margin-bottom: 4rem;
`;

const Image = styled.img`
  width: 800px;
  height: 800px;
`;

const Button = styled.button`
width: 300px;
height: 60px;
margin: 2rem 0;
font-size: 20px;
border: none;
font-weight: 600;
border-radius: 30px;
cursor: pointer;
transition: 200ms ease;

&:hover {
  background-color: var(--primary-color);
  box-shadow: 0 0 10px var(--primary-color);
}

@media (max-width: 600px) {
  width: 200px;
  height: 50px;
  margin-bottom: 8rem;
}


  &:hover {
    -webkit-box-shadow: 5px 5px 0px 2px #000000;
    box-shadow: 5px 5px 0px 2px #000000;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

const Content = styled.div`
  width: 100%;
  background-color: #000;
  padding: 20px 15rem;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const QuestionsDiv = styled.div`
  display: grid;
  grid-template-areas: "q1 q2";
  grid-auto-columns: 1fr;
  margin: 4rem 0;
  background-color: var(--secondary-color);
  padding: 4rem;
  border-radius: 20px;
  text-align: left;
`;

const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AccordionTitle = styled.div`
  width: 100%;
  color: var(--primary-color);
  cursor: pointer;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  border-none;
  outline: none;
  transition: background-color 0.6s ease;
  font-weight: 600;
  font-size: 150%;
  justify-content: space-between;
`;

const AccordionAnswer = styled.div`
  display: flex;

  flex-direction: column;
  margin-top: 10px;

  @media (max-width: 600px) {
    background: white;
  }
`;

const AccordionItem = styled.div`
  margin-bottom: 4rem;
  padding: 0 3rem;
`;

export default Faqs;
