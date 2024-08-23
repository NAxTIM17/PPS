import { useEffect, useReducer } from 'react';
import { createPortal } from 'react-dom';

const MainContent = ({ children }) => {
	return (
		<div className="bg-white dark:bg-black rounded-brand-2 w-full h-full flex flex-col gap-brand-2 p-brand-4">
			<div
				id="main_content_header"
				className="flex justify-between items-center"
			/>
			{children}
		</div>
	);
};

const MainContentHeader = ({ children }) => {
	const [key, rerender] = useReducer((prev) => prev + 1, 0);

	useEffect(() => {
		rerender();
	}, []);

	return (
		<>
			{document.getElementById('main_content_header') &&
				createPortal(
					children,
					document.getElementById('main_content_header'),
					key
				)}
		</>
	);
};

MainContent.Header = MainContentHeader;

export default MainContent;
