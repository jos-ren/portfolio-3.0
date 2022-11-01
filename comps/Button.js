import React from "react";
import styled from "styled-components";

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  min-width: 80px;
  height:45px;
  width:100px;
  -webkit-transition: background-color .2s ease-in;
  transition: background-color 0.2s ease-in;
  cursor: pointer;
  border: 0;
  // margin-right: 20px;
  border-radius: 4px;
  font-weight: 500;
  // background-color: var(--secondary-bg);
  // background-color: #e2e8f0;
  // color: var(--headings);
  color: #000;
  font-weight: 500;
  font-size: 12pt;
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
`;

const Button = ({ href, text }) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={href} >
            <Container>
                {text}
            </Container>
        </a>
    );
};

export default Button;
