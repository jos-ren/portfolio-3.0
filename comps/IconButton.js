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
  // :focus {
  //   border: 2px solid var(--text);
  // }
  :hover,
  :active {
    // background-color: var(--tertiary);
    // outline: none;
    // border:2px solid var(--gradiant);
  }
  img {
    width: 18px;
    height: 18px;
  }
  svg {
    background-color:white;
  }
  `;
  
  const Wrapper = styled.div`
  margin-right:10px;
  border-radius: 6px;
  background: var(--gradiant);
  height: 49px;
  width: 49px;
  display:flex;
  align-items:center;
  justify-content:center;
  :hover{
    // display:none;
  }
`;

const IconButton = ({ img_src, onClick }) => {
  return (
    <Wrapper onMouseOver={console.log("enter")}>
      <Container onClick={onClick}>
        <Image width={20} height={20} src={img_src} />
      </Container>
    </Wrapper>
  );
};

export default IconButton;
