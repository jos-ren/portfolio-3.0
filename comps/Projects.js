import React from "react";
import styled from "styled-components";

const Card = styled.div`
	width:100px;
	height:100px;
	border:1px solid blue;
	`;

const List = styled.div`
	width:100%;
	height:100px;
	border:1px solid blue;
`;

const Img = styled.div`
	width:50px;
	height:50px;
	border:1px solid blue;
`;

const Projects = ({ shape, title, img_src, desc }) => {
	return (
		<div>
			{
				shape ?
					<List>
						{title}
						<br/>
						{desc}
					</List> :
					<Card>
						{title}
						<br/>
						{desc}
					</Card>
			}

			<Img>
				<img style={{ 
					width:"50px",
					height:"50px",
					objectFit: "contain"
					}} src={img_src} />
			</Img>
		</div>
	);
};

export default Projects;
