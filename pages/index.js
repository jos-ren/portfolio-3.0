import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from "react";
import { Theme } from "../styles/theme";
import Projects from "../comps/Projects.js"
import { projects_data } from '../public/data.js';
import { school_data } from '../public/data.js';
import { design_data } from '../public/data.js';
import { motion } from "framer-motion"

// todos:
// - add theme changer (fonts, colors, etc)
// - add header 
// - add footers
// - sidebar (socials, bio, photo, ) 


export default function Home() {
	// const [bgColor, setBgColor] = useState(Theme.colors.white);
	// const [fontColor, setFontColor] = useState(Theme.colors.black);
	// const [shape, setShape] = useState(false);
	// const [isVisible, setIsVisible] = useState(true);

	// // needs to be global
	// const toggleBgColor = () => {
	// 	if (bgColor == Theme.colors.black) {
	// 		setBgColor(Theme.colors.white);
	// 		setFontColor(Theme.colors.black);
	// 	} else {
	// 		setBgColor(Theme.colors.black);
	// 		setFontColor(Theme.colors.white);
	// 	}
	// };

	// scrapping this func for now
	// const toggleShape = () => {
	// 	setShape(!shape);
	// 	setIsVisible(!isVisible);
	// 	// use motion for animations
	// };

	return (
		<div className={styles.container}
		// style={{ background: bgColor }}
		>
			<Head>
				<title>Josh Renema</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="./icons/logo.png" />
			</Head>

			<div className={styles.side}>

				{/* <button onClick={toggleBgColor}>toggle theme</button> */}
				{/* <button onClick={toggleShape}>toggle shape</button> */}

				<div>
					<img style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%" }} src={"./profile.jpg"} />
				</div>

				<h1>Josh Renema</h1>
				<div>socials</div>
				<div><a href="https://drive.google.com/file/d/1zH8T0XU913RQCSfOq5ps4SPHl8En4zF7/view?usp=sharing" target="_blank">Resume</a></div>

				{/* about me */}
				{/* <p>I'm a Full Stack Developer and Designer, currently living in Surrey, Canada. I enjoy creating projects that live on the internet, whether that be websites, applications, or anything in between. I always strive for my projects to provide real world value.</p>
				<p>I’ve just wrapped up my diploma at the Digital Design and Development program at BCIT, where I’ve learned how to develop and design responsive, cross-platform applications.</p>
				<p>I’m currently working as a Full Stack Developer at Techies of Tommorow, a tech talent incubator that empowers recent BC tech graduates to work on real industry projects that require high-quality and cost-effective solutions.</p>
				<p>When I’m not spending my days coding and designing, you’ll probably find me riding my jeep out in the mountains, trying out new food with friends, or testing out my Nikon film camera. Feel free to checkout my projects below or browse to your heart's content!</p> */}


			</div>

			{/* <motion.div animate={{ opacity: isVisible ? false : true }}>test </motion.div> */}
			<div className={styles.main}>

				<div
				// style={shape ? {} : {
				// 	display: "grid",
				// 	gridTemplateColumns: "repeat(3, 1fr)",
				// 	gridTemplateRows: "repeat(5, 1fr)",
				// 	gridColumnGap: "0px",
				// 	gridRowGap: "0px",
				// 	border: "1px solid gold"
				// }}
				>

					<h1>Projects</h1>
					{/* projects */}
					{projects_data.map((o) => {
						return (
							<Projects
								key={o.id}
								title={o.title}
								desc={o.desc}
								link={o.link}
								img_src={o.icon}
							// shape={shape}
							/>
						);
					})}
					{/* on click, expand to a modal (above) */}

					<br />
					<br />

					<h1>Design</h1>
					{/* design  */}
					{design_data.map((o) => {
						return (
							<Projects
								key={o.id}
								title={o.title}
								desc={o.desc}
								link={o.link}
							// shape={shape}
							/>
						);
					})}

					<br />
					<br />

					<h1>Education</h1>
					{/* school */}
					{school_data.map((o) => {
						return (
							<Projects
								key={o.id}
								title={o.title}
								desc={o.desc}
								link={o.link}
								// shape={shape}
								img_src={o.icon}
							/>
						);
					})}

				</div>
			</div>
		</div >
	)
}
