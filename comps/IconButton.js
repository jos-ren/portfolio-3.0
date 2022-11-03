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
  // background-color: var(--secondary-bg);
  // background-color: #e2e8f0;
  background-color: #f0f2f4;
  transition: background-color 0.2s ease-in;
  cursor: pointer;
  // color: var(--headings);
  color: #000;
  :focus {
    // border: 2px solid var(--headings);
    border: 2px solid #000;
  }
  :hover,
  :active {
    // background-color: var(--secondary-bg-hover);
    background-color: #cdd7e5;
    outline: none;
  }
  img {
    width: 18px;
    height: 18px;
  }
`;

const IconButton = ({ img_src, href }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} >
      <Container>
        <Image width={20} height={20} src={img_src} />
      </Container>
    </a>
  );
};

export default IconButton;
