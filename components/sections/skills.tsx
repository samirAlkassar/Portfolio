import { GridBackground } from "../gridBackground"
import { Title } from "../title"
import classNames from "classnames"
import { Section } from "../section"
import Image from "next/image"


const skills = [
    {
        name: "React.js",
        description: "JavaScript UI library",
        icon: "./skills/react-svgrepo-com.svg"
    },
    {
        name: "Next.js",
        description: "React framework",
        icon: "./skills/nextjs-svgrepo-com.svg"
    },
    {
        name: "Javascript",
        description: "programming language",
        icon: "./skills/javascript-logo-svgrepo-com.svg"
    },
    {
        name: "TypeScript",
        description: "Typed JavaScript",
        icon: "./skills/typescript-logo-svgrepo-com.svg"
    },
    {
        name: "HTML",
        description: "markup",
        icon: "./skills/html-5-svgrepo-com.svg"
    },
    {
        name: "CSS",
        description: "Stylesheet",
        icon: "./skills/css-3-svgrepo-com.svg"
    },
    {
        name: "Tailwind",
        description: "CSS framework",
        icon: "./skills/tailwind-svgrepo-com.svg"
    },
    {
        name: "Vercel",
        description: "Frontend platform",
        icon: "./skills/vercel-svgrepo-com.svg"
    },
    {
        name: "Git",
        description: "Version control",
        icon: "./skills/git-svgrepo-com.svg"
    },
    {
        name: "Github",
        description: "Version control",
        icon: "./skills/github-142-svgrepo-com.svg"
    },
]

export const Skills = () => {
    return (
        <Section>
            <GridBackground className="-rotate-[30deg] h-[600px] -mt-[100px]" />
            <Title>My Skills</Title>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
                {skills.map(({ name, description, icon }) => (

                    <div key={name} className={classNames("bg-white relative cursor-pointer bg-opacity-20 border items-start border-white border-opacity-30 flex p-2 rounded-lg",
                        "before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-white-cold",
                        "hover:before:w-full before:rounded-lg before:transition-all before:duration-300 before:ease-in-out",
                        "before:-z-10 before:bg-opacity-30"
                    )}>
                        <div className="relative p-1 mr-2 w-[35px] h-full md:w-[60px]">
                            <Image src={icon} alt="icon" objectFit="fit" layout="fill" className="abosulte top-0 right-0 w-full h-full" />
                        </div>
                        
                        <div className="flex flex-col items-start text-left">
                            <h1 className="text-sm sm:text-lg md:text-xl font-semibold">{name}</h1>
                            <p className="text-xs md:text-base text-white opacity-70">{description}</p>
                        </div>
                    </div>

                ))}
            </div>
        </Section>
    )
}


