import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.button`
  border: 0;
  border-radius: 6px;
  height: 45px;
  min-width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--tertiary);
  cursor: pointer;
  margin-left: 20px;
  border: 1px solid var(--border);
  :hover{
      box-shadow: 0 1px 3px -2px rgba(0,0,0,.1);
  }
  `;

const IconButton = ({ icon, onClick, margin }) => {
  return (
    <Container onClick={onClick} margin={margin}>
      {icon}
    </Container>
  );
};

export default IconButton;
