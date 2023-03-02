import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'
import { projects_data } from '../../public/data.js';
import SectionBlock from "../../comps/SectionBlock"
import HeaderLine from "../../comps/HeaderLine"
import { useLoading, BallTriangle } from '@agney/react-loading';
import styled from "styled-components";


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
    console.log(DATA.header_media.split("", 1)[0])

    return (

        <>
            <h1>{DATA.title}</h1>
            {/* if no video, use image as a header*/}
            {"/" == DATA.header_media.split("", 1)[0] ?
                <div style={{ borderRadius: "16px", overflow: "hidden" }}>
                    <Image height="1080" width="1920" objectFit="cover" quality="100" src={DATA.header_media} style={{ borderRadius: "14px" }} />
                </div> :
                <div style={{ borderRadius: "16px", overflow: "hidden" }}>
                    <ReactPlayer url={DATA.header_media} controls={true} width={"auto"} height={"460px"} pip={false} />
                </div> 
            }


            <HeaderLine header={"Introduction"} />
            <p>Summary</p>
            <Text>{INTRODUCTION.summary}</Text>
            <p>Core Functionalities</p>
            {/* bullet points */}
            <Text>{INTRODUCTION.functions}</Text>
            <p>Role</p>
            <Text>{INTRODUCTION.role}</Text>
            <p>Technologies</p>
            <Text>{INTRODUCTION.technologies}</Text>
            <p>Links</p>
            <Text>{INTRODUCTION.link}</Text>



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
