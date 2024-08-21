const Bentogrid = ({children}) => {
    return (
        <div className="grid grid-rows-8 grid-cols-2 w-full h-full gap-7">
            {children}
        </div>
    );
}

export default Bentogrid;