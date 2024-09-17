import { useEffect, useReducer } from 'react';
import { createPortal } from 'react-dom';

import UserBadge from '../../components/UserBadge';

const MainContent = ({ children }) => {
	return (
		<div className="absolute inset-0 bg-color-background w-full flex justify-center items-center md:py-brand-2 md:px-brand-32">
			<div className="bg-color-bg-surface rounded-outer-border w-full h-full flex flex-col p-spacing overflow-hidden">
				<div
					id="main_content_header"
					className="flex justify-between items-center"
				/>
				{children}
			</div>
			<UserBadge />
			<div className="absolute w-12 h-full bg-color-fill-primary left-0"></div>
		</div>
	);
};

const MainContentHeader = ({ children }) => {
	const [key, rerender] = useReducer((prev) => prev + 1, 0);

	useEffect(() => {
		rerender();
	}, []);

	return <>{createPortal(children, document.getElementById('root'), key)}</>;
};

MainContent.Header = MainContentHeader;

export default MainContent;
