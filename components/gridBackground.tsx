import Image from "next/image";

export const GridBackground = () => {
    return (
        <div className="absolute w-full h-full -mt-[100px] overflow-hidden max-w-[1200px]">
            <Image src="./grid.svg" alt="grid" fill className="min-w-[900px] top-0 h-full left-0 -z-10 opacity-30" />
            <div className="w-full top-0 h-full left-0 bg-grid-gradient"/>
        </div>
    )
}