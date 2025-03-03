import { ChevronDown } from "lucide-react"
import { GridBackground } from "../gridBackground"
import { Title } from "../title"
import { Section } from "../section"

const aboutMeText: string = `I graduated with computer since degree and speciated at web development, 
            I love coding and engineering websites that both look good and function as
            expected. I love the problem solving aspect and figuring out a solution to
            a problem, I’m a competitive person as well who love taking on challenges and improve himself.`;

export const About = () => {
    return (
        <Section id="About">
            <GridBackground className="h-[500px] -mt-[60px] rotate-12" classNameGradient="" />

            <Title>About Me</Title>
            <p className="mt-8 text-xs md:text-2xl max-w-[62ch]">
                {aboutMeText}
            </p>
            <ChevronDown className="mt-14" />
        </Section>
    )
}