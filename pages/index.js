import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from "react";
import styled from "styled-components";

import { projects_data } from '../public/data.js';
import { school_data } from '../public/data.js';
import { design_data } from '../public/data.js';

import AccSection from "../comps/AccSection.js"
import IconButton from '../comps/IconButton';
import Footer from '../comps/Footer';
import Header from '../comps/Header';

import useColorTheme from "use-color-theme";

export default function Home() {

	const colorTheme = useColorTheme("light-theme", {
		classNames: ["light-theme", "dark-theme"],
	});

	let sun_moon = "";
	let github = "";
	let linkedin = "";
	let email = "";
	let resume = "";
	let behance = "";
	if (colorTheme.value === "light-theme") {
		sun_moon = "/icons/sun.svg";
		github = "/icons/github.svg";
		linkedin = "/icons/linkedin.svg";
		email = "/icons/email.svg";
		resume = "/icons/resume.svg";
		behance = "/icons/behance.svg";
	} else if (colorTheme.value === "dark-theme") {
		sun_moon = "/icons/moon_w.svg";
		github = "/icons/github_w.svg";
		linkedin = "/icons/linkedin_w.svg";
		email = "/icons/email_w.svg";
		resume = "/icons/resume_w.svg";
		behance = "/icons/behance_w.svg";
	}

	const Title = styled.h1`
	font-family: ThunderBold;
	font-size: 120pt;
	background: var(--gradiant);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin:0px;
	padding:0px;
	letter-spacing:5px
`;

	return (
		<div className={styles.container}>
			<Head>
				<title>Josh Renema</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="./icons/logo.png" />
			</Head>

			<div className={styles.side}>

				{/* <div>
					<Image height="100px" width="100px" objectFit="cover" src={"/profile.jpg"} style={{ borderRadius: "50%" }} />
				</div> */}
				<div style={{ position: "relative", bottom: "-50px" }}>
					<Title>JOSH</Title>
					<Title style={{
						fontSize: "50pt",
						marginBottom: "20px",
						fontFamily: "ThunderLight",
						letterSpacing: "20px",
						top: "-50px",
						left: "10px",
						position: "relative"
					}}>RENEMA</Title>
				</div>
				<div className={styles.socials}>
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/jos-ren">
						<IconButton img_src={github} />
					</a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/josh-renema/">
						<IconButton img_src={linkedin} />
					</a>
					<a target="_blank" rel="noopener noreferrer" href={"mailto:josh.renema@protonmail.com"}>
						<IconButton img_src={email} />
					</a>
					<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1zH8T0XU913RQCSfOq5ps4SPHl8En4zF7/view?usp=sharing">
						<IconButton img_src={resume} />
					</a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/joshrenema">
						<IconButton img_src={behance} />
					</a>
				</div>


				{/* about me */}
				{/* <p>I'm a Full Stack Developer and Designer, currently living in Surrey, Canada. I enjoy creating projects that live on the internet, whether that be websites, applications, or anything in between. I always strive for my projects to provide real world value.</p>
				<p>I’ve just wrapped up my diploma at the Digital Design and Development program at BCIT, where I’ve learned how to develop and design responsive, cross-platform applications.</p>
				<p>I’m currently working as a Full Stack Developer at Techies of Tommorow, a tech talent incubator that empowers recent BC tech graduates to work on real industry projects that require high-quality and cost-effective solutions.</p>
				<p>When I’m not spending my days coding and designing, you’ll probably find me riding my jeep out in the mountains, trying out new food with friends, or testing out my Nikon film camera. Feel free to checkout my projects below or browse to your heart's content!</p> */}


			</div>

			<div className={styles.main}>

				{/* NOTES */}

				{/* add a dropdown arrow into accordian, which flips when pressed */}
				{/* add a carousel into tile content for viewing images */}
				{/* add space for short summary of prject  */}
				{/* add chips for small descriptors of project, like python, react, ui, etc. */}
				{/* add a view more button on each expanded, to redirect to website to see more (BCIT, harvard, behance, etc)*/}

				{/* eventually try and fix all warning in vercel */}
				{/* perhaps move bio to main, above projects? */}
				{/* resize pngs and get rid of padding inside image */}

				{/* 3.3 import custom fonts */}
				{/* add a bold font for josh, and a slimmer smaller one for renema. */}
				{/* 4. header */}

				<Header onClick={() => { colorTheme.toggle() }} img_src={sun_moon} />

				<h1>Projects</h1>
				<AccSection data={projects_data} />

				<h1>Design</h1>
				<AccSection data={design_data} />

				<h1>Education</h1>
				<AccSection data={school_data} />

				<Footer />
			</div>
		</div >
	)
}
