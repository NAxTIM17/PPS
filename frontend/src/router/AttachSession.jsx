import { useLoaderData } from 'react-router-dom';
import { useSession } from '../providers/Session';
import { useEffect } from 'react';

const AttachSession = ({ children }) => {
	const { user } = useLoaderData();
	const session = useSession();

	useEffect(() => {
		if (user) session.init(user);
	}, [user]);

	return children;
};

export default AttachSession;
