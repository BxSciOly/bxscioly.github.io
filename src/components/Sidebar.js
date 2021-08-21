import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "./sidebar.css";

let useClickOutside = (handler) => {
  let menuRef = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return menuRef;
};

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [text, setText] = useState(false);

  const moveText = () => setText(!text);

  let menuRef = useClickOutside(() => {
    setSidebar(false);
  });

  const AllFuncts = () => {
    moveText();
    showSidebar();
  };

  return (
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
      <IconContext.Provider value={{ color: "black", size: "25" }}>
        <SidebarNav ref={menuRef} sidebar={sidebar}>
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
  );
};

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

export default Sidebar;
