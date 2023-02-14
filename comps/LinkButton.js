import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position:relative;
`;

const Container = styled.button`
  border: 0;
  border-radius: 6px;
  height: 45px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary);
  cursor: pointer;
  margin-right: ${({ margin }) => margin};
  color:var(--text);
  `;

const GradiantBorder = styled.div`
  border-radius: 6px;
  background: var(--gradiant);
  z-index:-1;
  display:none;
  height: 49px;
  width: 84px;
  position:absolute;
  top:-2px;
  left:-2px;
  `;


const LinkButton = ({ text, onClick, margin }) => {
  return (
    <Wrapper className="wrapper">
      <Container onClick={onClick} margin={margin}>
        <div style={{ fontSize: "12pt" }}>{text}</div>
      </Container>
      <GradiantBorder className="gradiant_border" />
    </Wrapper>
  );
};

export default LinkButton;

LinkButton.defaultProps = {
  margin: "20px",
};