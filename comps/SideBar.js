import React, { useState } from 'react';
import styled from "styled-components";
import SideButton from "./SideButton"
import SideHover from "./SideHover"
import IconButton from "./IconButton"
import Link from 'next/link'

const Container = styled.div`
    height: 100vh;
    width:333px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    left: ${(props) => props.isOpen ? "0px" : "-333px"};
    transition: left .2s;
    transition-timing-function: ease-out;
    box-shadow: 1px 0 0 0 var(--border);
    background: var(--primary);
    z-index:99;
    padding:100px 20px;
    // width: ${(props) => props.isOpen ? "auto" : "333px"};
    // width: ${(props) => props.isOpen ? "auto" : "333px"};
`;

const SideBar = ({ icon, logo_src, onClick, projects_data, isOpen, onLinkClick, link_src, socials_data }) => {
    const [isHovered, setIsHovered] = useState(-1);
    console.log(isHovered)

    return (
        <Container isOpen={isOpen}>
            <div style={{ display: "flex", width: '100%' }}>
                <Link href="/">
                    <div style={{ width: "100%" }} onClick={onLinkClick}>
                        <SideButton img_src={logo_src} text={'Josh Renema'} />
                    </div>
                </Link>
                <IconButton onClick={onClick} icon={icon} />
            </div>

            <div style={{ margin: "15px 0px" }}></div>

            <p style={{ marginLeft: "10px" }}>PROJECTS</p>
            {/* maybe have a "view more button after 4-5" */}
            {projects_data.map((o, index) => {
                return <Link key={index} href={`/projects/${encodeURIComponent(o.id)}`} >
                    <div onClick={onLinkClick}>
                        <SideHover text={o.title} img_src={o.icon} />
                    </div>
                </Link>
            })}

            <div style={{ margin: "15px 0px" }}></div>

            <p style={{ marginLeft: "10px" }}>SOCIALS</p>
            {socials_data.map((o, index) => {
                return <a key={index} onMouseEnter={() => setIsHovered(index)} onMouseLeave={() => setIsHovered(-1)} target="_blank" rel="noopener noreferrer" href="o.link" >
                    <SideHover text={o.title} link_src={link_src} isHovered={isHovered} index={index}/>
                </a>
            })}

            {/* perhaps add a "more" section. it can include interests, photography, etc */}
            {/* GALLERY (polaroids) */}

        </Container>
    );
}


export default SideBar;