const Bentogrid = ({ children }) => {
	return (
		<div className="grid grid-rows-8 grid-cols-2 w-full h-full gap-brand-2">
			{children}
		</div>
	);
};

export default Bentogrid;
