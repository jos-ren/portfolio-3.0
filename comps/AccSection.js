import React, { useState } from "react";
import styled from "styled-components";
import { Accordion, AccordionItem } from 'react-sanfona';
import ItemContent from "../comps/ItemContent.js"
import Image from 'next/image'
import { useSpring, a } from "react-spring";
import { FiChevronDown } from "react-icons/fi";

const Container = styled.div`
    margin-bottom:50px;
    border-radius:8px;
    // border: 1px solid green;
    background:#f0f2f4;
`;

const ItemTitle = styled.div`
    cursor: pointer;
    width: 100%;
    height: 100px;
    // background:black;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid green;
`;

const AccSection = ({ data }) => {
    // const [flipped, setFlipped] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const { transform2 } = useSpring({
        from: {
            transform2: "rotate(-90deg)",
        },
        to: {
            transform2: `rotate(${isOpen ? 0 : -90}deg) translateX(${isOpen ? 0 : 3}px)`,
        },
    });
    const [expanded, setExpanded] = useState(-1);
    // console.log(expanded, "yo");

    const HandleOpenExpand = (open, id) => {
        // console.log(open, id)
        setOpen(open);
        setExpanded(id);
    };


    return (
        <Container>
            <Accordion>
                {data.map((o, idx) => {
                    return (
                        <AccordionItem
                            onExpand={() => HandleOpenExpand(true, idx)}
                            onClose={() => HandleOpenExpand(false, -1)}
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
                                        <a.div
                                            id={idx}
                                            style={{
                                                transform: transform2,
                                            }}
                                        >
                                            <FiChevronDown size={30} />
                                        </a.div>
                                    </div>
                                </ItemTitle>
                            }>
                            <ItemContent />
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </Container >
    );
};

export default AccSection;