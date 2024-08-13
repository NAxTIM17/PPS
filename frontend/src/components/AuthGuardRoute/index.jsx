import { useEffect } from 'react';
import { useAuth } from '../../providers/Auth';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthGuardRoute = ({ children }) => {
	const auth = useAuth();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		navigate(auth?.state?.isLogged ? '/inicio' : '/login');
	}, [location.pathname, auth?.state?.isLogged]);

	return children;
};

export default AuthGuardRoute;
