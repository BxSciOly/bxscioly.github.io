import React from "react";
import styled from "styled-components";
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./footer.css";
import { Link } from "react-router-dom";

const FooterDiv = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  z-index: 999;
  color: white;
  justify-content: center;
  
  @media (max-width: 600px) {
    display: grid;
    grid-template-areas: 
      "d1 d2";
  }
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;

  @media (max-width: 1000px) {
    padding: 20px 30px;
  }
`;

const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "white", size: "20" }}>
      <Box>
        <FooterDiv className="footer">
          <MediaDiv>
            <h3 className="title">BxScioly</h3>
            <a
              href="https://www.instagram.com/bxscioly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaInstagram />
              <p>Instagram</p>
            </a>
            <a
              href="https://www.facebook.com/Bxscioly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrIcons.GrFacebook />
              <p>Facebook</p>
            </a>
            <a
              href="https://discord.gg/ntPFKrTFEC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaDiscord />
              <p>Discord</p>
            </a>
          </MediaDiv>
          <EventsDiv>
            <h3 className="title-event">Explore Topics</h3>
            <Link style={linkstyle} to="/biology">
              <Links>Biology</Links>
            </Link>
            <Link style={linkstyle} to="/build">
              <Links>Build</Links>
            </Link>
            <Link style={linkstyle} to="/chemistry">
              <Links>Chemistry</Links>
            </Link>
            <Link style={linkstyle} to="/earthscience">
              <Links>Earth Science</Links>
            </Link>
            <Link style={linkstyle} to="/physics">
              <Links>Physics</Links>
            </Link>
          </EventsDiv>
          <OtherDiv>
            <h3 className="title-event">Resources</h3>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdidklVH3t7vzymGo1uSvSvDrlLnfN4UMOyyeRGIg5WgVvtKw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0" }}
            >
              <Links>Join us</Links>
            </a>
            <Link style={linkstyle} to="/about">
              <Links>About us</Links>
            </Link>
            <Link style={linkstyle} to="/faqs">
              <Links>FAQs</Links>
            </Link>
          </OtherDiv>
          <OtherDiv>
            <h3 className="title-event">Support</h3>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdIzC1T9ZwPq9FeiL4gyvtvDuHyr-uI2FbGHJp9f33Q-KfpKg/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0" }}
            >
              <Links>Technical issues</Links>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdEMJG5UpgZQ7wvTRR0oq0o3wdqEekVfP6d1zzqsfIMzU1iGA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0" }}
            >
              <Links>Suggestions form</Links>
            </a>
          </OtherDiv>
        </FooterDiv>
      </Box>
    </IconContext.Provider>
  );
};

const linkstyle = {
  margin: "0",
  width: "120px",
};

const MediaDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 300px;
  margin-right: 30px;
  
  @media (max-width: 600px) {
    margin: 0;
    padding: 25px;
  }

`;

const EventsDiv = styled.div`
  padding: 30px;
  margin-right: 30px;

  @media (max-width: 600px) {
    margin: 0;
    padding: 25px;
  }

`;

const OtherDiv = styled.div`
  padding: 30px;
  margin-right: 30px;

  
`;

const Links = styled.p`
  margin-bottom: 15px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Footer;
