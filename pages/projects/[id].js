import React, { useState, useEffect } from "react";
import Image from 'next/image'
import styled from "styled-components";
import { useRouter } from 'next/router'
import useColorTheme from "use-color-theme";

import { projects_data } from '../../public/data.js';

import ReactPlayer from 'react-player'
import { useLoading, BallTriangle } from '@agney/react-loading';
import { useMediaQuery } from 'react-responsive'

import Pill from "../../comps/Pill"
import SideButton from "../../comps/SideButton"
import Button from "../../comps/Button"
import IconButton from "../../comps/IconButton"
import HeaderLine from "../../comps/HeaderLine"

const Text = styled.div`
    margin:10px 0px;
`;

export default function Projects() {

    const router = useRouter()


    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 500);
    }, []);

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <BallTriangle width="70" />,
    })

    let DATA = projects_data[router.query.id]
    let INTRODUCTION = projects_data[router.query.id].introduction[0]
    // let PURPOSE = projects_data[router.query.id].purpose[0]
    // console.log(INTRODUCTION.technologies)

    const colorTheme = useColorTheme("light-theme", {
        classNames: ["light-theme", "dark-theme"],
    });

    let github = "";
    let link = "";
    if (colorTheme.value === "light-theme") {
        github = "/icons/github.svg";
        link = "/icons/link.svg";
    } else if (colorTheme.value === "dark-theme") {
        github = "/icons/github_w.svg";
        link = "/icons/link_w.svg";
    }

    const isTablet = useMediaQuery({ query: '(max-width: 880px)' })
    // 1 cards
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' })

    return (

        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div>
                    <h1 style={{ margin: "0px", }}>{DATA.title}</h1>
                </div>
                {/* buttons to website links, github links */}
                <div style={{ display: "flex" }}>
                    {DATA.link !== "" && <a target="_blank" rel="noopener noreferrer" href={DATA.link} >
                        <Button text="View Site" background="var(--tertiary)" color="var(--text)" />
                    </a>}
                    {DATA.github_link !== "" && <a target="_blank" rel="noopener noreferrer" href={DATA.github_link} >
                        <IconButton icon={<Image src={github} height={20} width={20} />} />
                    </a>}
                </div>
            </div>

            {/* if no video, use image as a header*/}
            {"/" == DATA.header_media.split("", 1)[0] ?
                <div style={{ borderRadius: "16px", overflow: "hidden" }}>
                    <Image height="1080" width="1920" objectFit="cover" quality="100" src={DATA.header_media} style={{ borderRadius: "14px" }} />
                </div> :
                <div style={{ borderRadius: "16px", overflow: "hidden" }}>
                    <ReactPlayer url={DATA.header_media} controls={true} width={"auto"} height={"460px"} pip={false} />
                </div>
            }

            {/* school or work project*/}
            {/* <Text>{INTRODUCTION.role}</Text> */}

            <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
                <p>Tags:</p>
                <div style={{ marginLeft: "10px", display: "flex", flexWrap: 'wrap', gap: '8px' }}>
                    {DATA.technologies.map((o, index) => {
                        return <Pill key={index} text={o} />
                    })}
                </div>
            </div>

            <HeaderLine header={"Introduction"} margin={"40px 0px 30px 0px"} />
            <p>Summary</p>
            <Text>{INTRODUCTION.summary}</Text>
            <p>Core Functionalities</p>
            {/* bullet points */}
            <Text>{INTRODUCTION.functions}</Text>



            <HeaderLine header={"Purpose"} />
            <p>Why Build This Project?</p>
            <p>What Was The Expected Outcome?</p>
            <p>Initial Designs</p>
            <p>Preliminary Planning</p>

            <HeaderLine header={"Spotlight"} />
            <p>Killer Feature</p>
            <p>Technical Hurdles</p>
            <p>Solutions</p>

            <HeaderLine header={"Current Status"} />
            <p>...</p>

            <HeaderLine header={"Lessons Learned"} />
            <p>What did I Learn?</p>
            <p>Was Framework good Choice?</p>
            <p>Accessibility</p>
            <p>How did this Project Build Knowledge</p>

        </>
    )
}
