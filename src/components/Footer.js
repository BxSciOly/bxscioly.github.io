import React from "react";
import styled from "styled-components";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const FooterDiv = styled.div`
  height: 50px;
  width: 100%;
  background: #ffea84;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  color: black;
`;
const Box = styled.div`
  padding: 40px;
  background: #ffea84;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const IconDiv = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background: black;
  display: flex;
  justify-content: center;
  margin-right: 30px;
  align-items: center;
`;

const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "white", size: "30" }}>
      <Box>
        <div style={{ display: "flex", marginLeft: "40px" }}>
          <IconDiv>
            <a
              href="https://www.instagram.com/bx_sci_oly/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiIcons.AiFillInstagram />
            </a>
          </IconDiv>
          <IconDiv>
            <a
              href="https://discord.gg/ntPFKrTFEC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiIcons.RiDiscordFill />
            </a>
          </IconDiv>
          <IconDiv>
            <a
              href="https://www.facebook.com/Bxscioly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiIcons.RiFacebookFill />
            </a>
          </IconDiv>
          <IconDiv>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdIzC1T9ZwPq9FeiL4gyvtvDuHyr-uI2FbGHJp9f33Q-KfpKg/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaQuestion />
            </a>
          </IconDiv>
        </div>
      </Box>
      <FooterDiv className="footer">
        ©2021 BxScioly. All Rights Reserved.
      </FooterDiv>
    </IconContext.Provider>
  );
};

export default Footer;
