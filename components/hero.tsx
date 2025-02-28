import classNames from "classnames"
import Image from "next/image"
import { VerifiedIcon } from "./icons/verified"
import { GithubIcon } from "./icons/github"
import LinkedInIcon from "./icons/linkedin"
import { FacebookIcon } from "./icons/facebook"
import { Button } from "../components/button"
import { RightArrowIcon } from "./icons/right-arrow"
import { DownloadIcon } from "./icons/download"

export const Hero = () => {
    return (
        <section className="w-full flex flex-col items-center relative mt-[100px] pb-[200px]">
            <div className={classNames("rounded-full md:w-[86px] md:h-[86px] w-[65px] h-[65px] relative border-[2px] border-white",
                "before:absolute before:top-1.5 before:left-1.5 before:h-[50px] before:w-[50px] before:md:h-[70px] before:md:w-[70px] before:bg-purple before:bg-avatar-gradient before:blur-2xl"
            )}>
                <Image src="/samir.jpg"
                    layout="fill"
                    objectFit="fill"
                    alt="samir photo"
                    className="rounded-full" />
                <VerifiedIcon className="text-verification w-7 h-7 absolute bottom-0 -right-2 z-10" />
            </div>

            <p className="text-lg mt-4">{"Hi, I'm Samir"}</p>
            <div className="flex mt-2 gap-3">
                <GithubIcon className="cursor-pointer md:w-8 w-6" />
                <LinkedInIcon className="cursor-pointer md:w-8 w-6" />
                <FacebookIcon className="cursor-pointer md:w-8 w-6" />
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold text-gradient">
                React <span className="text-purple">Front-End</span> <br /> Web Developer
            </h1>

            <div className="bg-primary border-nav-border rounded-full p-2 flex gap-2 mt-8">
                <Button size="medium" variant="primary">Contact me here <RightArrowIcon className="w-6 mt-1 ml-1" /></Button>
                <Button size="medium" variant="primary" className="bg-opacity-0 text-white">Download CV <DownloadIcon className="w-6 ml-1" /></Button>
            </div>
        </section>
    )
}