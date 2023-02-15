import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from 'next/link'
import { useRouter } from 'next/router'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import { Pagination, Navigation, Scrollbar } from "swiper";

// import data
import { projects_data } from '../public/data.js';
import { school_data } from '../public/data.js';
import { icons_data } from '../public/data.js';
// import { interests_data } from '../public/data.js';

// import components
import Card from '../comps/Card';
import IconButton from '../comps/IconButton';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import Tile from '../comps/Tile';
import LinkButton from '../comps/LinkButton';
import ContactForm from "../comps/ContactForm";
// import PhotoCard from '../comps/PhotoCard';
// import TextCard from '../comps/TextCard';

import useColorTheme from "use-color-theme";

export default function Home() {

	// useEffect(() => {
	// 	console.log(`
	// 	__.-._
	// 	'-._"7'  welcome :)
	// 	 /'.-c
	// 	 |  /T
	// 	_)_/LI
	// 	`)
	// });

	const colorTheme = useColorTheme("light-theme", {
		classNames: ["light-theme", "dark-theme"],
	});

	const [isPro, setIsPro] = useState(-1);
	const [isEdu, setIsEdu] = useState(-1);
	const [isTech, setIsTech] = useState(-1);

	let sun_moon = "";
	let github = "";
	let linkedin = "";
	let email = "";
	let behance = "";
	let link = "";
	let logo = "";
	if (colorTheme.value === "light-theme") {
		sun_moon = "/icons/sun.svg";
		github = "/icons/github.svg";
		linkedin = "/icons/linkedin.svg";
		email = "/icons/email.svg";
		behance = "/icons/behance.svg";
		link = "/icons/link.svg";
		logo = "/icons/logo.svg";
	} else if (colorTheme.value === "dark-theme") {
		sun_moon = "/icons/moon_w.svg";
		github = "/icons/github_w.svg";
		linkedin = "/icons/linkedin_w.svg";
		email = "/icons/email_w.svg";
		behance = "/icons/behance_w.svg";
		link = "/icons/link_w.svg";
		logo = "/icons/logo_w.svg";
	}

	const Grid = styled.div`
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
`;

const router = useRouter()

	return (
		<div className={styles.container}>
			<Head>
				<title>Josh Renema</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="./icons/logo.png" />
			</Head>

			<div className={styles.side}>


				<Image style={{ borderRadius: "50%" }} height="300px" width="300px" objectFit="cover" src="/profile_mountain.jpg" />
				<h1 style={{ fontWeight: "500", fontSize: "40pt", margin: '0px', marginTop: "20px" }}>Josh Renema</h1>
				<div style={{ marginBottom: "20px" }}>Fullstack Developer</div>

				<div className={styles.socials}>
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/jos-ren">
						<IconButton img_src={github} />
					</a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/josh-renema/">
						<IconButton img_src={linkedin} />
					</a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/joshrenema">
						<IconButton img_src={behance} />
					</a>
					<a target="_blank" rel="noopener noreferrer" href={"mailto:josh.renema@protonmail.com"}>
						<IconButton img_src={email} />
					</a>
					<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1MzXEtLKZ2h67UMKlzdBGnKA1JhoJGz-1/view?usp=sharing">
						<LinkButton text={"Resume"} />
					</a>
				</div>

				{/* ADD A TEXT FOR WHAT U ARE HOVERING (BEHNACE, ETC.) */}

			</div>

			{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

			<div className={styles.main}>

				<Header onClick={() => { colorTheme.toggle() }} img_src={sun_moon} logo_src={logo} />

				<Link href="/projects">test</Link>

				<p>path: {router.pathname}</p>


				<ul>
					{projects_data.map((post) => (
						<li key={post.id}>
							<Link href={`/projects/${encodeURIComponent(post.slug)}`}>
								{post.title}
							</Link>

						</li>
					))}
				</ul>



				{/* about me */}
				<h1>About Me</h1>
				{/* im a canadian full stack developer currently residing in the PNW! */}
				{/* <TextCard text={''} /> */}
				{`
				I'm a Full Stack Developer, currently living in Surrey, BC. I enjoy creating projects that live on the internet, whether that be websites, applications, or anything in between. I always strive for my projects to provide real world value.
				I’ve earned my diploma from the Digital Design and Development program at BCIT, where I’ve learned how to develop and design responsive, cross-platform applications.
				I’m currently working as a Full Stack Developer at Techies of Tommorow, a tech talent incubator that empowers recent BC tech graduates to work on real industry projects that require high-quality and cost-effective solutions.
				When I’m not spending my days coding and designing, you’ll probably find me riding my jeep out in the mountains, trying out new food with friends, or testing out my Nikon film camera. Feel free to checkout my projects below or browse to your heart's content!
				`}


				{/* add arrows? swiper demo for ijnfo */}
				<h1 style={{ marginTop: "40px" }} >Projects</h1>
				<Swiper
					modules={[Pagination, Navigation, Scrollbar]}
					slidesPerView={3.5}
					spaceBetween={0}
					scrollbar={{ draggable: true }}
					className="mySwiper"
				>
					{projects_data.map((o, index) => {
						return <SwiperSlide key={index} >
							{/* onMouseEnter={() => setIsPro(index)} onMouseLeave={() => setIsPro(-1)} */}
							<Link href={{
								pathname: '/projects/[slug]',
								query: { slug: o.slug },
							}} >
								<Card icon={o.icon} title={o.title} desc={o.desc} link={link} isShown={isPro} index={index} />
							</Link>
						</SwiperSlide>
					})}
				</Swiper>

				{/* <Grid rows={2} columns={3}>
					{projects_data.map((o, index) => {
						return <a style={{border:"1px solid red", width:"50%"}} key={index} target="_blank" rel="noopener noreferrer" href={o.link} onMouseEnter={() => setIsPro(index)} onMouseLeave={() => setIsPro(-1)}>
						<Card icon={o.icon} title={o.title} desc={o.desc} link={link} isShown={isPro} index={index} />
					</a>
					})}
				</Grid> */}
				{/* once you have enough projects, make this section 2 rows (2x5 or whatever) */}

				{/* perhaps add start dates and whether its completed or not */}
				<h1 style={{ marginTop: "50px" }}>Education</h1>
				<Swiper
					modules={[Pagination, Navigation, Scrollbar]}
					slidesPerView={2.05}
					spaceBetween={0}
					// scrollbar={{ draggable: true }}
					className="mySwiper"
				>
					{school_data.map((o, index) => {
						return <SwiperSlide key={index}>
							<a target="_blank" rel="noopener noreferrer" href={o.link} onMouseEnter={() => setIsEdu(index)} onMouseLeave={() => setIsEdu(-1)}>
								<Card icon={o.icon} title={o.title} desc={o.desc} link={link} info={o.info} isShown={isEdu} index={index} />
							</a>
						</SwiperSlide>
					})}
				</Swiper>

				<h1 style={{ marginTop: "40px" }} >Technologies</h1>
				{/* need to add more... */}
				<Grid >
					{icons_data.map((o, index) => {
						return <div key={index} onMouseEnter={() => setIsTech(index)} onMouseLeave={() => setIsTech(-1)}>
							<Tile icon={o.icon} name={o.name} index={index} isShown={isTech} />
						</div>
					})}
				</Grid>





				{/* <h1 style={{ marginTop: "30px" }}>Interests</h1>

				<Swiper
					modules={[Pagination, Navigation, Scrollbar]}
					slidesPerView={3}
					spaceBetween={0}
					scrollbar={{ draggable: true }}
					className="mySwiper"
				>
					{interests_data.map((o, i) => {
						return <SwiperSlide key={i}><PhotoCard image={o.image} desc={o.desc} /></SwiperSlide>
					})}
				</Swiper> */}


				{/* contact form */}
				<h1 style={{ marginTop: "60px" }}>Contact Me</h1>
				<ContactForm />

				{/* 
				about section
				projects section
				contact section
				 */}


				<Footer />
			</div>
		</div >
	)
}
