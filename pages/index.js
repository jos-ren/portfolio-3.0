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
import Tile from '../comps/Tile';
import ContactCard from "../comps/ContactCard";
import HeaderLine from "../comps/HeaderLine"
// import PhotoCard from "../comps/PhotoCard";


export default function Home() {

	const colorTheme = useColorTheme("light-theme", {
		classNames: ["light-theme", "dark-theme"],
	});

	let link = "";
	if (colorTheme.value === "light-theme") {
		link = "/icons/link.svg";
	} else if (colorTheme.value === "dark-theme") {
		link = "/icons/link_w.svg";
	}

	const [isEdu, setIsEdu] = useState(-1);
	const [isTech, setIsTech] = useState(-1);

	// useEffect(() => {
	// 	console.log(`
	// 	__.-._
	// 	'-._"7'  welcome :)
	// 	 /'.-c
	// 	 |  /T
	// 	_)_/LI
	// 	`)
	// });

	// 3 cards
	const isDesktop = useMediaQuery({ query: '(max-width: 1600px)' })
	// 2 card
	const isSmallDesktop = useMediaQuery({ query: '(max-width: 1160px)' })
	// sidebar changes to top
	// still 2 cards
	const isTablet = useMediaQuery({ query: '(max-width: 880px)' })
	// 1 cards
	const isMobile = useMediaQuery({ query: '(max-width: 425px)' })

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

			<Image height="400" width="1000" objectFit="cover" quality="100" src={"/profile.jpg"} style={{ borderRadius: "14px" }} />

			{/* about me */}
			{/* <HeaderLine header="About Me"/> */}
			<h1>About Me</h1>
			{/* im a canadian full stack developer currently residing in the PNW! */}
			<div>{`I'm a 22 year old Full Stack Developer with a passion for all things that live on the web!`}</div>
			<br/>
			<div>{`I studied at BCIT and gained knowledge about both the Development process and how to Design responsive applications for today's digital world.`}</div>
			<br/> 
			<div>{`When I'm not at my keyboard, you'll find me hiking up in the beautiful Mountains of the PNW, or down by the Sea paddleboarding with my dog.`}</div>
			
			{/* have a 2 / 3 format when 3 wide & a 2 / 2 / 1 when 2 wide */}
			<h1 style={{ marginTop: "50px" }} >Projects</h1>
			<div style={
				isMobile ? { display: "grid", gridTemplateColumns: 'repeat(1, 1fr)', gridTemplateRows: '1fr', rowGap: '20px', columnGap: '20px' } :
					isSmallDesktop || isTablet ? { display: "grid", gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: '1fr', rowGap: '20px', columnGap: '20px' } :
						{ display: "grid", gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '1fr', rowGap: '20px', columnGap: '20px' }
			} >
				{projects_data.map((o, index) => {
					return <Link key={index} href={"/projects/" + index}>
						<div>
							<Card icon={o.icon} title={o.title} desc={o.desc} index={index} hasPill={true} type={o.type[0].source} background={o.type[0].background}/>
						</div>
					</Link>
				})}
			</div>

			<h1 style={{ marginTop: "40px" }}>Education</h1>
			<div style={
				isMobile ? { display: "grid", gridTemplateColumns: 'repeat(1, 1fr)', gridTemplateRows: '1fr', rowGap: '20px', columnGap: '20px' } :
					{ display: "grid", gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: '1fr', rowGap: '20px', columnGap: '20px' }
			} >
				{school_data.map((o, index) => {
					return <a key={index} target="_blank" rel="noopener noreferrer" href={o.link} onMouseEnter={() => setIsEdu(index)} onMouseLeave={() => setIsEdu(-1)}>
						<Card icon={o.icon} title={o.title} desc={o.desc} link={link} info={o.info} isShown={isEdu} index={index} />
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
			<ContactCard isMobile={isTablet}/>
		</>
	)
}
