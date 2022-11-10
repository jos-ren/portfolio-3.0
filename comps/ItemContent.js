import React from "react";
import styled from "styled-components";
import Carousel from 'react-elastic-carousel';
import Image from 'next/image'

const Container = styled.div`
    height:490px;
    padding-top:30px;
    // border:1px solid red;
    background:var(--tertiary);
`;
import { projects_data } from '../public/data.js';
console.log(projects_data[3].screenshots)

const ItemContent = ({ id }) => {
    return (
        <Container>
            {/* mobile screenshots */}
            {/* change carousel arrow to match accordians */}
            <Carousel itemsToShow={3}>
                {projects_data[id].screenshots.map((o, i) => {
                    // console.log(o.src)
                    return (
                        <div key={i}><Image height={400} width={200} src={o.src} style={{borderRadius:"6px"}}/></div>
                    );
                })}
            </Carousel>
            {/* desktop screenshots */}
        </Container>
    );
};

export default ItemContent;
