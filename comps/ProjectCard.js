import React from "react";
import styled from "styled-components";
import Image from 'next/image'
import Pill from "./Pill"
import IconButton from "./IconButton"
import Button from "./Button"
import Link from 'next/link'

const Container = styled.div`
    background-color: var(--tertiary);
    border: 1px solid var(--border);
    border-radius:8px;
    padding:20px;
    min-height:200px;
    min-width:180px;
    transition: bottom .2s;
    transition-timing-function: ease-out;
    position:relative;
    bottom:0px;
    display:flex;
    justify-content:space-between;
    :hover{
        // position:relative;
        // bottom:2px;
        // box-shadow: 0 1px 3px -2px rgba(0,0,0,.3);
    }
`;

const ProjectCard = ({ title, desc, thumb, index, more_details, link, github_link, twitter_link, youtube_link, twitter_icon, github_icon, link_icon, youtube_icon }) => {
    return (
        <Container>
            <div style={{
                width: "100%",
                // border:"1px solid green",
                marginRight: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <div>

                    <div style={{ display: "flex", height: "30px", justifyContent: "space-between" }}>
                        <h2 style={{ position: "relative", top: "-20px" }}>{title}</h2>
                        {/* <Pill text={type} color={background} /> */}
                    </div>
                    <div style={{ margin: "20px 0px" }}>{desc}</div>
                </div>
                <div style={{ display: "flex" }}>
                    {/* buttons need a hover */}
                    {/* add a youtube icon */}
                    {more_details !== false && <Link key={index} href={"/projects/" + index}>
                        <div style={{ width: "145px" }}>
                            <Button text="More Details" background="var(--tertiary)" color="var(--text)" />
                        </div>
                    </Link>}
                    <div
                     style={more_details === false ? {position:"relative", right:"20px", display:"flex"} : {display:"flex"}}
                     >
                        {link !== "" && <a target="_blank" rel="noopener noreferrer" href={link} >
                            <IconButton icon={<Image unoptimized src={link_icon} height={20} width={20} />} />
                        </a>}
                        {github_link !== "" && <a target="_blank" rel="noopener noreferrer" href={github_link} >
                            <IconButton icon={<Image unoptimized src={github_icon} height={20} width={20} />} />
                        </a>}
                        {twitter_link !== "" && <a target="_blank" rel="noopener noreferrer" href={twitter_link} >
                            <IconButton icon={<Image unoptimized src={twitter_icon} height={20} width={20} />} />
                        </a>}
                        {youtube_link !== "" && <a target="_blank" rel="noopener noreferrer" href={youtube_link} >
                            <IconButton icon={<Image unoptimized src={youtube_icon} height={20} width={20} />} />
                        </a>}
                    </div>
                </div>
            </div>
            {/* when smaller screen sizes just use icons and differnt layout */}
            {more_details !== false ? <Link key={index} href={"/projects/" + index} >
                <div style={{ height: "180px", minWidth: "300px", cursor: "pointer" }} >
                    <Image unoptimized height="180px" width="300px" src={thumb} objectFit="cover"
                        style={{ borderRadius: "8px", }}
                    />
                </div>
            </Link> :
                <a target="_blsank" rel="noopener noreferrer" href={link} >
                    <div style={{ height: "180px", minWidth: "300px", cursor: "pointer" }} >
                        <Image unoptimized height="180px" width="300px" src={thumb} objectFit="cover"
                            style={{ borderRadius: "8px", }}
                        />
                    </div>
                </a>}
        </Container>
    );
};

export default ProjectCard;