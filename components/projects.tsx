;import Image, { StaticImageData } from "next/image";
import Project_1 from "../public/project_1.jpeg"
import Project_2 from "../public/project_2.jpeg"
import Project_3 from "../public/project_3.jpeg"
import { Border } from "./borderLine";
import { Button } from "./button";

const ProjectsList: {
    id: string;
    number: number;
    imageURL: StaticImageData;
    alte: string;
    title:string;
    teachStack: string[]}[] = [
    {id: "project1",
        number: 1,
        imageURL: Project_1 ,
        title:"Ezz El-Dean Bookshop web application (e-commerce) ",
        alte: "prject number 1",
        teachStack: ["React","vite" ,"JavaScript", "CSS", "context API","vercel","Framer Motion"]},
    {id: "project2",
        number: 2,
        imageURL: Project_2 ,
        title:"Linear website (clone)",
        alte: "prject number 2" ,
        teachStack:["React", "Next.js", "Typescript", "Tailwind","Vercel"]},
    {id: "project3",
        number: 3,
        imageURL: Project_3 ,
        title:"Linear website (clone)",
        alte: "prject number 3",
        teachStack: ["React", "Next.js", "TailwindCSS", "TypeScript", "Vercel"]},
]

export const Projects = () => {
    return (
        <section className="text-center relative my-4 flex md:flex-row flex-col px-4 justify-between max-w-[1400px] mx-auto">
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
            {ProjectsList.map(({id, imageURL, number, alte, title, teachStack})=>(
            <div key={id}>
                <div className="flex md:flex-row flex-col items-end gap-3 md:mb-[40px] md:mt-[40px] mb-[30px] mt-[10px] md:items-start">
                    <p className="lg:text-2xl text-lg">#{number}</p>
                    <div className="flex flex-col items-start">
                        <div className="relative w-full h-full lg:w-[949px] lg:h-[636px] overflow-hidden rounded-lg cursor-pointer">
                            <Image src={imageURL} alt={alte} layout="fit" className="hover:scale-110 hover:-translate-y-6 transition-all duration-500 ease-out"/>
                        </div>
                        <div className="flex justify-between w-full mt-4 items-start flex-col md:flex-row gap-3">
                            <h3 className="text-left md:text-xl text-md">{title}</h3>
                            <div className="flex gap-2">
                                <Button variant="secondary" size="extraSmall">View Live ↗</Button>
                                <Button variant="secondary" size="extraSmall">Source Code ↗</Button>
                            </div>
                            
                        </div>
                        <div className="flex flex-wrap mt-4 md:mt-1">
                            {teachStack.map((tech, index)=>(
                                <span key={index} className="text-xs md:text-sm flex items-center justify-center bg-white bg-opacity-5 border border-white border-opacity-10 text-white-cold px-4 py-1 rounded-full mr-2 mt-2">{tech}</span>
                            ))}
                        </div>
                    </div>
                    
                </div>
                
                <Border />
            </div>
            ))}
        </div>
    )
}
