import { Navigate } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';

const AuthGuardRoute = ({ children }) => {
	const auth = useAuth();

	if (auth?.state?.isAttemptingAuth)
		return (
			<div>
				authenticating page / in-business main container layout loader
			</div>
		);

	if (!auth?.state?.isLogged) {
		return <Navigate to="/login" />;
	}

	return children;
};

export default AuthGuardRoute;
