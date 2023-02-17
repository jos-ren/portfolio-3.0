import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height:100px;
    width:100vw;
    // border:1px solid red;
    position: fixed;
    top: 0px;
    box-shadow: 0px 1px 0px 0px var(--border);
    background: var(--primary);
    z-index:100;
`;

const TopBar = ({}) => {
  return (
    <Container>

    </Container>
  );
}

export default TopBar;