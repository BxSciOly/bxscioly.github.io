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
      <Header>
        <Title>Anything you want to know?</Title>
        <h3 style={{ fontWeight: "200" }}>
          Any questions or concerns submitted here will be read by the SciOly
          board. We look forward to hearing from you!
        </h3>
        <a
          style={{ height: "0px" }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSf_QBEruJ5063gMhvMYIweQx6BojU854mRpgR24IGIcfLNmfA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Ask a Question</Button>
        </a>
      </Header>
      <FaqTitle>
        <h1 style={{ marginTop: "40px" }}>Frequently Asked Questions</h1>
      </FaqTitle>
      <Page>
        <QuestionsDiv>
          {FaqsData.map((item, index) => {
            return (
              <AccordionItem>
                <AccordionTitle onClick={() => toggle(index)} key={index}>
                  {item.question}
                  <GrIcons.GrDown
                    className={clicked === index ? "rotated" : ""}
                  />
                </AccordionTitle>
                {clicked === index ? (
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
                ) : null}
              </AccordionItem>
            );
          })}
        </QuestionsDiv>
      </Page>
    </>
  );
};

const Header = styled.div`
  height: 300px;
  background: #74cc66;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
  color: black;

  @media only screen and (max-width: 400px) {
    width: 340px;
  }
`;

const Title = styled.h1`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 40px;
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
`;
const FaqTitle = styled.div`
  height: 80px;
  width: 100%;
  background: #ffea84;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Page = styled.div`
  width: 100%;
  height: 600px;
  background: rgb(255, 234, 132);
  padding: 20px;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const QuestionsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 500px;
  width: 800px;
`;
const AccordionTitle = styled.button`
  width: 100%;
  background-color: #eee;
  color: #444;
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

  &:hover, &:active {
    background-color: #ccc;
  }
`;

const AccordionAnswer = styled.div`
  background: #ffea84;
  z-index: 0;
  height: 50px;
  display: flex;
  align-items: center;
`;

const AccordionItem = styled.div`
  margin-bottom: 20px;
`;
export default Faqs;
