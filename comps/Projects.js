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

const Projects = ({ shape }) => {
	return (
		<>
			{
				shape ?
					<List>list</List> :
					<Card>shape</Card>
			}
		</>
	);
};

export default Projects;
