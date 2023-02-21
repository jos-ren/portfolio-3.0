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
  // margin-left: ${({ margin }) => margin};
  margin-left: 20px;
  border: 1px solid var(--border);
  `;

// const GradiantBorder = styled.div`
//   border-radius: 6px;
//   background: var(--gradiant);
//   z-index:-1;
//   display:none;
//   height: 49px;
//   width: 49px;
//   position:absolute;
//   top:-2px;
//   left:-2px;
//   `;


const IconButton = ({ icon, onClick, margin }) => {
  return (
    // <Wrapper className="wrapper">
    //   <Container onClick={onClick} margin={margin}>
    //     <Image width={20} height={20} src={img_src} />
    //   </Container>
    //   <GradiantBorder className="gradiant_border" />
    // </Wrapper>
    <Container onClick={onClick} margin={margin}>
      {/* <Image width={20} height={20} src={img_src} /> */}
      {icon}
    </Container>
  );
};

export default IconButton;
