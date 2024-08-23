const Bentogrid = ({rows, cols, children}) => {
    return (
        <div className={`grid grid-rows-${rows} grid-cols-${cols} w-full h-full gap-7`}>
            {children}
        </div>
    );
}

export default Bentogrid;