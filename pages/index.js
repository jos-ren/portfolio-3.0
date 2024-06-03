import Image from 'next/image'
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from 'next/link'

// Import 3rd party libraries
import useColorTheme from "use-color-theme";
import { useMediaQuery } from 'react-responsive'

// import data
import { projects_data } from '../public/data.js';
import { school_data } from '../public/data.js';
import { icons_data } from '../public/data.js';
import { interests_data } from '../public/data.js';

// import components
import Card from '../comps/Card';
import ProjectCard from '../comps/ProjectCard';
import Tile from '../comps/Tile';
import ContactCard from "../comps/ContactCard";
import HeaderLine from "../comps/HeaderLine"
// import PhotoCard from "../comps/PhotoCard";

// NOTES
// add a year to each project
// ...
// view more for sidebar
// socails just display logos?

export default function Home() {

	const colorTheme = useColorTheme("light-theme", {
		classNames: ["light-theme", "dark-theme"],
	});

	let open = "";
	let link = "";
	let github = "";
	let twitter = "";
	let youtube = "";
	if (colorTheme.value === "light-theme") {
		open = "/icons/open.svg";
		link = "/icons/link.svg";
		github = "/icons/github.svg";
		twitter = "/icons/twitter.svg";
		youtube = "/icons/youtube.svg";
	} else if (colorTheme.value === "dark-theme") {
		open = "/icons/open_w.svg";
		link = "/icons/link_w.svg";
		github = "/icons/github_w.svg";
		twitter = "/icons/twitter_w.svg";
		youtube = "/icons/youtube_w.svg";
	}

	const [isEdu, setIsEdu] = useState(-1);
	const [isTech, setIsTech] = useState(-1);


	const isTablet = useMediaQuery({ query: '(max-width: 1050px)' })
	const isMobile = useMediaQuery({ query: '(max-width: 550px)' })

	return (
		<>
			{/* 
				3 main sections of home page:
				about section
				projects section
				contact section
			*/}

			{/* {isDesktop && <p>Desktop</p>}
			{isSmallDesktop && <p>SmallDesktop</p>}
			{isTablet && <p>Tablet</p>}
			{isMobile && <p>Mobile</p>} */}

			<Image unoptimized height="350" width="1000" objectFit="cover" quality="100" src={"/profile.jpg"} style={{ borderRadius: "14px" }} />

			{/* about me */}
			{/* <HeaderLine header="About Me"/> */}
			<h1>About Me</h1>
			<div>{`My name is Josh Renema and I'm a Full Stack Developer with a passion for all things that live on the web!`}</div>
			<br />
			<div>{`I studied at BCIT and gained knowledge about both the Development process and how to Design responsive applications for today's digital world.`}</div>
			<br />
			<div>{`When I'm not at the keyboard, you'll find me hiking up in the beautiful mountains of BC, or down in the ocean paddleboarding with my dog.`}</div>

			<h1 style={{ marginTop: "50px" }} >Projects</h1>
			<div style={{ display: "grid", gridTemplateColumns: 'repeat(1, 1fr)', gridTemplateRows: '1fr', rowGap: '20px', columnGap: '20px' }} >
				{projects_data.map((o, index) => {
					return <div key={index}>
						{
							isTablet ?
								<Card icon={o.icon} title={o.title} desc={o.desc} index={index} hasPill={true} type={o.type[0].source} background={o.type[0].background} /> :
								<ProjectCard
									thumb={o.thumbnail}
									title={o.title}
									desc={o.desc}
									index={index}
									type={o.type[0].source}
									background={o.type[0].background}
									link_icon={link}
									github_icon={github}
									twitter_icon={twitter}
									youtube_icon={youtube}
									link={o.link}
									github_link={o.github_link}
									twitter_link={o.twitter_link}
									youtube_link={o.youtube_link}
									more_details={o.more_details}
								/>
						}
					</div>
				})}
			</div>

			<h1 style={{ marginTop: "40px" }}>Education</h1>
			<div style={
				isMobile ? { display: "grid", gridTemplateColumns: 'repeat(1, 1fr)', gridTemplateRows: '1fr', rowGap: '20px', columnGap: '20px' } :
					{ display: "grid", gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: '1fr', rowGap: '20px', columnGap: '20px' }
			} >
				{school_data.map((o, index) => {
					return <a key={index} target="_blank" rel="noopener noreferrer" href={o.link} onMouseEnter={() => setIsEdu(index)} onMouseLeave={() => setIsEdu(-1)}>
						<Card icon={o.icon} title={o.title} desc={o.desc} open_icon={open} info={o.info} isShown={isEdu} index={index} />
					</a>
				})}
			</div>

			<h1 style={{ marginTop: "40px" }} >Technologies</h1>
			<div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }} >
				{icons_data.map((o, index) => {
					return <div key={index} onMouseEnter={() => setIsTech(index)} onMouseLeave={() => setIsTech(-1)}>
						<Tile icon={o.icon} name={o.name} index={index} isShown={isTech} />
					</div>
				})}
			</div>

			{/* <h1 style={{ marginTop: "30px" }}>Interests</h1>
					<div style={{ display: "flex", flexWrap: 'wrap', justifyContent:"space-between"}} >
					{interests_data.map((o, i) => {
						return <PhotoCard image={o.image} desc={o.desc} />
					})}
				</div> */}

			<h1 style={{ marginTop: "40px" }}>Contact Me</h1>
			<ContactCard isMobile={isTablet} />
		</>
	)
}
