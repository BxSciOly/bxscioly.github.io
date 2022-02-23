import React, { useState } from "react";
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
    <NavDiv>
      {isPageWide ? (
        <>
          {/* className={navbar ? "navbar active" : "navbar"} */}
          <nav className={"navbar"}>
            <NavIcon to="#">
              <RiIcons.RiMenu2Fill
                onClick={AllFuncts}
                value={{ color: "white" }}
              />
            </NavIcon>
          </nav>
          <SidebarWrap className={sidebar ? "logo-title-moved" : "logo-title"}>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </>
      ) : (
        <NavBar>
          <Link to="/home">
            <h1 className="navLogo">BXSCIOLY</h1>
          </Link>
          <SidebarDiv>
            <Links to="/about">
              <SidebarItem
                className={`${
                  location.pathname === "/home"
                    ? "whiteClassName"
                    : "regularClassName"
                }`}
              >
                About
              </SidebarItem>
            </Links>
            <Links to="faqs">
              <SidebarItem
                className={`${
                  location.pathname === "/home"
                    ? "whiteClassName"
                    : "regularClassName"
                }`}
              >
                FAQs
              </SidebarItem>
            </Links>
            <div className="dropdown">
              <div className="dropbtn">
                <SidebarItem
                  className={`${
                    location.pathname === "/home"
                      ? "whiteClassName"
                      : "regularClassName"
                  }`}
                >
                  Events
                </SidebarItem>
                <FaIcons.FaCaretDown
                  className={`${
                    location.pathname === "/home"
                      ? "whiteClassName"
                      : "regularClassName"
                  }`}
                />
              </div>
              <div className="dropdown-content">
                <EventLinks to="/biology">
                  <a href="#">Biology</a>
                </EventLinks>
                <EventLinks to="/earthscience">
                  <a href="#">Earth Science</a>
                </EventLinks>
                <EventLinks to="/build">
                  <a>Build</a>
                </EventLinks>
                <EventLinks to="/chemistry">
                  <a>Chemistry</a>
                </EventLinks>
                <EventLinks to="/physics">
                  <a>Physics</a>
                </EventLinks>
              </div>
            </div>
          </SidebarDiv>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdidklVH3t7vzymGo1uSvSvDrlLnfN4UMOyyeRGIg5WgVvtKw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </NavBar>
      )}
    </NavDiv>
  );
};

const Links = styled(Link)`
  background: black;
  height: 0px;
`;

const NavDiv = styled.div`
  border-bottom: 2px solid #fff;
  padding: 0 2rem;
  background-color: #000;
  width: 80%;
  margin: 1rem auto;

  @media (max-width: 600px) {
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const EventLinks = styled(Link)``;

const SidebarDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
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


const SidebarWrap = styled.div`
  margin: 1rem 0 3rem 0;
  width: 100%;
`;

const NavBar = styled.div`
  height: 105px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default Sidebar;
