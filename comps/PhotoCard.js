import React from "react";
import styled from "styled-components";
import Image from 'next/image'

const Container = styled.div`
    background-color: var(--tertiary);
    border: 1px solid var(--border);
    border-radius:8px;
    padding:12px;
    // margin-right:10px;
    >*{
        border-radius:6px;
    }
    // margin-bottom:20px;
`;

const PhotoCard = ({ desc, image }) => {
    return (
        <Container>
            <Image unoptimized height="120" width="120" objectFit="cover" quality="100" src={image} />
            <div style={{ fontSize: "12pt", marginTop: "5px" }}>{desc}</div>
        </Container>
    );
};

export default PhotoCard;
