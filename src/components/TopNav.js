import React, { Link } from "react";
import * as FiIcons from "react-icons/fi";
import * as SiIcons from "react-icons/si";
import styled from "styled-components";

const TopNav = () => {
  return (
    <Navbar>
        <LeftItems>
            <FiIcons.FiMenu />
            <SiIcons.SiAtom style={{ marginLeft: "40px" }} />
            <h1 style={{ fontSize: "25px", marginLeft: "10px", fontWeight: "100" }}>
                Bronx Science Olympiad
            </h1>
      </LeftItems>
      <RightItems>
          <Button>Join Us!</Button>
      </RightItems>
    </Navbar>
  );
};

const Navbar = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 30px;
  padding: 0 20px 0 20px;
  justify-content: space-between;
`;

const LeftItems = styled.div`
    width: 480px;
    height: 70px;
    display: flex;
    align-items: center;
`;
const RightItems = styled.div`
    width: 100px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

const Button = styled.button`
    border: 1px solid black;  
    width: 70px;
    height: 30px;
    background: white;
    
    &:hover {
        cursor: pointer;
    }
`
export default TopNav;
