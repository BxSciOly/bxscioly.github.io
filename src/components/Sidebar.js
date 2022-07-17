import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";
import { NavLink } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
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
    <div className="px-6 border-b-2 border-gray-900 bg-none">
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
              return (
                <div onClick={item.title === "Events" ? null : AllFuncts}>
                  <SubMenu item={item} key={index} />
                </div>
              );
            })}
          </SidebarWrap>
        </>
      ) : ( 
        <div className="flex items-center justify-center">
          <NavLink to="/home">
            <img src="/transparent.png" alt="logo" className="w-[80px]" />
          </NavLink>
          <SidebarDiv>
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
                <EventLinks to="/biology">Biology</EventLinks>
                <EventLinks to="/earthscience">Earth Science</EventLinks>
                <EventLinks to="/build">Build</EventLinks>
                <EventLinks to="/chemistry">Chemistry</EventLinks>
                <EventLinks to="/physics">Math/Physics</EventLinks>
              </div>
            </div>
          </SidebarDiv>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdidklVH3t7vzymGo1uSvSvDrlLnfN4UMOyyeRGIg5WgVvtKw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      )}
    </div>
  );
};

const Links = styled(NavLink)`
  height: 0px;
  z-index: 999;
`;

const NavDiv = styled.div`
  background: none;
  z-index: 999;
  width: 81%;
  margin: 1rem auto;

  @media (max-width: 600px) {
    margin: 0;
    padding: 0;
    width: 100%;
    z-index: 999;
  }
`;

const EventLinks = styled(NavLink)`
  color: white;
`;

const SidebarDiv = styled.div`
  height: 100%;
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

const SidebarItem = styled.p`
  font-size: 20px;
  margin: 15px;
  font-weight: 400;
  width: 50px;
  z-index: 999;
`;

const NavIcon = styled(NavLink)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 999;
`;

const SidebarWrap = styled.div`
  margin: 1rem 0 3rem 0;
  width: 100%;
`;

const NavBar = styled.div`
  z-index: 900;
  height: 105px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 999;
`;

export default Sidebar;
