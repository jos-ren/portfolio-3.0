import React from "react";
import styled from "styled-components";


const Container = styled.div`
    height:75px;
    // border:1px solid black;
    margin-top:75px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: var(--secondary);
    position: relative;
    right: 4rem;
    width: calc(100% + 8rem)
`;
const Footer = ({ }) => {
    return (
        <Container>
            <div>Developed & Designed by <b>Josh Renema</b> 2022</div>
        </Container>
    );
};

export default Footer;
