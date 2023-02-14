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
    cursor:pointer;
`;

const Card = ({ title, desc, icon, link, isShown, info, index }) => {
    return (
        <Container>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <Image height="50px" width="50px" objectFit="contain" src={icon} />
                {isShown == index ? <Image height="20px" width="20px" objectFit="contain" src={link} /> : <></>}
            </div>
            <h3 style={{ margin: "10px 0px 2px 0px" }}>{title}</h3>
            <div style={{ fontSize: "12pt", textOverflow: "ellipsis", marginBottom:"5px" }}>{desc}</div>
            <div>{info}</div>
        </Container>
    );
};

export default Card;