import React from "react";
import styled from "styled-components";
import Image from 'next/image'

const Container = styled.div`
    background-color: var(--tertiary);
    border-radius:8px;
    padding:20px;
    height:80px;
    width:80px;
    margin-right:20px;
    margin-bottom:20px;
    align-items:center;
    justify-content:center;
    text-align:center;
    display:flex;
    font-size:10pt;
    // flex: 0 0 calc(16.66% - 20px);
    // padding: 20px;
    // margin: 10px;
    cursor:default;
    border: 1px solid var(--border);
`;

const Tile = ({ icon, isShown, name, index }) => {
    return (
        <Container>
            {isShown == index ?
                <div className="hover-display">{name}</div> :
                <Image height="40px" width="40px" objectFit="contain" src={icon} /> 
            }
        </Container>
    );
};

export default Tile;
