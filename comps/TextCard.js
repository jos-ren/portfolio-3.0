import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: var(--secondary);
    border-radius:8px;
    padding:20px;
    // height:200px;
    // margin-right:30px;
    margin-bottom:30px;
`;

const TextCard = ({ text }) => {
    return (
        <Container>
            <div style={{ fontSize: "12pt", textOverflow: "ellipsis" }}>{text}</div>
        </Container>
    );
};

export default TextCard;