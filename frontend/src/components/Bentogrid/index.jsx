const Bentogrid = ({ className, children }) => {
	return (
		<div className={`grid grid-flow-col h-full gap-spacing ${className}`}>
			{children}
		</div>
	);
};

export default Bentogrid;
