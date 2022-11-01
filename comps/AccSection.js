import React, { useState } from "react";
import styled from "styled-components";
import { Accordion, AccordionItem } from 'react-sanfona';
import TileContent from "../comps/TileContent.js"
import Image from 'next/image'

const Container = styled.div`
    margin-bottom:50px;
`;

const ItemTitle = styled.div`
    cursor: pointer;
    width: 100%;
    height: 100px;
    border: 1px solid green;
    // background:black;
    display: flex;
    justify-content: space-between;
`;


const AccSection = ({ data }) => {
    const [flipped, setFlipped] = useState(false);
    return (
        <Container>
            <Accordion >
                {data.map((o) => {
                    return (
                        <AccordionItem
                            duration={300}
                            onExpand={() => { console.log("expand", o.id), setFlipped(true) }}
                            // onClose={() => { setFlipped(false) }}
                            key={o.id}
                            title={
                                <ItemTitle>
                                    <div style={{ display: "flex" }}>
                                        <div style={{
                                            marginRight: "25px",
                                            marginTop: "25px",
                                            marginLeft: "25px"
                                        }}>
                                            <Image height="50px" width="50px" objectFit="contain" src={o.icon} />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <h3>{o.title}</h3>
                                            <div>{o.desc}</div>
                                        </div>
                                    </div>
                                    <div style={{
                                        marginRight: "25px",
                                        marginTop: "35px",
                                    }}>
                                        {/* have img flip on click, and on close */}
                                        {flipped
                                            ? <Image width={"30px"} height={"30px"} src={"/icons/chevron-up.svg"} />
                                            : <Image width={"30px"} height={"30px"} src={"/icons/chevron-down.svg"} />
                                        }
                                    </div>
                                </ItemTitle>
                            }>
                            <TileContent />
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </Container>
    );
};

export default AccSection;