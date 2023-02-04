import React from "react";
import styled from "styled-components";
import Image from 'next/image'

const Container = styled.div`
    background-color: var(--secondary);
    border-radius:8px;
    padding:20px;
    height:80px;
    width:80px;
    margin-right:30px;
    margin-bottom:30px;
`;

const Tile = ({ icon }) => {
    return (
        <Container>
            <div>
                <Image height="40px" width="40px" objectFit="contain" src={icon} />
            </div>
        </Container>
    );
}; 

export default Tile;
