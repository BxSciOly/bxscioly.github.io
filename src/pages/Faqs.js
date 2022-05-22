import React from "react";
import styled from "styled-components";
import FaqsData from "./otherComponents/FaqsData";
import "./style/Homestyle.css";

const Faqs = () => {
  return (
    <>
      <Page>
        <Title>Frequently Asked Questions</Title>
        <Button>
          <Anchor href="https://forms.gle/TnaZtBrx5rp2QnDJ9" target="_blank">
            Ask a question!
          </Anchor>
        </Button>
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
  margin: 4rem 0 1rem 0;
  @media (max-width: 600px) {
    background-color: #000;
  }
`;

const Page = styled.div`
  padding: 2rem;
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const Image = styled.img`
  width: 800px;
  height: 800px;

  @media (max-width: 600px) {
    width: 350px;
    height: 350px;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
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
    margin: 1rem 0;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 20px 15rem;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const QuestionsDiv = styled.div`
  display: grid;
  grid-template-areas: "q1 q2";
  grid-auto-columns: 1fr;
  margin: 2rem 0 4rem 0;
  background-color: var(--secondary-color);
  padding: 4rem;
  border-radius: 20px;
  text-align: left;
  box-shadow: 0 0 20px var(--primary-color);

  @media (max-width: 600px) {
    padding: 1rem;
    margin: 2rem 0;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AccordionTitle = styled.div`
  width: 100%;
  color: var(--primary-color);
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  border-none;
  outline: none;
  transition: background-color 0.6s ease;
  font-weight: 600;
  font-size: 150%;
  justify-content: space-between;

  @media (max-width: 600px) {
    font-size: 110%;
  }
`;

const AccordionAnswer = styled.div`
  display: flex;

  flex-direction: column;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 95%;
  }
`;

const AccordionItem = styled.div`
  margin-bottom: 4rem;
  padding: 0 3rem;

  @media (max-width: 600px) {
    padding: 0 0.5rem;
  }
`;

export default Faqs;
