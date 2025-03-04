import { ChevronDown } from "lucide-react"
import { GridBackground } from "../gridBackground"
import { Title } from "../title"
import { Section } from "../section"

const aboutMeText: string = `I have a degree in Computer Science with a specialization in web development. 
I build responsive, high-performance websites that are both visually appealing and functional. 
Passionate about problem-solving, I enjoy tackling challenges and continuously improving my skills. 
I'm always eager to learn and take on new opportunities in frontend development.`;


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