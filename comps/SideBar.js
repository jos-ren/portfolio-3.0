import React from 'react';
import styled from "styled-components";
import SideButton from "./SideButton"
import IconButton from "./IconButton"
import Link from 'next/link'

const Container = styled.div`
    max-height: 100vh;
    min-height: 100vh;
    width:333px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    position: fixed;
    top: 0px;
    box-shadow: 1px 0 0 0 var(--border);
    background: var(--primary);

    padding:100px 20px;
`;

const SideBar = ({ logo_src, sm_src, onClick, data }) => {
    return (
        <Container>
            <div style={{ display: "flex", width: '100%' }}>
                <SideButton img_src={logo_src} text={'Josh Renema'} />
                <IconButton onClick={onClick} img_src={sm_src} />
            </div>

            <div style={{margin:"15px 0px"}}></div>

            <p>PROJECTS</p>
            {/* maybe have a "view more button after 4-5" */}
            {data.map((o, index) => {
                return <Link key={index} href={`/projects/${encodeURIComponent(o.id)}`} >
                    <div>{o.title}</div>
                </Link>
            })}

            <div style={{margin:"15px 0px"}}></div>

            <p>SOCIALS</p>
            <div>Github</div>
            <div>Linkedin</div>
            <div>Behance</div>
            <div>Email</div>
            <div>Resume</div>

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