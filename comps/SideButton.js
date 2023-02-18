import React from 'react';
import styled from "styled-components";
import Image from 'next/image';

const Container = styled.button`
    background-color: var(--tertiary);
    border: 1px solid var(--border);
    border-radius:6px;
    width:100%;
    height:45px;
    display:flex;
    padding:10px;
    cursor:pointer;
`;

const SideButton = ({ img_src, text }) => {
    return (
        <Container>
            <Image width={20} height={20} src={img_src} />
            <div style={{fontSize:"12pt", margin:"2px 0px 0px 16px", color:"var(--text)", fontFamily:"Inter"}}>
                {text}
            </div>
        </Container>
    );
}

export default SideButton;