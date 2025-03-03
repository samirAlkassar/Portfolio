export const Section = ({ children }: {children:React.ReactNode}) => {
    return <section className="text-center mx-4 flex md:mt-[80px] mt-[40px] md:pb-[200px] pb-[100px] items-center flex-col relative overflow-x-clip">
        {children}
    </section>;
}