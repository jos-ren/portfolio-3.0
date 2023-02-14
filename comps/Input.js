import React from "react";
import styled from "styled-components";


const Container = styled.input`
    min-width:500px;
    width:50%;
    height:45px;
    border-radius:6px;
    background:var(--secondary);
    font-family: Inter;
    font-size:12pt;
    margin-bottom:20px;
    border:none;
    color:var(--text);
    padding:0 0 0 16px;
    &:focus {
        background: var(--tertiary);
        outline: 2px solid var(--text);
      }
`;

const Input = ({ type, placeholder, name, required }) => {
    return (
        <Container type={type} placeholder={placeholder} name={name} required={required} />
    );
};

export default Input;
