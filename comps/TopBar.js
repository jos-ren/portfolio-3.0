import React from 'react';
import styled from "styled-components";
import { GoThreeBars, GoX } from "react-icons/go";

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

const TopBar = ({ isOpen, onClick }) => {
  return (
    <Container>
      {isOpen ? <GoX size={30} onClick={onClick} /> : <GoThreeBars size={30} onClick={onClick}/>}
    </Container>
  );
}

export default TopBar;

