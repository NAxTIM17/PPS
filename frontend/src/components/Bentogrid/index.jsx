const Bentogrid = ({className, children}) => {
    return (
        <div  className={`grid grid-flow-col h-full gap-3 ${className}`}>
            {children}
        </div>
    );
}

export default Bentogrid;