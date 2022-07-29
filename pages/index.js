import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from "react";
import { Theme } from "../styles/theme";
import Projects from "../comps/Projects.js"
import { projects_data } from '../public/data.js';

export default function Home() {
	const [bgColor, setBgColor] = useState(Theme.colors.white);
	const [fontColor, setFontColor] = useState(Theme.colors.black);
	const [shape, setShape] = useState(false);

	// needs to be global
	const toggleBgColor = () => {
		if (bgColor == Theme.colors.black) {
			setBgColor(Theme.colors.white);
			setFontColor(Theme.colors.black);
		} else {
			setBgColor(Theme.colors.black);
			setFontColor(Theme.colors.white);
		}
	};

	const toggleShape = () => {
		setShape(!shape)
		// use motion for animations
	};

	return (
		<div className={styles.container} style={{ background: bgColor }}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.side}>
				<button onClick={toggleBgColor}>toggle theme</button>
				<button onClick={toggleShape}>toggle shape</button>
				<div>shape: {shape}</div>
				side
			</div>
			<div className={styles.main}>
				<div style={shape ? {} : {
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gridTemplateRows: "repeat(5, 1fr)",
					gridColumnGap: "0px",
					gridRowGap: "0px",
					border: "1px solid gold"
				}}>
					{/* work */}
					{/* personal projects */}
					{projects_data.map((o) => {
						return (
							<Projects
								key={o.id}
								title={o.title}
								shape={shape}
							/>
						);
					})}
				</div>
			</div>
		</div >
	)
}
