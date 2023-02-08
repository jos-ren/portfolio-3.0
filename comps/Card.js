import React from "react";
import styled from "styled-components";
import Image from 'next/image'

const Container = styled.div`
    background-color: var(--secondary);
    border-radius:8px;
    padding:20px;
    min-height:200px;
    margin-right:30px;
    margin-bottom:30px;
`;

const Card = ({ title, desc, icon }) => {
    return (
        <Container>
            <Image height="50px" width="50px" objectFit="contain" src={icon} />
            <h3 style={{ margin: "10px 0px 2px 0px" }}>{title}</h3>
            <div style={{ fontSize: "12pt", textOverflow: "ellipsis" }}>{desc}</div>
        </Container>
    );
};

export default Card;