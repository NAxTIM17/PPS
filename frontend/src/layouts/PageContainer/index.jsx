const PageContainer = ({ children }) => {
	return (
		<div className="absolute inset-0 h-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-zinc-900 min-h-screen w-full flex justify-center items-center md:py-brand-2 md:px-brand-32">
			{children}
		</div>
	);
};

export default PageContainer;
