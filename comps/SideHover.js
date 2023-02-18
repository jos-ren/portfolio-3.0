import React from 'react';
import styled from "styled-components";
import Image from 'next/image';

const Container = styled.div`
    // background-color: var(--tertiary);
    // border: 1px solid var(--border);
    border-radius:6px;
    width:100%;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0px 10px;
    cursor:pointer;
    // margin-bottom:10px;
    :hover{
        background:var(--hover)
    }
`;

const SideHover = ({ img_src, text }) => {
    return (
        <Container>
            <div style={{
                fontSize: "12pt",
                // color: 'rgba(0, 0, 0, .8)',
                fontSize: '14px',
                fontWeight: 400,
                // margin:"0px 0px 2px 16px", 
                color: "var(--text)",
                fontFamily: "Inter"
            }}>
                {text}
            </div>
            {img_src && <Image width={20} height={20} src={img_src} />}
        </Container >
    );
}

export default SideHover;