import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";
import { Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "./sidebar.css";

// let useClickOutside = (handler) => {
//   let menuRef = useRef();

//   useEffect(() => {
//     let maybeHandler = (event) => {
//       if (!menuRef.current.contains(event.target)) {
//         handler();
//       }
//     };

//     document.addEventListener("mousedown", maybeHandler);

//     return () => {
//       document.removeEventListener("mousedown", maybeHandler);
//     };
//   });
//   return menuRef;
// };


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [text, setText] = useState(false);
  const moveText = () => setText(!text);
  const location = useLocation();

  // let menuRef = useClickOutside(() => {
  //   setSidebar(false);
  // });

  const AllFuncts = () => {
    moveText();
    showSidebar();
  };

  const isPageWide = useMediaQuery("(max-width: 600px)");
  return (
    <>
      {isPageWide ? (
        <>
          <IconContext.Provider value={{ color: "black" }}>
            {/* className={navbar ? "navbar active" : "navbar"} */}
            <nav className={"navbar"}>
              <NavIcon to="#">
                <RiIcons.RiMenu2Fill onClick={AllFuncts} />
              </NavIcon>
              <h2 className={sidebar ? "logo-title-moved" : "logo-title"}>
                BRONX SCIENCE OLYMPIAD
              </h2>
              <h2 className="icon-logo">BXSCIOLY</h2>
            </nav>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "25" }}>
            <SidebarNav /* ref={menuRef} */ sidebar={sidebar}>
              <SidebarWrap>
                <IconContext.Provider value={{ color: "black" }}>
                  <NavIcon to="#">
                    <RiIcons.RiMenu3Fill onClick={AllFuncts} />
                  </NavIcon>
                </IconContext.Provider>
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdidklVH3t7vzymGo1uSvSvDrlLnfN4UMOyyeRGIg5WgVvtKw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <JoinButton>Interest Form</JoinButton>
                </a>
              </SidebarWrap>
            </SidebarNav>
          </IconContext.Provider>
        </>
      ) : (
        <NavBar>
          <Link to="/home">
            <h1 className={`${location.pathname === "/home" ? 'logoWhite' : 'logoBlack'}`}>BXSCIOLY</h1>
          </Link>
          <SidebarDiv>
            <Links to="/home">
              <SidebarItem className={`${location.pathname === "/home" ? 'whiteClassName' : 'regularClassName'}`}>Home</SidebarItem>
            </Links>
            <Links to="/about">
              <SidebarItem className={`${location.pathname === "/home" ? 'whiteClassName' : 'regularClassName'}`}>About</SidebarItem>
            </Links>
            <div className="dropdown">
              <div className="dropbtn">
                <SidebarItem className={`${location.pathname === "/home" ? 'whiteClassName' : 'regularClassName'}`}>Events</SidebarItem>
                <FaIcons.FaCaretDown className={`${location.pathname === "/home" ? 'whiteClassName' : 'regularClassName'}`} />
              </div>
              <div className="dropdown-content">
                <EventLinks to="/biology">
                  <a href="#">Biology</a>
                </EventLinks>
                <EventLinks to="/earthscience">
                  <a href="#">Earth Science</a>
                </EventLinks>
                <EventLinks to="/build">
                  <a href="#">Build</a>
                </EventLinks>
                <EventLinks to="/chemistry">
                  <a href="#">Chemistry</a>
                </EventLinks>
                <EventLinks to="/physics">
                  <a href="#">Physics</a>
                </EventLinks>
              </div>
            </div>
            <Links to="/board">
              <SidebarItem className={`${location.pathname === "/home" ? 'whiteClassName' : 'regularClassName'}`}>Board</SidebarItem>
            </Links>
            <Links to="faqs">
              <SidebarItem className={`${location.pathname === "/home" ? 'whiteClassName' : 'regularClassName'}`}>FAQs</SidebarItem>
            </Links>
          </SidebarDiv>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdidklVH3t7vzymGo1uSvSvDrlLnfN4UMOyyeRGIg5WgVvtKw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NavJoinButton>Interest Form</NavJoinButton>
          </a>
        </NavBar>
      )}
    </>
  );
};

const Links = styled(Link)`
  background: black;
  height: 0px;
`;

const EventLinks = styled(Link)``;

const SidebarDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const SidebarItem = styled.p`
  font-size: 20px;
  margin: 15px;
  font-family: roboto, sans-serif;
  font-weight: 400;
  width: 50px;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  color: black;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 360ms ease-in-out;
  z-index: 10;
  background: #ffb44e;
  border-right: 2px solid black;

  @media (max-width: 600px) {
    background: white;
  }
`;

// const Logo = styled.div`
//   height: 50px;
//   width: 50px;
//   border-radius: 100%;
//   background: #026857;
// `;

const SidebarWrap = styled.div`
  width: 100%;
`;

const JoinButton = styled.button`
  margin-left: 35px;
  margin-top: 10px;
  width: 175px;
  height: 50px;
  font-size: 15px;
  border: 2px solid black;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 5px 5px 0px 2px #000000;
    box-shadow: 5px 5px 0px 2px #000000;
  }
`;

const NavJoinButton = styled.button`
  margin-left: 20px;
  width: 175px;
  height: 45px;
  font-size: 20px;
  border: 2px solid black;
  background: white;
  font-weight: 400;
  font-family: roboto, sans-serif;

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 5px 5px 0px 2px #000000;
    box-shadow: 5px 5px 0px 2px #000000;
  }
`;

const NavBar = styled.div`
  height: 105px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;

export default Sidebar;
