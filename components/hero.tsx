import classNames from "classnames"
import Image from "next/image"
import { VerifiedIcon } from "./icons/verified"
import { GithubIcon } from "./icons/github"
import LinkedInIcon from "./icons/linkedin"
import { FacebookIcon } from "./icons/facebook"
import { Button } from "../components/button"
// import { RightArrowIcon } from "./icons/right-arrow"
// import { DownloadIcon } from "./icons/download"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const socialMediaLinks = {
    "FACEBOOK": "https://www.facebook.com/samir.elkassr/",
    "LINKEDIN": "https://www.linkedin.com/in/samir-elkassar-17a3a523a/",
    "GITHUB": "https://github.com/samirAlkassar"
}

export const Hero = () => {
    return (
        <section className="w-full flex flex-col items-center relative md:mt-[100px] mt-[80px] md:pb-[200px] pb-[100px]">
            <div className={classNames("rounded-full md:w-[86px] md:h-[86px] w-[70px] h-[70px] relative md:border-2 border-[2px] border-white",
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
                <Link title="Github" href={socialMediaLinks["GITHUB"]} target="_blank"><GithubIcon className="cursor-pointer md:w-8 w-6" /></Link>
                <Link title="Linkedin" href={socialMediaLinks["LINKEDIN"]} target="_blank"><LinkedInIcon className="cursor-pointer md:w-8 w-6" /></Link>
                <Link title="Facebook" href={socialMediaLinks["FACEBOOK"]} target="_blank"><FacebookIcon className="cursor-pointer md:w-8 w-6" /></Link>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl mt-4 font-semibold text-gradient">
                React <span className="text-purple">Front-End</span> <br /> Web Developer
            </h1>

            <div className="bg-primary border-nav-border rounded-full p-2 flex gap-2 mt-4">
                <Button size="medium" variant="primary">
                    Contact me here →
                </Button>
                <Button size="medium" variant="primary" className="bg-opacity-0 text-white">
                    Download CV
                </Button>
            </div>
            <ChevronDown className="mt-14"/>
        </section>
    )
}