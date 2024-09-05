export default function CardBento ({children, className, title}){
    return(
        <>
            <div className={`rounded-brand-2 grid place-items-center w-full p-2 ${className}`}>
                <div className="w-full h-full flex flex-col gap-brand justify-center items-center">
                    <h1 className="text-4xl m-5 font-extrabold">{title}</h1>
                    {children}
                </div>
            </div>
        </>
    )
}