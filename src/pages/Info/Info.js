import React from "react";
import styled from "styled-components";
import Column from "./Column";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";

const Info = () => {
  return (
    <Wrap>
      <Column
        icon={<BiIcons.BiBrain />}
        desc="Learn about your favorite science topics and explore others!"
        style={{ marginTop: "11px" }}
      />
      <Column
        icon={<BiIcons.BiTrophy />}
        desc="Opportunities to participate in and win tournaments"
      />
      <Column
        icon={<HiIcons.HiOutlineChatAlt2 />}
        desc="Meet new people and make friends"
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 300px;
  background: white;
  margin-bottom: 50px;
  padding: 50px;
  display: flex;
`;

export default Info;
