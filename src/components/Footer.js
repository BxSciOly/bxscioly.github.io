import React from "react";
import styled from "styled-components";
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./footer.css";

const FooterDiv = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  z-index: 999;
  color: white;
  justify-content: center;

  @media (max-width: 600px) {
    background: #f7b800;
  }
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  background: black;

  @media (max-width: 1000px) {
    padding: 70px 30px;
    background: #f7b800;
  }
`;

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
              href="https://discord.gg/ntPFKrTFEC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrIcons.GrFacebook />
              <p>Facebook</p>
            </a>
            <a
              href="https://www.facebook.com/Bxscioly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaDiscord />
              <p>Discord</p>
            </a>
          </MediaDiv>
          <EventsDiv>
            <a className="title-event">Explore Topics</a>
            <Links>Biology</Links>
            <Links>Build</Links>
            <Links>Chemistry</Links>
            <Links>Earth Science</Links>
            <Links>Physics</Links>
          </EventsDiv>
          <OtherDiv>
            <a className="title-event">Resources</a>
            <Links>Join us</Links>
            <Links>About us</Links>
            <Links>Contact</Links>
            <Links>Board</Links>
            <Links>FAQs</Links>
          </OtherDiv>
          <OtherDiv>
            <a className="title-event">Support</a>
            <Links>Technical form</Links>
            <Links>Suggestions form</Links>
          </OtherDiv>
        </FooterDiv>
      </Box>
    </IconContext.Provider>
  );
};
const MediaDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 300px;
  margin-right: 30px;
`;

const EventsDiv = styled.div`
  padding: 30px;
  margin-right: 30px;
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
