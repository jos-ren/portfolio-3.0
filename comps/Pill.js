import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  border:1px solid var(--border);
  padding:5px 10px;
  // margin:0px 5px;
  border-radius:15px;
`;

const Pill = ({ text }) => {
  return (
    <Container>
      <p style={{ margin: '0px', padding: "0px" }}>{text}</p>
    </Container>
  );
}

export default Pill;

    // width: ${(props) => props.isOpen ? "auto" : "333px"};