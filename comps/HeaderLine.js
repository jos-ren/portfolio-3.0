import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    // text-transform: uppercase;
    display:flex;
    align-items:center;
    margin:50px 0px 30px 0px;
`;

const Line = styled.div`
    border-bottom: 1px solid var(--border);
    width:100%;
`;

const HeaderLine = ({ header }) => {
    return (
        <Container>
            <Line />
            <p style={{ fontSize: '14px', margin: "0px 15px", whiteSpace: 'nowrap' }}>{header}</p>
            <Line />
        </Container>
    );
}

export default HeaderLine;

    // width: ${(props) => props.isOpen ? "auto" : "333px"};