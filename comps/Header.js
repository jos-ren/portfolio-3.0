import React from "react";
import styled from "styled-components";
import IconButton from '../comps/IconButton';
import Link from 'next/link'

const Container = styled.div`
    height:75px;
    // border:1px solid black;
    margin-top:20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 4rem;
    // background-color: var(--secondary);
    position: relative;
    right: 4rem;
    width: calc(100% + 8rem)
`;
const Header = ({ onClick, img_src, logo_src }) => {
    return (
        <Container>
            <Link href="/">
                <IconButton margin="0px" img_src={logo_src} />
            </Link>
            <IconButton margin="0px" onClick={onClick} img_src={img_src} />
        </Container>
    );
};

export default Header;
