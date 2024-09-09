import { useEffect, useReducer } from 'react';
import { createPortal } from 'react-dom';

const MainContent = ({ children }) => {
	return (
		<div className="bg-gray-100 dark:bg-zinc-900 rounded-brand-2 w-full h-full flex flex-col p-2 drop-shadow-md overflow-hidden">
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
