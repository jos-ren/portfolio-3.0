import React from "react";
import styled from "styled-components";
import Carousel from 'react-elastic-carousel';

const Container = styled.div`
    height:300px;
    // border:1px solid red;
    background:var(--tertiary);
`;
import { projects_data } from '../public/data.js';

const ItemContent = ({ }) => {
    return (
        <Container>
            {/* <Carousel itemsToShow={5}>
                {projects_data.map((o, i) => {
                    return (
                        <div key={i}>{o.id}</div>
                    );
                })}
            </Carousel> */}
        </Container>
    );
};

export default ItemContent;
