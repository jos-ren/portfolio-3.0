import React from "react";
import styled from "styled-components";
import Image from 'next/image'

const Container = styled.div`
    background-color: var(--secondary);
    border-radius:8px;
    padding:20px;
    margin-right:30px;
    >*{
        border-radius:6px;
    }
    margin-bottom:30px;
`;

const PhotoCard = ({ desc, image }) => {
    return (
        <Container>
            <Image height="330" width="330" objectFit="cover" quality="100" src={image} />
            <div style={{ fontSize: "12pt", marginTop: "10px" }}>{desc}</div>
        </Container>
    );
};

export default PhotoCard;
