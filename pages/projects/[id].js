import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'

import { projects_data } from '../../public/data.js';
import SectionBlock from "../../comps/SectionBlock"
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
    console.log(DATA.introduction[0].summary)

    return (

        <>
            {/* optional video here */}
            {/* <div style={{ borderRadius: "16px", overflow: "hidden" }}>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} width={"800px"} height={"460px"} pip={false} />
            </div> */}
            {/* <div style={{ borderRadius: "16px", overflow: "hidden" }}>
                <Image height="550" width="800" objectFit="cover" quality="100" src={"/pantro_thumb.png"} style={{ borderRadius: "14px" }} />
            </div> */}

            <div style={{ marginBottom: "50px", width: "800px" }}></div>

            <div style={{ border: "1px solid red" }}>
                <h1>Introduction</h1>
                <p>Summary</p>
                <div>{DATA.introduction[0].summary}</div>
                <p>Core Functionalities</p>
                <div>{DATA.introduction[0].functions}</div>
                <p>Role</p>
                <div>{DATA.introduction[0].role}</div>
                <p>Technologies</p>
                <div>{DATA.introduction[0].technologies}</div>
                <p>Links</p>
                <div>{DATA.introduction[0].links}</div>
            </div>

            <div style={{ border: "1px solid red" }}>
                <h1>Purpose</h1>
                <p>Why Build This Project?</p>
                <p>What Was The Expected Outcome?</p>
                <p>Initial Designs</p>
                <p>Preliminary Planning</p>
            </div>
            <div style={{ border: "1px solid red" }}>
                <h1>Spotlight</h1>
                <p>Killer Feature</p>
                <p>Technical Hurdles</p>
                <p>Solutions</p>
            </div>
            <div style={{ border: "1px solid red" }}>
                <h1>Current Status</h1>
                <p>...</p>
            </div>
            <div style={{ border: "1px solid red" }}>
                <h1>Lessons Learned</h1>
                <p>What did I Learn?</p>
                <p>Was Framework good Choice?</p>
                <p>Accessibility</p>
                <p>How did this Project Build Knowledge</p>
            </div>
        </>
    )
}
