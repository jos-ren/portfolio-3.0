import React from "react";
import styled from "styled-components";
import Image from 'next/image'
import Pill from "./Pill"

const Container = styled.div`
    background-color: var(--tertiary);
    border: 1px solid var(--border);
    border-radius:8px;
    padding:20px;
    min-height:200px;
    min-width:180px;
    cursor:pointer;
    transition: bottom .2s;
    transition-timing-function: ease-out;
    position:relative;
    bottom:0px;
    :hover{
        position:relative;
        bottom:2px;
        box-shadow: 0 1px 3px -2px rgba(0,0,0,.1);
    }
`;

const Card = ({ title, desc, icon, link, isShown, info, index, hasPill, type, background }) => {
    return (
        <Container>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <Image unoptimized height="50px" width="50px" objectFit="contain" src={icon} />
                {isShown == index ? <Image  unoptimized height="20px" width="20px" objectFit="contain" src={link} /> : <></>}
                {/* {hasPill && <Pill text={type} color="white" background={background} border={"none"} />} */}
                {/* {hasPill && <Pill text={type} color={background} border={"1px solid " + background} />} */}
                {hasPill && <Pill text={type} color={background} />}
            </div>
            <h3 style={{ margin: "10px 0px 2px 0px" }}>{title}</h3>
            <div style={{ fontSize: "12pt", textOverflow: "ellipsis", marginBottom: "5px" }}>{desc}</div>
            <div>{info}</div>
        </Container>
    );
};

Card.defaultProps = {
    hasPill: false,
}

export default Card;