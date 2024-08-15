const MainContentLayout = ({ children }) => {
	return (
		<div className="bg-white dark:bg-black grid place-items-center rounded-brand-2 w-full h-full">
			{children}
		</div>
	);
};

export default MainContentLayout;
