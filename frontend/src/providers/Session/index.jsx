import { createContext, useContext, useState } from 'react';
import { clearToken } from '../../services/utils';

const Context = createContext({});

export const useSession = () => useContext(Context);

export default function SessionContextProvider({ children }) {
	const [user, setUser] = useState(null);

	const init = (user) => {
		setUser(user);
	};

	const end = () => {
		setUser(null);
		clearToken();
	};

	const value = {
		user,
		init,
		end,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
}
