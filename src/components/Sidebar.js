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
                <IconContext.Provider value={{ color: "white" }}>
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
                </a>

              </SidebarWrap>
            </SidebarNav>
          </IconContext.Provider>
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
  border-radius: 10px;
  padding: 0 1rem;
  background-color: #000;
  width: 80%;
  margin: 2rem auto;
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

const SidebarNav = styled.nav`
  color: white;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 360ms ease-in-out;
  z-index: 100;
  margin-left: 2rem;

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
  margin-left: 2rem;
  width: 100%;
`;

const NavBar = styled.div`
  height: 105px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default Sidebar;
