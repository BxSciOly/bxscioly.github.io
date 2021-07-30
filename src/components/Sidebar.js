import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

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
  const [navbar, setNavbar] = useState(false);

  let menuRef = useClickOutside(() => {
    setSidebar(false);
  });

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        {/* className={navbar ? "navbar active" : "navbar"} */}
        <nav className={"navbar"}>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h2
            style={{
              fontSize: "25px",
              marginLeft: "50px",
            }}
          >
            BRONX SCIENCE OLYMPIAD
          </h2>
        </nav>
        <SidebarNav ref={menuRef} sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
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
  color: white;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  background: black;
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

export default Sidebar;
