import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input.js"
import Button from "./Button.js"
import TextArea from "./TextArea.js"

const Container = styled.div`
    background-color: var(--tertiary);
    border: 1px solid var(--border);
    border-radius:8px;
    padding:20px;
    // min-height:200px;
    // min-width:180px;
`;

const ContactCard = ({ isMobile }) => {

    const FORM_ENDPOINT = 'https://public.herotofu.com/v1/2ce23ed0-ac96-11ed-a31e-753411848f80';
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };


    if (submitted) {
        return (
            <Container style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
                <div> Thank you! Your message has been sent, I'll be in touch soon.</div>
            </Container>
        );
    }

    return (
        <Container>
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
            >
                {isMobile ?
                    <div>
                        <Input type="text" placeholder="Your name" name="name" required={true} />
                        <Input type="email" placeholder="Email" name="email" required={true} />
                    </div> :
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gridTemplateRows: "1fr",
                        gridColumnGap: "20px",
                    }}>
                        <Input type="text" placeholder="Your name" name="name" required={true} />
                        <Input type="email" placeholder="Email" name="email" required={true} />
                    </div>
                }
                <TextArea placeholder="Your message" name="message" required />
                <Button type="submit" text="Send Message" />
            </form>
        </Container >
    );
};

export default ContactCard;