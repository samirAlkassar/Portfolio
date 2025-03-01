;import Image, { StaticImageData } from "next/image";
import Project_1 from "../public/project_1.jpeg"
import Project_2 from "../public/project_2.jpeg"
import Project_3 from "../public/project_3.jpeg"
import { Border } from "./borderLine";

const ProjectsList: {
    id: string;
    number: number;
    URL: StaticImageData;
    alte: string;}[] = [
    {id: "project1", number: 1, URL: Project_1, alte: "prject number 1"},
    {id: "project2", number: 2, URL: Project_2, alte: "prject number 2"},
    {id: "project3", number: 3, URL: Project_3, alte: "prject number 3"},
]

export const Projects = () => {
    return (
        <section className="text-center relative my-4 flex md:flex-row flex-col px-4 justify-between max-w-[1400px] mx-auto">
            <div>
                <h1 className="text-2xl sticky top-[80px]">Projects</h1>
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
            {ProjectsList.map(({id, URL, number, alte})=>(
            <div key={id}>
                <div className="flex md:flex-row flex-col items-center gap-3 mb-[60px] mt-[40px]">
                    <p className="text-2xl">#{number}</p>
                    <div>
                        <div className="relative h-[300px] w-[450px] md:w-[949px] md:h-[636px] overflow-hidden rounded-lg cursor-pointer">
                            <Image src={URL} alt={alte} layout="fill" className="hover:scale-110 hover:-translate-y-6 transition-all duration-500 ease-out"/>
                        </div>
                    </div>
                </div>
                <Border />
            </div>
            ))}
            
        </div>
    )
}