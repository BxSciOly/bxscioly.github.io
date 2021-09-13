import React from "react";
import styled from "styled-components";
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "white", size: "20" }}>
      <Box>
        <FooterDiv className="footer">
          <MediaDiv>
            <a className="title">BxScioly</a>
            <a
              href="https://www.instagram.com/bx_sci_oly/?hl=en"
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
            <a className="title-event">Explore Topics</a>
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
          <ResourcesDiv>
            <a className="title-event">Resources</a>
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
            <Links>Contact</Links>
            <Link style={linkstyle} to="/board">
              <Links>Board</Links>
            </Link>
            <Link style={linkstyle} to="/faqs">
              <Links>FAQs</Links>
            </Link>
          </ResourcesDiv>
          <OtherDiv>
            <a className="title-event">Support</a>
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
      <Bottom>
        <h3 style={{ color: "white", fontWeight: "100", fontSize: "16px" }}>
          Designed by Aaron Tang (tanga@bxscience.edu), Bronx Science Science Olympiad, 2021.
        </h3>
      </Bottom>
    </IconContext.Provider>
  );
};

const FooterDiv = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  z-index: 999;
  color: white;
  justify-content: center;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0px;
    flex-direction: column;
    align-items: center;
  }
`;

const Bottom = styled.div`
  background: black;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  background: black;
  margin-bottom: -40px;

  @media (max-width: 1000px) {
    padding: 0px;
    height: 450px;
  }
`;

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
    height: 200px;
    padding: 0px;
    margin-left: 20px;
    align-items: center;
    padding-top: 70px;
  }
`;

const EventsDiv = styled.div`
  padding: 30px;
  margin-right: 30px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const OtherDiv = styled.div`
  padding: 30px;
  margin-right: 30px;

  @media (max-width: 600px) {
    min-width: 130px;
    padding-top: 50px;
    margin: 0;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
  }
`;

const ResourcesDiv = styled.div`
  padding: 30px;
  margin-right: 30px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Links = styled.p`
  margin-bottom: 15px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 15px;
    &:hover {
      text-decoration: none;
      cursor: none;
    }
  }
`;

export default Footer;
