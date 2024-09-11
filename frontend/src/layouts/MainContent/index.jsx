import { useEffect, useReducer } from 'react';
import { createPortal } from 'react-dom';

import UserBadge from '../../components/UserBadge';

const MainContent = ({ children }) => {
	return (
	<div className="absolute inset-0 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] w-full flex justify-center items-center md:py-brand-2 md:px-brand-32">
		<div className="bg-gray-100 rounded-brand-2 w-full h-full flex flex-col p-3 drop-shadow-md overflow-hidden">
			<div
				id="main_content_header"
				className="flex justify-between items-center"
				/>
			{children}
		</div>
			<div className="absolute right-5 top-5 bg-zinc-200 p-2 rounded-full">
					<UserBadge />
			</div>
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
			{
				createPortal(
					children,
					document.getElementById('root'),
					key
				)
			}
		</>
	);
};

MainContent.Header = MainContentHeader;

export default MainContent;
