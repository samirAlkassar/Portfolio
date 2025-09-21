; import Image, { StaticImageData } from "next/image";
import Project_1 from "@/public/project_1.jpeg"
import Project_3 from "@/public/project_3.jpeg"
import Project_5 from "@/public/zenk-app.png"
import Project_4 from "@/public/quizgame.png"
import Project_6 from "@/public/mawja.jpeg"
import { Border } from "../borderLine";
import { Button } from "../button";

type Project = {
    id: string,
    number: number,
    imageURL: StaticImageData,
    title: string,
    codeURL: string,
    teachStack: string[],
    liveURL?: string
}
//samir
const ProjectsList: Project[] = [
    {
        id: "project1",
        number: 4,
        imageURL: Project_6,
        codeURL: "https://github.com/samirAlkassar/social-app",
        liveURL: "https://mawja.vercel.app/",
        title: "Mawja (social media platform)",
        teachStack: ["Next.js", "Node.js", "Express" , "mongoDB" ,"TailwindCSS", "Cloudinary"]
    },
    {
        id: "project3",
        number: 1,
        imageURL: Project_1,
        codeURL: "https://github.com/samirAlkassar/Bookshop-e-commerce.git",
        liveURL: "#",
        title: "Ezz El-Dean Bookshop web application (e-commerce) ",
        teachStack: ["React", "vite", "JavaScript", "CSS", "context API", "vercel", "Framer Motion"]
    },
    {
        id: "project2",
        number: 4,
        imageURL: Project_5,
        codeURL: "https://github.com/samirAlkassar/zink",
        liveURL: "https://zink-liart.vercel.app/",
        title: "ZenK (task management web application)",
        teachStack: ["React", "Next.js", "TailwindCSS", "TypeScript", "Vercel", "shadcn/ui", "firebase"]
    },

        {
        id: "project4",
        number: 3,
        imageURL: Project_3,
        codeURL: "https://github.com/samirAlkassar/Reflect-clone.git",
        liveURL: "https://reflect-clone-2ws40f8yz-samiralkassars-projects.vercel.app/",
        title: "Reflect website (clone)",
        teachStack: ["React", "Next.js", "TailwindCSS", "TypeScript", "Vercel"]
    },
    {
        id: "project6",
        number: 5,
        imageURL: Project_4,
        codeURL: "https://github.com/samirAlkassar/react-practice.git",
        liveURL: "https://react-practice-liard-nine.vercel.app/",
        title: "Quize Game web application",
        teachStack: ["React", "Vite", "TailwindCSS", "TypeScript", "Vercel"]
    },
]

export const Projects = () => {
    return (
        <section id="Works" className="text-center relative my-4 flex md:flex-row flex-col px-4 justify-between max-w-[1400px] mx-auto">
            <div>
                <h1 className="text-2xl mt-2 sticky top-[100px] mr-10">Projects</h1>
            </div>

            <div className="flex flex-col">
                <ProjectPanel />
            </div>
        </section>
    )
}


const ProjectPanel = () => {
    return (
        <div className="flex flex-col -mt-6">
            {ProjectsList.map(({ id, imageURL, number, title, teachStack, codeURL, liveURL }, index) => (
                <div key={id}>
                    <div className="flex md:flex-row flex-col items-end gap-3 md:mb-[40px] md:mt-[40px] mb-[30px] mt-[10px] md:items-start">
                        <p className="lg:text-2xl text-lg">#{number}</p>
                        <div className="flex flex-col items-start">
                            <a className="relative w-full h-full lg:w-[949px] lg:h-[636px] overflow-hidden rounded-lg cursor-pointer" href={liveURL} target="_blank" rel="noopener noreferrer">
                                <Image src={imageURL} alt={title} layout="cover" className="hover:scale-110 hover:-translate-y-6 transition-all duration-500 ease-out" />
                            </a>
                            <div className="flex justify-between w-full mt-4 items-start flex-col md:flex-row gap-3">
                                <h3 className="text-left md:text-xl text-md">{title}</h3>
                                <div className="flex gap-2">
                                    <Button href={codeURL} variant="secondary" size="extraSmall">Source Code ↗</Button>
                                    <Button href={liveURL} variant="secondary" size="extraSmall">View Live ↗</Button>
                                </div>

                            </div>
                            <div className="flex flex-wrap mt-4 md:mt-1">
                                {teachStack.map((tech, index) => (
                                    <span key={index} className="text-xs md:text-sm flex items-center justify-center bg-white bg-opacity-5 border border-white border-opacity-10 text-white-cold px-4 py-1 rounded-full mr-2 mt-2 cursor-default">{tech}</span>
                                ))}
                            </div>
                        </div>

                    </div>

                    {index === ProjectsList.length - 1 ? "" : <Border />}
                </div>
            ))}
        </div>
    )
}
