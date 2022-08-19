import React from "react";
import styled from "styled-components";
import profile_img from "../public/profile.jpg";
import Image from "next/image";

const Main = styled.div`
  border: 0;
  border-radius: 4px;
  height: 45px;
  min-width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;	
`;

const Img = ({ img_src, width, height }) => {
	return <Main>
		<Image src={img_src} width={width} height={height} />
	</Main>
};

export default Img;
