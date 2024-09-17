import { useEffect, useReducer } from 'react';
import { createPortal } from 'react-dom';

import { IconHomeMove } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import UserBadge from '../../components/UserBadge';

const MainContent = ({ children }) => {
	const navigate = useNavigate();

	return (
		<div className="absolute inset-0 bg-color-background w-full flex justify-center items-center md:py-brand-2 md:px-brand-32">
			<div className="bg-color-bg-surface rounded-outer-border w-full h-full flex flex-col p-spacing overflow-hidden z-10">
				{children}
			</div>
			<UserBadge />
			{window.location.pathname != '/inicio' && (
				<div className="absolute h-12 w-20 bg-color-fill-secondary left-40 top-10 rounded-inner-border text-color-border border border-color-border flex justify-start items-center pl-spacing cursor-pointer" onClick={() => navigate('/inicio')}>
					<IconHomeMove stroke={1} size={30}/>
				</div>
			)}
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
