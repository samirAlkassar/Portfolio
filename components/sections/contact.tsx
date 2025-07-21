"use client";

import { Button } from "../button"
import { Section } from "../section"
import { Title } from "../title"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
    const [state, handleSubmit] = useForm("xlddawva");

    return (
        <Section id="Contact">
            <Title>Contact Me</Title>
            <p className="mt-6 text-xs md:text-2xl max-w-[62ch]">
            Please contact me directly at <a target="_blank" rel="noopener noreferrer"  href="mailto:samir.alkcar@gmail.com" className="text-bold italic underline">samir.alkcar@gmail.com </a>or through this form.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col w-full mx-auto max-w-[800px] py-10 rounded-xl items-start gap-4 bg-white-cold bg-opacity-[0.03]">
                <input type="text" id="name" name="name" placeholder="Name" className="input-field sm:w-[70%] w-[90%]" />
                <input id="email" type="email" name="email" placeholder="Email" className="input-field sm:w-[70%] w-[90%]" />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea name="message" placeholder="Message" className="input-field sm:w-[70%] w-[90%] h-[150px]" />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <div className="flex justify-start sm:w-[70%] w-[90%] mx-auto mt-4 gap-6 items-center">
                    <Button type="submit" disabled={state.submitting} variant="primary" size="medium">Send Message →</Button>
                    {state.succeeded && <p className="text-green-500 text-center">Message sent successfully!</p>}
                </div>
                
                
            </form>
        </Section>
    )
}