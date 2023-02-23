import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    border:1px solid red;
    width:100%;
`;

const SectionBlock = ({ title }) => {
    return (
        <Container>
            <h1>{title}</h1>
        </Container>
    );
}

export default SectionBlock;

    // width: ${(props) => props.isOpen ? "auto" : "333px"};