import React from "react";
import styled from "styled-components";
import BoardData from "./BoardData";
import "./Board.css";

const Board = () => {
    return (
        <div className="container">
            {BoardData.map((member, i) => (
                <Member>
                    <div>
                        <img src={member.background} alt={member.name} className="pfp"/>
                    </div>
                    <Name>{member.name}</Name>
                    <Pos>{member.title}</Pos>
                </Member>
            ))}
        </div>
    );
}

const Member = styled.div`
    padding: 1rem;
    text-align: center;
    display: grid;
    grid-template-areas:
        "pfp"
        "name"
        "desc";
    transition: 200ms ease;
    margin-right: 4rem;
`;

const Name = styled.p`
    font-size: 150%;
`;

const Pos = styled.p`
    font-size: 100%;
`;

export default Board;