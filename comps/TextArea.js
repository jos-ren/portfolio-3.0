import React from "react";
import styled from "styled-components";


const Container = styled.textarea`
    min-width:500px;
    width:60%;
    height:160px;
    border-radius:6px;
    background:var(--secondary);
    font-family: Inter;
    font-size:12pt;
    margin-bottom:20px;
    border:none;
    color:var(--text);
    padding: 16px;
    &:focus {
        background: var(--tertiary);
        outline: 2px solid var(--text);
      }
`;

const TextArea = ({  placeholder, name, required }) => {
    return (
        <Container  placeholder={placeholder} name={name} required={required} />
    );
};

export default TextArea;