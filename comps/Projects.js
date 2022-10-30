import React from "react";
import styled from "styled-components";
import Image from "next/image"
// const Card = styled.div`
// 	width:100px;
// 	height:100px;
// 	border:1px solid blue;
// 	`;

const List = styled.div`
	width:100%;
	height:100px;
	border:1px solid green;
	display:flex;
	* {
		// border: 1px solid purple;
	}
`;

const Projects = ({ shape, title, img_src, desc, link }) => {
	return (
		// {/* SCRAPPING THE SHAPE CHANGE FUNC FOR NOW */}
		// {/* {
		// 	shape ?
		// 		<List>
		// 			<img style={{
		// 				width: "50px",
		// 				height: "50px",
		// 				objectFit: "contain",
		// 				border: "1px solid blue"
		// 			}} src={img_src} />
		// 			{title}
		// 			<br />
		// 			{desc}
		// 		</List> :
		// 		<Card>
		// 			{title}
		// 			<br />
		// 			{desc}
		// 		</Card>
		// } */}

		<List>
			<div style={{
				marginRight: "25px",
				marginTop: "25px",
				marginLeft: "25px"
			}}>
				<Image height="50px" width="50px" objectFit="contain" src={img_src} />
			</div>

			<div style={{ display: "flex", flexDirection: "column" }}>
				<h3>{title}</h3>
				<div>{desc}</div>

				{/* 
				maybe instead of a view button, have a hover effect which makes peoiple click anmd open modal
				for external links, some sort of buitton will still be needed
				 */}
				{/* <a style={{
					width: "200px",
					// height: "100%",
					backgroundColor: "#3500D3",
					color: "white"
				}} href={link} target="_blank">View</a> */}
			</div>
		</List>
	);
};

export default Projects;
