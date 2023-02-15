import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router'
import useColorTheme from "use-color-theme";

import Footer from '../../comps/Footer';
import Header from '../../comps/Header';

import { projects_data } from '../../public/data.js';

export default function Projects() {

    const [title, setTitle] = useState("")

    const colorTheme = useColorTheme("light-theme", {
        classNames: ["light-theme", "dark-theme"],
    });

    let sun_moon = "";
    let logo = "";
    if (colorTheme.value === "light-theme") {
        sun_moon = "/icons/sun.svg";
        logo = "/icons/logo.svg";
    } else if (colorTheme.value === "dark-theme") {
        sun_moon = "/icons/moon_w.svg";
        logo = "/icons/logo_w.svg";
    }


    const router = useRouter()
    console.log(router.query.id)

    useEffect(() => {
        if (router.query.id) {
            setTitle(projects_data[router.query.id].title)
            // maybe have a loader and when this is done to switch comps to the normal ones
        }
    });

    return (
        <>
            <Head>
                <title>Josh Renema | Projects</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="./icons/logo.png" />
            </Head>

            <Header onClick={() => { colorTheme.toggle() }} img_src={sun_moon} logo_src={logo} />

            <p>path: {router.asPath}</p>
            <div>{title}</div>
            <br/>


            <Footer />
        </>
    )
}
