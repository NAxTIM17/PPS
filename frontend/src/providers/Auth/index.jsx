import { createContext, useContext, useEffect, useState } from 'react';
import { clearToken } from '../../services/utils';
import { UsersService } from '../../services/Users';

const Context = createContext({});

export const useAuth = () => useContext(Context);

export default function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);
	const [isLogged, setIsLogged] = useState(false);
	const [isAttemptingAuth, setIsAttemptingAuth] = useState(true);

	const initSessionWithoutUser = () => {
		setIsLogged(true);
	};

	const initSession = (user) => {
		setUser(user);
		setIsLogged(true);
	};

	const endSession = () => {
		setUser(null);
		setIsLogged(false);
		clearToken();
	};

	const attemptAuth = () => {
		setIsAttemptingAuth(true);

		UsersService.getUser()
			.then((user) => {
				initSession(user);
			})
			.catch(() => {
				endSession();
			})
			.finally(() => {
				setIsAttemptingAuth(false);
			});
	};

	useEffect(() => {
		attemptAuth();
	}, []);

	const value = {
		state: { isLogged, user, isAttemptingAuth },
		action: {
			initSession,
			endSession,
			initSessionWithoutUser,
			attemptAuth,
		},
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
}
