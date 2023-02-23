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
    // console.log(data.screenshots, "data")

    useEffect(() => {
        if (router.query.id) {
            setData(projects_data[router.query.id])
        }
    });

    return (
        <>
            {/* optional video here */}
            <div style={{border:"1px solid red", borderRadius:"8px"}}>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} width={"800px"} height={"460px"} pip={false} />
            </div>

            <SectionBlock title={"Introduction"} />
            {/* 
Introduction
• High-level summary of what the project is
• List of core functionalities / interesting features
• Your role in the project. were you exclusively doing development, or did you do
design? If you worked in groups, what parts did you tackle?
• Technologies used
• Links to live demo + source code (if applicable)
Purpose and Goal
• Why did you build this project? Why is it important to you?
• What was the expected outcome of the project?
• What were the initial designs?
• Any other preliminary planning that you did which helps build a narrative 
*/}
            <h1 style={{ width: "100%", border: "1px solid green" }}>Spotlight</h1>
            {/* 
Spotlight
• What is the “killer feature” of your project? What feature does it have that took the
most work, or was the most technically impressive? Some possible examples:
◦ User authentication
◦ A feed of items fetched from a database
◦ A particularly tricky UI element (eg. autocomplete, calendar, drag-and-drop)
◦ Anything you’re proud of!
• What were the technical hurdles that got in your way? Any major problems you hit
during development?
• How did you solve those problems? What was the solution? Go deep here, and write
with a developer in mind. 
*/}
            <h1>Current Status</h1>
            {/* 
Current status
• This section is optional. If the project is actively being used by real people, talk a little
bit about the current status, who uses it, why they use it, what they say to you about
it, stuff like that.
• If the project was contrived specifically for the portfolio, omit this section. 
*/}
            {/* <h1>Lessons Learned</h1> */}
            {/* 
Lessons Learned
• What did you learn doing this project? Feel free to list multiple things. Also feel free to
cover non-technical lessons. It’s great to talk about how you learned to use an
advanced feature of a framework or library, but it’s just as valuable to talk about
project-management experience, or things you learned about shipping projects.
• If you used a framework or other libraries/tools, was it a good choice? How did it
help? In which ways was it insufficient?
• Is your project accessible? What did you learn about accessibility, while building this
project? Describing how you tested your project using keyboard navigation or a screen-
reader can make for a really compelling story!
• How has this affected the work you’ve done since then? Real examples of how this
project built your knowledge for future projects is fantastic. 
*/}

            {/* <div>{data.id}</div>
            <div>{data.title}</div>
            <div>{data.desc}</div>
            <Image height="50px" width="50px" objectFit="contain" src={data.icon} />
            <div>{data.github_link}</div>
            <div>{data.link}</div> */}
            {/* {data.screenshots.map((o, index) => {
                return (
                    <Image key={index} height="500px" width="200px" objectFit="contain" src={o.src} />
                )
            })} */}
        </>
    )
}
