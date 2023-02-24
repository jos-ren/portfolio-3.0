import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    border:1px solid red;
    width:100%;
    // min-height:300px;
`;

const SectionBlock = ({ title, points }) => {
    console.log(points)
    return (
        <Container>
            <h1>{title}</h1>
            <p>Summary</p>
            <div>{points}</div>
        </Container>
    );
}

export default SectionBlock;

    // width: ${(props) => props.isOpen ? "auto" : "333px"};