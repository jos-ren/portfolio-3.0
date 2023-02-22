import React from 'react';
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

const SideBar = ({ icon, logo_src, onClick, data, isOpen, onLinkClick}) => {
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

            <p>PROJECTS</p>
            {/* maybe have a "view more button after 4-5" */}
            {data.map((o, index) => {
                return <Link key={index} href={`/projects/${encodeURIComponent(o.id)}`} >
                    <div onClick={onLinkClick}>
                        <SideHover text={o.title} img_src={o.icon} />
                    </div>
                </Link>
            })}

            <div style={{ margin: "15px 0px" }}></div>

            <p>SOCIALS</p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/jos-ren">
                <SideHover text={'Github'}
                // img_src={github}
                />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/josh-renema/">
                <SideHover text={'Linkedin'}
                // img_src={linkedin}
                />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/joshrenema">
                <SideHover text={'Behance'}
                // img_src={behance}
                />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={"mailto:josh.renema@protonmail.com"}>
                <SideHover text={'Email'}
                //  img_src={email}
                />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1MzXEtLKZ2h67UMKlzdBGnKA1JhoJGz-1/view?usp=sharing">
                <SideHover text={'Resume'} />
            </a>

        </Container>
    );
}
//          <Image style={{ borderRadius: "50%" }} height="300px" width="300px" objectFit="cover" src="/profile_mountain.jpg" />
// 			<a target="_blank" rel="noopener noreferrer" href="https://github.com/jos-ren">
// 			<IconButton img_src={github} />
// 			</a>
// 			<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/josh-renema/">
// 			<IconButton img_src={linkedin} />
// 			</a>
// 			<a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/joshrenema">
// 			<IconButton img_src={behance} />
// 			</a>
// 			<a target="_blank" rel="noopener noreferrer" href={"mailto:josh.renema@protonmail.com"}>
// 			<IconButton img_src={email} />
// 			</a>
// 			<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1MzXEtLKZ2h67UMKlzdBGnKA1JhoJGz-1/view?usp=sharing">
// 			<LinkButton text={"Resume"} />
// 			</a>


export default SideBar;