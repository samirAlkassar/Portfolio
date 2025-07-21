import classNames from "classnames"

export const Title = ({children,className}:{children?:React.ReactNode, className?:string}) => {
    return (
        <h1 className={classNames("text-2xl md:text-4xl font-semibold ",className)}>{children}</h1>
    )
}