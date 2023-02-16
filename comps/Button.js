import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border: 0;
  border-radius: 6px;
  height: 45px;
  padding:0px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--tertiary);
  cursor: pointer;
  margin-right: ${({ margin }) => margin};
  color:var(--text);
  border: 1px solid var(--border);
  // &:focus, :hover {
  //   background: var(--hover);
  //   outline: 2px solid var(--text);
  // }
  `;

const IconButton = ({ text, onClick, margin, type }) => {
  return (
    <Container onClick={onClick} margin={margin} type={type}>
      <div style={{ fontSize: "12pt" }}>{text}</div>
    </Container>
  );
};

export default IconButton;