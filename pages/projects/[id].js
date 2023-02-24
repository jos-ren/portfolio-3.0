import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'

import { projects_data } from '../../public/data.js';
import SectionBlock from "../../comps/SectionBlock"

import styled from "styled-components";

const Wrapper = styled.div`
    border:1px solid red;
    width:100%;
`;

export default function Projects() {

    const [data, setData] = useState([])

    const router = useRouter()
    // console.log(data, "data")

    useEffect(() => {
        if (router.query.id) {
            setData(projects_data[router.query.id])
        }
    });

    return (
        <>
            {/* optional video here */}
            <div style={{ borderRadius: "16px", overflow: "hidden" }}>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} width={"800px"} height={"460px"} pip={false} />
            </div>

            <div style={{ marginBottom: "50px" }}></div>

            <SectionBlock
                title={"Introduction"}
            // points={
            //     <>
            //         {data.points.map((o, index) => {
            //             return <div key={index}>{o.point}</div>
            //         })}
            //     </>
            // } 
            />

            <SectionBlock title={"Purpose"} />

            <SectionBlock title={"Spotlight"} />

            <SectionBlock title={"Current Status"} />

            <SectionBlock title={"Lessons Learned"} />
        </>
    )
}
