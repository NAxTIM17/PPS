import { createContext, useContext, useState } from 'react';
import { clearToken } from '../../services/utils';

const Context = createContext({});

export const useAuth = () => useContext(Context);

export default function AuthContextProvider({ children }) {
	const [isLogged, setIsLogged] = useState(false);
	const [user, setUser] = useState(null);

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

	const value = {
		state: { isLogged, user },
		action: { initSession, endSession, initSessionWithoutUser },
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
}
