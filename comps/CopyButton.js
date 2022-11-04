import React from "react";
import styled from "styled-components";
import Image from "next/image";
import IconButton from '../comps/IconButton';
import Button from '../comps/Button';

const CopyButton = ({ isCopied, img_src}) => {
    // console.log(isCopied, "copy", "yo")
    return (
        // maybe add a transition instead for smooth animation
        <>
            {isCopied ? <IconButton img_src={img_src} /> : <Button text={'Copied'} />}
        </>
    );
};

export default CopyButton;
