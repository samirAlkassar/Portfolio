import { GridBackground } from "../gridBackground"

export const Footer = () => {
    return (
        <footer className="flex relative justify-center items-center h-[100px] text-white overflow-hidden">
            <GridBackground className="h-[800px] mt-[400px]" />

            <p className="text-xs md:text-lg md:my-[50px] my-4">

                © 2025 Samir Elkassar, All rights reserved
            </p>
        </footer>
    )
}