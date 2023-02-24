import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    border:1px solid red;
    width:100%;
    min-height:100px;
`;

const SectionBlock = ({ title, points }) => {
    console.log(points)
    return (
        <Container>

        </Container>
    );
}

export default SectionBlock;

    // width: ${(props) => props.isOpen ? "auto" : "333px"};