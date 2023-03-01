import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'

import { projects_data } from '../../public/data.js';
import SectionBlock from "../../comps/SectionBlock"
import HeaderLine from "../../comps/HeaderLine"
import { useLoading, BallTriangle } from '@agney/react-loading';

import styled from "styled-components";

const Wrapper = styled.div`
    border:1px solid red;
    width:100%;
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
    console.log(DATA.introduction[0].summary)

    return (

        <>
            {/* optional video here */}
            <div style={{ borderRadius: "16px", overflow: "hidden" }}>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} width={"auto"} height={"460px"} pip={false} />
            </div>
            {/* <div style={{ borderRadius: "16px", overflow: "hidden" }}>
                <Image height="550" width="800" objectFit="cover" quality="100" src={"/pantro_thumb.png"} style={{ borderRadius: "14px" }} />
            </div> */}

            <HeaderLine header={"Introduction"} />
            <p>Summary</p>
            <div>{INTRODUCTION.summary}</div>
            <p>Core Functionalities</p>
            <div>{INTRODUCTION.functions}</div>
            <p>Role</p>
            <div>{INTRODUCTION.role}</div>
            <p>Technologies</p>
            <div>{INTRODUCTION.technologies}</div>
            <p>Links</p>
            <div>{DATA.introduction[0].links}</div>



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
