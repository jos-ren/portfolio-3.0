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
  background-color: var(--secondary);
  // background-color: #f0f2f4;
  transition: background-color 0.2s ease-in;
  cursor: pointer;
  margin-right:10px;
  :focus {
    border: 2px solid var(--text);
  }
  :hover,
  :active {
    background-color: var(--tertiary);
    outline: none;
  }
  img {
    width: 18px;
    height: 18px;
  }
  svg {
    background-color:white;
  }
`;

const IconButton = ({ img_src, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Image width={20} height={20} src={img_src} />
    </Container>
  );
};

export default IconButton;
