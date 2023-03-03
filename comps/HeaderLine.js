import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    // text-transform: uppercase;
    display:flex;
    align-items:center;
    margin: ${({ margin }) => margin};margin
`;

const Line = styled.div`
    border-bottom: 1px solid var(--border);
    width:100%;
`;

const HeaderLine = ({ header, margin }) => {
    return (
        <Container margin={margin}>
            <Line />
            <p style={{ fontSize: '14px', margin: "0px 15px", whiteSpace: 'nowrap' }}>{header}</p>
            <Line />
        </Container>
    );
}

HeaderLine.defaultProps = {
    margin: "50px 0px 30px 0px"
  }

export default HeaderLine;

    // width: ${(props) => props.isOpen ? "auto" : "333px"};