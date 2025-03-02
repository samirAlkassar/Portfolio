import { ChevronDown } from "lucide-react"
import { GridBackground } from "./gridBackground"

const aboutMeText: string = `I graduated with computer since degree and speciated at web development, 
            I love coding and engineering websites that both look good and function as
            expected. I love the problem solving aspect and figuring out a solution to
            a problem, I’m a competitive person as well who love taking on challenges and improve himself.`

export const About = () => {
    return (
        <section className="text-center mx-4 flex md:mt-[80px] mt-[40px] md:pb-[200px] pb-[100px] items-center flex-col relative overflow-x-clip overflow-y-hidden">
            <GridBackground className="h-[500px] -mt-[60px] rotate-12" classNameGradient=""/>

            <h1 className="text-2xl md:text-4xl font-semibold ">About Me</h1>
            <p className="mt-8 text-xs md:text-2xl max-w-[62ch]">
                {aboutMeText}  
            </p>
            <ChevronDown className="mt-14"/>
        </section>
    )
}