import { RouterProvider } from 'react-router-dom';
import { useAuth } from './providers/Auth';

import AuthRouter from './routers/Auth';
import BusinessRouter from './routers/Business';
import { useEffect, useState } from 'react';
import { UsersService } from './services/Users';

function App() {
	const auth = useAuth();
	const [isAttemptingAuth, setIsAttemptingAuth] = useState(false);

	useEffect(() => {
		if (!isAttemptingAuth) {
			setIsAttemptingAuth(true);

			UsersService.getUser()
				.then((user) => {
					auth?.action?.initSession(user);
				})
				.catch(() => {
					auth?.action?.endSession();
				})
				.finally(() => {
					setIsAttemptingAuth(false);
				});
		}
	}, [auth?.state?.isLogged]);

	if (isAttemptingAuth)
		return (
			<div role="page container layout">
				some nice-looking authenticating/loading page
			</div>
		);

	if (auth?.state?.isLogged) {
		return <RouterProvider router={BusinessRouter} />;
	}

	return <RouterProvider router={AuthRouter} />;
}

export default App;
