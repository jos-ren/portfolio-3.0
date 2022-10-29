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

const Projects = ({ shape, title }) => {
	return (
		<div>
			{
				shape ?
					<List>
						{title}
					</List> :
					<Card>
						{title}
					</Card>
			}
		</div>
	);
};

export default Projects;
