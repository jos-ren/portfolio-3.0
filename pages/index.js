import Image from 'next/image'
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Link from 'next/link'

// Import 3rd party libraries
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper";
import useColorTheme from "use-color-theme";

// import data
import { projects_data } from '../public/data.js';
import { school_data } from '../public/data.js';
import { icons_data } from '../public/data.js';
import { interests_data } from '../public/data.js';

// import components
import Card from '../comps/Card';
import Tile from '../comps/Tile';
import ContactForm from "../comps/ContactForm";
import PhotoCard from "../comps/PhotoCard";


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

	return (
		<>

			{/* 
				3 main sections of home page:
				about section
				projects section
				contact section
			*/}

			{/* <Image height="400" width="1000" objectFit="cover" quality="100" src={"/test.jpg"} style={{ borderRadius: "14px" }} /> */}

			{/* about me */}
			<h1>About Me</h1>
			{/* im a canadian full stack developer currently residing in the PNW! */}
			{`
				I'm a Full Stack Developer, currently living in Surrey, BC. I enjoy creating projects that live on the internet, whether that be websites, applications, or anything in between. I always strive for my projects to provide real world value.
				I’ve earned my diploma from the Digital Design and Development program at BCIT, where I’ve learned how to develop and design responsive, cross-platform applications.
				I’m currently working as a Full Stack Developer at Techies of Tommorow, a tech talent incubator that empowers recent BC tech graduates to work on real industry projects that require high-quality and cost-effective solutions.
				When I’m not spending my days coding and designing, you’ll probably find me riding my jeep out in the mountains, trying out new food with friends, or testing out my Nikon film camera. Feel free to checkout my projects below or browse to your heart's content!
			`}

			<h1 style={{ marginTop: "40px" }} >Projects</h1>
			<div style={{ display: "grid", gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '1fr' }} >
				{projects_data.map((o, index) => {
					return <Card icon={o.icon} title={o.title} desc={o.desc} link={link} index={index} />
				})}
			</div>

			<h1 style={{ marginTop: "50px" }}>Education</h1>
			<div style={{ display: "grid", gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: '1fr' }} >
				{school_data.map((o, index) => {
					return <a style={{}} key={index} target="_blank" rel="noopener noreferrer" href={o.link} onMouseEnter={() => setIsEdu(index)} onMouseLeave={() => setIsEdu(-1)}>
						<Card icon={o.icon} title={o.title} desc={o.desc} link={link} info={o.info} isShown={isEdu} index={index} />
					</a>
				})}
			</div>

			<h1 style={{ marginTop: "40px" }} >Technologies</h1>
			<div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }} >
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

			<h1 style={{ marginTop: "60px" }}>Contact Me</h1>
			<ContactForm />

		</>
	)
}
