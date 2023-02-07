import React from "react";
import styled from "styled-components";
import Image from 'next/image'

const Container = styled.div`
    background-color: var(--secondary);
    border-radius:8px;
    padding:20px;
    height:80px;
    width:80px;
    margin-right:20px;
    margin-bottom:20px;

    // flex: 0 0 calc(16.66% - 20px);
    // padding: 20px;
    // margin: 10px;
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
