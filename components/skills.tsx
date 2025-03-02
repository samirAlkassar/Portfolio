import { GridBackground } from "./gridBackground"
import { Title } from "./title"

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
        <section className="text-center mx-4 flex md:mt-[80px] mt-[40px] md:pb-[200px] pb-[100px] items-center flex-col relative overflow-x-clip">
            <GridBackground className="-rotate-[30deg] h-[600px] -mt-[100px]"/>
            <Title>My Skills</Title>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
                {skills.map(({name, description, icon})=>(
                    <div key={name} className="bg-white bg-opacity-15 border items-start border-white border-opacity-30 flex p-2 rounded-lg">
                        <img src={icon} alt="icon" className="p-1 mr-2 w-[35px] md:w-[60px]" />
                        <div className="flex flex-col items-start text-left">
                            <h1 className="text-sm sm:text-lg md:text-xl">{name}</h1>
                            <p className="text-xs md:text-base text-white opacity-70">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}


