import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  border: ${({ border }) => border};
  padding:5px 10px;
  // margin:0px 5px;
  border-radius:15px;
  background: ${({ background }) => background};
  `;
  
  const Words = styled.p`
  color: ${({ color }) => color};
  margin: 0px;
  padding: 0px; 
`;

const Pill = ({ text, color, background, border }) => {
  return (
    <Container background={background} border={border}>
      <Words color={color}>{text}</Words>
    </Container>
  );
}

Pill.defaultProps = {
  background: "var(--tertiary)",
  color: "var(--p)",
  border:'1px solid var(--border)',
}

export default Pill;