const storeToken = (token) => {
	localStorage.setItem(
		`${import.meta.env.VITE_LOCAL_STORAGE_KEY}_token`,
		token
	);
};

const clearToken = () => {
	localStorage.removeItem(`${import.meta.env.VITE_LOCAL_STORAGE_KEY}_token`);
};

export { storeToken, clearToken };
