import React, { Link } from "react";
import * as FiIcons from "react-icons/fi";
import * as SiIcons from "react-icons/si";
import styled from "styled-components";

const TopNav = () => {
  return (
    <Navbar>
      <FiIcons.FiMenu />
      <SiIcons.SiAtom style={{ marginLeft: "40px" }} />
      <h1 style={{ fontSize: "30px", marginLeft: "10px" }}>BxScioly</h1>
    </Navbar>
  );
};

const Navbar = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 40px;
  padding: 0 20px 0 20px;

`;

export default TopNav;
