const Bentogrid = ({className, children}) => {
    return (
        <div  className={`grid grid-flow-col h-full gap-7 ${className}`}>
            {children}
        </div>
    );
}

export default Bentogrid;