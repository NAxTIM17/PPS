export default function CardBento ({children, className, title}){
    return(
        <>
            <div className={`grid place-items-center w-full h-full rounded-brand-2 bg-white ${className}`}>
                <div className="flex flex-col w-full h-full gap-3 justify-center items-center">
                    <h1 className="text-4xl font-extrabold">{title}</h1>
                    {children}
                </div>
            </div>
        </>
    )
}