import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from "react";

import { Theme } from "../styles/theme";
import { projects_data } from '../public/data.js';
import { school_data } from '../public/data.js';
import { design_data } from '../public/data.js';

import AccSection from "../comps/AccSection.js"
import IconButton from '../comps/IconButton';
import Button from '../comps/Button';
import Footer from '../comps/Footer';

import useColorTheme from "use-color-theme";

export default function Home() {

	const [copied, setCopied] = useState(true);
	// const [copied, setCopied] = useState(true);
	const [show, setShow] = useState(false);

	const colorTheme = useColorTheme("dark-theme", {
		classNames: ["light-theme", "dark-theme"],
	});

	let sun_moon = "";
	let github = "";
	let linkedin = "";
	let email = "";
	let resume = "";
	if (colorTheme.value === "light-theme") {
		sun_moon = "/icons/sun.svg";
		github = "/icons/github.svg";
		linkedin = "/icons/linkedin.svg";
		email = "/icons/email.svg";
		resume = "/icons/resume.svg";
	} else if (colorTheme.value === "dark-theme") {
		sun_moon = "/icons/moon_w.svg";
		github = "/icons/github_w.svg";
		linkedin = "/icons/linkedin_w.svg";
		email = "/icons/email_w.svg";
		resume = "/icons/resume_w.svg";
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Josh Renema</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="./icons/logo.png" />
			</Head>

			<div className={styles.side}>

				<div>
					{/* <Image height="100px" width="100px" objectFit="cover" src={"/profile.jpg"} style={{ borderRadius: "50%" }} /> */}
				</div>

				<h1 onClick={() => { console.log("test") }}>Josh Renema</h1>
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
					{/* <Button href="https://drive.google.com/file/d/1zH8T0XU913RQCSfOq5ps4SPHl8En4zF7/view?usp=sharing" text="Resume" /> */}
					{/* <IconButton href={"https://instagram.com/jos-ren"} img_src={"/icons/instagram.svg"} /> */}
					{/* <IconButton href={"mailto:josh.renema@protonmail.com"} img_src={"/icons/grid-four.svg"} /> */}
					{/* <IconButton href={"mailto:josh.renema@protonmail.com"} img_src={"/icons/hard-drives.svg"} /> */}
					{/* <IconButton href={"mailto:josh.renema@protonmail.com"} img_src={"/icons/discord.svg"} /> */}
					<IconButton onClick={() => { colorTheme.set('light-theme') }} img_src={sun_moon} />
					<IconButton onClick={() => { colorTheme.set('dark-theme') }} img_src={sun_moon} />
				</div>


				{/* about me */}
				{/* <p>I'm a Full Stack Developer and Designer, currently living in Surrey, Canada. I enjoy creating projects that live on the internet, whether that be websites, applications, or anything in between. I always strive for my projects to provide real world value.</p>
				<p>I’ve just wrapped up my diploma at the Digital Design and Development program at BCIT, where I’ve learned how to develop and design responsive, cross-platform applications.</p>
				<p>I’m currently working as a Full Stack Developer at Techies of Tommorow, a tech talent incubator that empowers recent BC tech graduates to work on real industry projects that require high-quality and cost-effective solutions.</p>
				<p>When I’m not spending my days coding and designing, you’ll probably find me riding my jeep out in the mountains, trying out new food with friends, or testing out my Nikon film camera. Feel free to checkout my projects below or browse to your heart's content!</p> */}


			</div>

			<div className={styles.main}>

				<div>

					{/* NOTES */}

					{/* need to turn accordians into components */}
					{/* add a dropdown arrow into accordian, which flips when pressed */}
					{/* add a carousel into tile content for viewing images */}
					{/* add space for short summary of prject  */}
					{/* add chips for small descriptors of project, like python, react, ui, etc. */}
					{/* add a view more button on each expanded, to redirect to website to see more (BCIT, harvard, behance, etc)*/}
					{/* rounded corners on accordians 6px  */}

					{/* eventually try and fix all warning in vercel */}
					{/* perhaps move bio to main, above projects? */}
					{/* resize pngs and get rid of padding inside image */}

					{/* get copy email button working */}

					{/* 1. add animations when switching shapes
					2. animations when modal expands
					2.5 hover on tiles slightly makes it bigger?
					3. get theme for bg and text working / universal
						3.1 color palletes
							3.1.1 light theme
							3.1.2 dark theme
							3.1.3 fun theme
						3.2 theme switcher
						3.3 import custom fonts
					4. footer and header
					 */}

					<h1>Projects</h1>
					<AccSection data={projects_data} />

					<h1>Design</h1>
					<AccSection data={design_data} />

					<h1>Education</h1>
					<AccSection data={school_data} />


					<Footer />

				</div>
			</div>
		</div >
	)
}
