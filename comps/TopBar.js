import React from 'react';
import styled from "styled-components";
import UseAnimations from 'react-useanimations';
import menu4 from 'react-useanimations/lib/menu4'

const Container = styled.div`
    height:60px;
    width:100vw;
    // border:1px solid red;
    position: fixed;
    top: 0px;
    box-shadow: 0px 1px 0px 0px var(--border);
    background: var(--primary);
    z-index:100;
    display:flex;
    align-items:center;
    padding:0 1.5em;
`;

const TopBar = ({ onClick, strokeColor }) => {
  return (
    <Container>
      <div style={{ cursor: 'pointer' }} onClick={onClick}>
        <UseAnimations animation={menu4} size={36}  speed={2.5} strokeColor={strokeColor}/>
      </div>
    </Container>
  );
}

TopBar.defaultProps = {
  strokeColor: "black"
}

export default TopBar;

