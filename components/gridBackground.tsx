import Image from "next/image";
import classNames from "classnames";
export const GridBackground = ({className, classNameImage, classNameGradient}:{className?:string, classNameImage?: string,classNameGradient?: string}) => {
    return (
        <div className = {classNames("absolute w-full h-full max-h-[750px] -z-10 overflow-hidden max-w-[1200px]",className)}>
            <div className={classNames("w-full h-full bg-grid-gradient",classNameGradient)}/>
            <Image src="./grid.svg" alt="grid" fill className={classNames("min-w-[900px] h-full -z-10 opacity-40",classNameImage)}/>
            {/* <span className="absolute w-[6.7%] h-[11%] -z-[5] bg-purple top-[114px] left-[265px] animate-square-animation"/> */}
        </div>
    )
}
