import classNames from "classnames"

export const Border = ({className}:{className?:string}) => {
    return (
        <div className={classNames("w-full mx-auto max-w-[1400px]",className)}>
            <div className=" border-t-[1px] border-opacity-10 border-white w-full"/>
        </div>

    )
}