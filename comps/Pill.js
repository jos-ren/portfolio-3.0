import React from 'react';
import styled from "styled-components";

const Container = styled.div`

`;

const Pill = ({text}) => {
  return (
    <Container>{text}</Container>
  );
}

export default Pill;

    // width: ${(props) => props.isOpen ? "auto" : "333px"};