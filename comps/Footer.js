import React from "react";
import styled from "styled-components";


const Container = styled.div`
    height:75px;
    // border:1px solid black;
    margin-top:75px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#e2e8f0;
`;
const Footer = ({ }) => {
    return (
        <Container>
            <div>Developed by Josh Renema 2022</div>
        </Container>
    );
};

export default Footer;
