import React, { useState, useEffect } from "react";
import Image from 'next/image'
import styled from "styled-components";
import { useRouter } from 'next/router'
import useColorTheme from "use-color-theme";

import { projects_data } from '../../public/data.js';

import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'

import Pill from "../../comps/Pill"
import SideButton from "../../comps/SideButton"
import Button from "../../comps/Button"
import IconButton from "../../comps/IconButton"
import HeaderLine from "../../comps/HeaderLine"

const Text = styled.div`
    margin:10px 0px 20px 0px;
`;

const Bullet = styled.div`
    margin:10px 0px 20px 18px;
`;

export default function Projects() {

    const router = useRouter()

    let DATA = projects_data[router.query.id]
    let INTRODUCTION = projects_data[router.query.id].introduction[0]
    let PURPOSE = projects_data[router.query.id].purpose[0]
    let SPOTLIGHT = projects_data[router.query.id].spotlight[0]
    let STATUS = projects_data[router.query.id].status
    let LESSONS = projects_data[router.query.id].lessons[0]
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

            <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
                <p>Role:</p>
                <div style={{ marginLeft: "10px", display: "flex", fontSize: "14px", flexWrap: 'wrap', gap: '8px' }}>
                    <Pill text={DATA.type[0].source} color={DATA.type[0].background} />
                    {DATA.role.map((o, index) => {
                        return <Pill key={index} text={o} />
                    })}
                </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", marginTop: "6px" }}>
                <p>Technologies:</p>
                <div style={{ marginLeft: "10px", display: "flex", flexWrap: 'wrap', gap: '8px' }}>
                    {DATA.technologies.map((o, index) => {
                        return <Pill key={index} text={o} />
                    })}
                </div>
            </div>

            <HeaderLine header={"Introduction"} margin={"30px 0px 30px 0px"} />
            <p>Summary</p>
            <Text>{INTRODUCTION.summary}</Text>
            <p>Core Functionalities</p>
            {/* bullet points */}
            <Bullet>{INTRODUCTION.functions}</Bullet>
            {/* {INTRODUCTION.members !== "" && <>
                <p>Teammates</p>
                <Bullet>{INTRODUCTION.members}</Bullet>
            </>} */}

            {/* if project was started / created by you, use this */}
            {PURPOSE !== "" && <div>
                <HeaderLine header={"Purpose"} />
                <p>Why Build This Project?</p>
                <Text>{PURPOSE.why}</Text>
                <p>What Was The Expected Outcome?</p>
                <Text>{PURPOSE.what}</Text>
                <p>Initial Designs</p>
                <Text>{PURPOSE.design}</Text>
                <p>Preliminary Planning</p>
                <Text>{PURPOSE.planning}</Text>
            </div>}

            <HeaderLine header={"Spotlight"} />
            <p>Killer Feature</p>
            <Text>{SPOTLIGHT.killer_feature}</Text>
            <p>Technical Hurdles</p>
            <Text>{SPOTLIGHT.technical_hurdles}</Text>
            <p>Solutions</p>
            <Text>{SPOTLIGHT.solutions}</Text>

            {/* If the project is ongoing, use this section */}
            {STATUS !== "" && <HeaderLine header={"Current Status"} />}
            <div>{STATUS}</div>

            <HeaderLine header={"Lessons Learned"} />
            <p>What did I Learn?</p>
            <Text>{LESSONS.what}</Text>
            {LESSONS.good_choice !== "" && <div>
                <p>Was Framework good Choice?</p>
                <Text>{LESSONS.good_choice}</Text>
            </div>}
            <p>How has this affected the work I have done since?</p>
            <Text>{LESSONS.how}</Text>

        </>
    )
}
