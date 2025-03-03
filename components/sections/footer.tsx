import { GridBackground } from "../gridBackground"

export const Footer = () => {
    return (
        <footer className="flex relative justify-center items-center md:h-[150px] -mt-[50px] h-[140px] text-white overflow-hidden">
            <GridBackground className="h-[800px] mt-[400px]" />

            <p className="text-xs md:text-lg mt-10">

                © 2025 Samir Elkassar, All rights reserved
            </p>
        </footer>
    )
}