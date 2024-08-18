const PageContainer = ({ children }) => {
	return (
		<div className="bg-brand-200 dark:bg-brand-900 min-h-screen w-full grid place-items-center md:py-brand-2 md:px-brand-32">
			{children}
		</div>
	);
};

export default PageContainer;
