const PageContainerLayout = ({ children }) => {
	return (
		<div className="bg-brand-200 dark:bg-brand-900 min-h-screen w-full grid place-items-center py-brand-2 px-brand-32">
			{children}
		</div>
	);
};

export default PageContainerLayout;
