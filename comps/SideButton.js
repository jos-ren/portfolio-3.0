import React from 'react';
import styled from "styled-components";
import Image from 'next/image';

const Container = styled.div`
    background-color: var(--tertiary);
    border: 1px solid var(--border);
    border-radius:6px;
    width:100%;
    height:45px;
    display:flex;
    padding:10px;
    cursor:pointer;
`;

const CompName = ({ img_src, text }) => {
    return (
        <Container>
            <Image width={20} height={20} src={img_src} />
            <div style={{fontSize:"12pt", marginLeft:"20px"}}>
                {text}
            </div>
        </Container>
    );
}

export default CompName;