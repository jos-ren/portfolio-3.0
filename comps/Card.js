import React from "react";
import styled from "styled-components";
import Image from 'next/image'

const Container = styled.div`
    background-color: var(--secondary);
    border-radius:8px;
    padding:20px;
    height:200px;
    margin-right:30px
`;

const Card = ({ title, desc, icon }) => {
    return (
        <Container>
            <div>
                <Image height="50px" width="50px" objectFit="contain" src={icon} />
            </div>
            <h3 style={{margin:"0px"}}>{title}</h3>
            <div>{desc}</div>
            {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
            {/* </div> */}
        </Container>
    );
};

export default Card;
