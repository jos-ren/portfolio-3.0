import React from "react";
import styled from "styled-components";

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
			<div style={{ marginRight: "20px" }}>
				<img style={{
					width: "50px",
					height: "50px",
					objectFit: "contain",
					border: "1px solid red"
				}} src={img_src} />
			</div>

			<div style={{ display: "flex", flexDirection: "column" }}>
				<div>{title}</div>
				<div>{desc}</div>
				<button><a href={link} target="_blank">View</a></button>
			</div>
		</List>
	);
};

export default Projects;
