import React, { useState, useEffect } from "react";
import Image from 'next/image'
import styled from "styled-components";
import { useRouter } from 'next/router'
import useColorTheme from "use-color-theme";

import { projects_data } from '../../public/data.js';

import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'

import Pill from "../../comps/Pill"
import Button from "../../comps/Button"
import IconButton from "../../comps/IconButton"
import HeaderLine from "../../comps/HeaderLine"

const Text = styled.div`
    margin:10px 0px 20px 0px;
`;

const Caption = styled.div`
    width:100%;
    font-size:12px;
    margin-bottom:30px;
    display:flex;
    justify-content:center;
`;

const SubHeader = styled.p`
    font-size:11.5px;
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
                    <div className='player-wrapper'>
                        <ReactPlayer url={DATA.header_media} controls={true} width={"100%"} height={"100%"} pip={false} className='react-player' />
                    </div>
                </div>
            }

            <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
                <SubHeader>Role:</SubHeader>
                <div style={{ marginLeft: "10px", display: "flex", fontSize: "14px", flexWrap: 'wrap', gap: '8px' }}>
                    <Pill text={DATA.type[0].source} color={DATA.type[0].background} />
                    {DATA.role.map((o, index) => {
                        return <Pill key={index} text={o} />
                    })}
                </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", marginTop: "6px" }}>
                <SubHeader>Technologies:</SubHeader>
                <div style={{ marginLeft: "10px", display: "flex", flexWrap: 'wrap', gap: '8px' }}>
                    {DATA.technologies.map((o, index) => {
                        return <Pill key={index} text={o} />
                    })}
                </div>
            </div>

            <HeaderLine header={"Introduction"} margin={"30px 0px 30px 0px"} />
            <SubHeader>Summary</SubHeader>
            <Text>{INTRODUCTION.summary}</Text>
            <SubHeader>Core Functionalities</SubHeader>
            {/* bullet points */}
            <Bullet>{INTRODUCTION.functions}</Bullet>
            {INTRODUCTION.members !== "" && <>
                <SubHeader>Teammates</SubHeader>
                <Bullet>{INTRODUCTION.members}</Bullet>
            </>}

            {/* if project was started / created by you, use this */}
            {PURPOSE !== "" && <div>
                <HeaderLine header={"Purpose"} />
                <SubHeader>Why Build This Project?</SubHeader>
                <Text>{PURPOSE.why}</Text>

                {PURPOSE.what !== "" && <>
                    <SubHeader>What Was The Expected Outcome?</SubHeader>
                    <Text>{PURPOSE.what}</Text>
                </>}

                {PURPOSE.design !== "" && <>
                    <SubHeader>Initial Designs</SubHeader>
                    <Text>{PURPOSE.design_desc}</Text>
                    {PURPOSE.design.map((o, index) => {
                        return <div key={index}>
                            <Image height="1080" width="1920" objectFit="cover" quality="100" src={o.img} style={{ borderRadius: "14px" }} />
                            <Caption>{o.caption}</Caption>
                        </div >
                    })}
                </>}
                {PURPOSE.planning !== "" && <>
                    <SubHeader>Additional Planning</SubHeader>
                    <Text>{PURPOSE.planning}</Text>
                </>}
            </div>}


            {/* add 2 photos for spotlight */}
            <HeaderLine header={"Spotlight"} />
            <SubHeader>Killer Feature</SubHeader>
            <Text>{SPOTLIGHT.killer_feature}</Text>
            <SubHeader>Technical Hurdles</SubHeader>
            <Text>{SPOTLIGHT.technical_hurdles}</Text>
            <SubHeader>Solutions</SubHeader>
            <Text>{SPOTLIGHT.solutions}</Text>
            {SPOTLIGHT.solution_img !== "" && <>
                <Image height="1080" width="1920" objectFit="cover" quality="100" src={SPOTLIGHT.solution_img} style={{ borderRadius: "14px" }} />
                <Caption>{SPOTLIGHT.solution_img_caption}</Caption>
            </>}

            {/* If the project is ongoing, use this section */}
            {STATUS !== "" && <HeaderLine header={"Current Status"} />}
            <div>{STATUS}</div>

            <HeaderLine header={"Lessons Learned"} />
            <SubHeader>What did I Learn?</SubHeader>
            <Text>{LESSONS.what}</Text>
            {LESSONS.good_choice !== "" && <div>
                <SubHeader>Was Framework good Choice?</SubHeader>
                <Text>{LESSONS.good_choice}</Text>
            </div>}
            {LESSONS.how !== "" && <>
                <SubHeader>How has this affected the work I have done since?</SubHeader>
                <Text>{LESSONS.how}</Text>
            </>}

        </>
    )
}
