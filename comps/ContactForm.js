import React, { useState } from "react";
import Input from "./Input.js"
import Button from "./Button.js"
import TextArea from "./TextArea.js"

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/2ce23ed0-ac96-11ed-a31e-753411848f80';


const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };


    if (submitted) {
        return (
            <>
                <div> Thank you! Your message has been sent, I'll be in touch soon.</div>
            </>
        );
    }


    return (

        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >

            <div>
                <Input type="text" placeholder="Your name" name="name" required={true} />
            </div>
            <div>
                <Input type="email" placeholder="Email" name="email" required={true} />
            </div>
            <div>
                <TextArea placeholder="Your message" name="message" required />
            </div>
            <div>
                <Button type="submit" text="Send a Message"/>
            </div>
        </form>

    );

};


export default ContactForm;