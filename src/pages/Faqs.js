import React, { useState } from "react";
import styled from "styled-components";
import FaqsData from "./otherComponents/FaqsData";
import * as GrIcons from "react-icons/gr";
import "./style/Homestyle.css";

const Faqs = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <>
      <Page>
        <div>
          <Title>FAQ</Title>
          <Content>
            <QuestionsDiv>
              {FaqsData.map((item, index) => {
                return (
                  <AccordionItem>
                    <AccordionTitle>
                      {item.question}
                      <GrIcons.GrDown
                        className={clicked === index ? "rotated" : ""}
                      />
                    </AccordionTitle>
                    
                      <AccordionAnswer>
                        {item.answer}&nbsp;
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.link}
                        </a>
                      </AccordionAnswer>
                    
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
      <Button>Ask a Question</Button>
    </>
  );
};

const Title = styled.h1`
  font-size: 350%;
  color: var(--primary-color);
  text-shadow: 0 0 5px var(--primary-color);
  margin: 4rem 0 6rem 0;
`;

const Page = styled.div`
  display: grid;
  grid-template-areas: "left right";
  padding: 2rem;
  text-align: center;
`;

const Image = styled.img`
  width: 800px;
  height: 800px;
`;

const Button = styled.button`
  height: 40px;
  width: 200px;
  margin-top: 40px;
  background: white;

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
  height: 600px;
  background-color: #000;
  padding: 20px;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const QuestionsDiv = styled.div`
  display: flex;
  margin: 4rem 0;
  flex-direction: column;
  background-color: var(--secondary-color);
  padding: 3rem;
  border-radius: 20px;
`;

const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AccordionTitle = styled.div`
  width: 100%;
  color: #fff;
  cursor: pointer;
  padding: 18px;
  display: flex;
  align-items: center;
  border-none;
  outline: none;
  transition: background-color 0.6s ease;
  font-weight: 600;
  font-size: 14px;
  justify-content: space-between;
  z-index: 1;
`;

const AccordionAnswer = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;

  @media (max-width: 600px) {
    background: white;
  }
`;

const AccordionItem = styled.div`
  margin-bottom: 20px;
`;

export default Faqs;
