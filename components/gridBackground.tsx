import Image from "next/image";

export const GridBackground = () => {
    return (
        <div className="absolute w-full h-full max-h-[750px] -mt-[100px] overflow-hidden max-w-[1200px]">
            <div className="w-full h-full bg-grid-gradient"/>
            <Image src="./grid.svg" alt="grid" fill className="min-w-[900px] h-full -z-10 opacity-30" />
            {/* <span className="absolute w-[6.7%] h-[11%] -z-[5] bg-purple top-[114px] left-[265px] animate-square-animation"/> */}
        </div>
    )
}