import { Button } from "../button"
import { Section } from "../section"
import { Title } from "../title"

export const Contact = () => {
    return (
        <Section>
            <Title>Contact Me</Title>
            <p className="mt-6 text-xs md:text-2xl max-w-[62ch]">
            Please contact me directly at <span className="text-bold">samir.alkcar@gmail.com </span>or through this form.
            </p>
            <form className="mt-6 flex flex-col w-full mx-auto max-w-[800px] py-10 rounded-xl items-start gap-4 bg-white-cold bg-opacity-[0.03]">
                <input type="text" placeholder="Name" className="input-field sm:w-[70%] w-[90%]" />
                <input type="email" placeholder="Email" className="input-field sm:w-[70%] w-[90%]" />
                <textarea placeholder="Message" className="input-field sm:w-[70%] w-[90%] h-[100px]" />
                <div className="flex justify-start sm:w-[70%] w-[90%] mx-auto mt-4">
                    <Button variant="primary" size="medium">Send Message →</Button>
                </div>
                
            </form>
        </Section>
    )
}