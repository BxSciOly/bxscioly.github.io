import React, { Link } from "react";
import * as FiIcons from "react-icons/fi";
import styled from "styled-components";

const TopNav = () => {
  return (
    <Navbar>
      <FiIcons.FiMenu />
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
