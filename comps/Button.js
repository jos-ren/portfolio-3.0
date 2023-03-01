import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border-radius: 6px;
  height: 45px;
  padding:0px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ margin }) => margin};
  border: 1px solid var(--border);
  cursor:pointer;
  transition: bottom .2s;
  transition-timing-function: ease-out;
  position:relative;
  bottom:0px;
  width:100%;
  background: var(--highlight);
  color: var(--secondary);
  font-family: Inter;
  font-size: 12pt;
  font-weight: 600;
  letter-spacing: 2px;
  text-decoration: none;
  :hover{
    // border: 1px solid blue;
    position:relative;
    bottom:2px;
    box-shadow: 0 1px 3px -2px rgba(0,0,0,.1);
  }
  &:focus {
    outline: 1px solid var(--button-focus);
  }
  `;

const IconButton = ({ text, onClick, margin, type }) => {
  return (
    <Container onClick={onClick} margin={margin} type={type}>
      <div >{text}</div>
    </Container>
  );
};

export default IconButton;